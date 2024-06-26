import React, { useState, useEffect } from 'react';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import { dataReader, mostRepeatedChannels, mostRepeatedCategories, higherAVGlikes, higherAVGdisLikes } from './utils/dataReader'
import "./components/App.css"
import { pieData2, barData1, barData2 } from './data';

function App() {

  const [dataChannels, setDataChannels] = useState({})
  const [dataCategories, setDataCategories] = useState({})
  const [dataLikes, setDataLikes] = useState({})
  const [dataDislikes, setDataDislikes] = useState({})

  useEffect(() => {
    const channels = mostRepeatedChannels()
    const labels = Object.keys(channels)
    const data = Object.values(channels)

    const completeData = {
      labels: labels,
      datasets: [
          {
              label: 'Canales con más videos',
              data: data,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
          },
      ],
    }
    setDataChannels(completeData)
  }, []);

  useEffect(() => {
    const categories = mostRepeatedCategories()
    const labels = Object.keys(categories)
    const data = Object.values(categories)

    const completeData = {
      labels: labels,
      datasets: [
          {
              label: 'Categorias más vistas',
              data: data,
              // backgroundColor: 'rgba(75, 192, 192, 0.6)',
              // borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
          },
      ],
    }
    setDataCategories(completeData)
  }, []);

  useEffect(() => {
    const likes = higherAVGlikes()
    const labels = Object.keys(likes)
    const data = Object.values(likes)

    const completeData = {
      labels: labels,
      datasets: [
          {
              label: 'Canales con mejor promedio de likes',
              data: data,
              backgroundColor: 'rgba(79, 238, 77, 0.58)',
              borderColor: 'rgba(36, 244, 33, 0.89)',
              borderWidth: 1,
          },
      ],
    }
    setDataLikes(completeData)
  }, []);

  useEffect(() => {
    const dislikes = higherAVGdisLikes()
    const labels = Object.keys(dislikes)
    const data = Object.values(dislikes)

    const completeData = {
      labels: labels,
      datasets: [
          {
              label: 'Canales con mayor promedio de dislikes',
              data: data,
              backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Rojo
              borderColor: 'rgba(255, 99, 132, 1)',        // Borde rojo más fuerte
              borderWidth: 1,
          },
      ],
    }
    setDataDislikes(completeData)
  }, []);

  return (
      <div className="App">
          <h1>Dashboard</h1>
          <div className="chart-container">
              <div  className="sub-container sub-container-dislike">
                <BarChart data={dataDislikes.hasOwnProperty("labels") ? dataDislikes : barData1} />
              </div>
              <div className="sub-container sub-container-like">
                  <BarChart data={dataLikes.hasOwnProperty("labels") ? dataLikes : barData1} />
              </div>
              <div className="sub-container">
                  <BarChart data={dataChannels.hasOwnProperty("labels") ? dataChannels : barData2} />
              </div>
              <div className="sub-container">
                  <PieChart data={dataCategories.hasOwnProperty("labels") ? dataCategories : pieData2} />
              </div>


          </div>
      </div>
  );
}

export default App;
