import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counta, setCounta] = useState(0)
//Value inject from outside/global {value}
  const addValue = () => {
    // console.log('value added', Math.random());
    console.log('clicked', counta);
    setCounta(counta +1) 
    //or counta = counta + 1
  } 
  const removeValue = () => {
    setCounta(counta - 1)
  }

  return (
    <>
      <h1>DanDan</h1>
      <h2>counter value: {counta}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
