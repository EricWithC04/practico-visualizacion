import { useEffect, useState } from 'react'
import { dataReader, mostRepeatedChannels, mostRepeatedCategories, higherAVGlikes } from './utils/dataReader'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    mostRepeatedChannels()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
