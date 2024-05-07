import React from 'react';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';
import { 
  dataReader, 
  mostRepeatedChannels, 
  mostRepeatedCategories, 
  higherAVGlikes, 
  higherAVGdisLikes } from './utils/dataReader'
import "./components/App.css"
// Importar los datos de un archivo separado idealmente
import { pieData1, pieData2, barData1, barData2 } from './data';

function App() {
    return (
        <div className="App">
            <h1>Dashboard</h1>
            <div className="chart-container">
                <div className="sub-container">
                    <PieChart data={pieData1} />
                </div>
                <div className="sub-container">
                    <PieChart data={pieData2} />
                </div>
                <div className="sub-container">
                    <BarChart data={barData1} />
                </div>
                <div className="sub-container">
                    <BarChart data={barData2} />
                </div>
            </div>
        </div>
    );
}

export default App;
