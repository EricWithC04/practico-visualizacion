import './App.css'
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory'

function App() {
  
  const rotatedLabelStyle = {
    tickLabels: {
      angle: -45, 
      textAnchor: "end"
    }
  }

  return (
    <>
      <h1>Hello World</h1>
      <VictoryChart domainPadding={20}>
        <VictoryAxis
          tickValues={[8, 2, 3, 6, 5, 6, 7, 8, 8, 1]}
          tickFormat={["8", "2", "3", "6", "5", "6", "7", "8", "8", "1"]}
          style={{
            axis: { stroke: "#ffffff" },
            ticks: { stroke: "#ffffff" },
            tickLabels: { fill: "#ffffff" },
          }}
        />
        <VictoryAxis dependentAxis/>
        <VictoryBar
          style={{
            data: { fill: "tomato" },
            }}
        />
      </VictoryChart>
    </>
  )
}

export default App
