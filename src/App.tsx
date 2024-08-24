import { useState } from 'react'
import './App.css'
import DisplayWeather from './components/DisplayWeather'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='App'>
         <DisplayWeather/>
      </div>
  )
}

export default App
