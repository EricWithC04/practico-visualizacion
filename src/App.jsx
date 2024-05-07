import { useEffect, useState } from 'react'
import { dataReader } from './utils/dataReader'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    dataReader()
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
