import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apagador from './Apagador'

function App() {
  const [count, setCount] =useState(0);
  const [showApagador, setShowApagador] = useState(true);

  return (
    <>
      <div>Switch</div>
      {showApagador && <Apagador/>}
      <button onClick={() => setShowApagador(!showApagador)}>Presiona aqui</button>
     
    </>
  )
}

export default App
