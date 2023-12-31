import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="content">
        <h1>Ajiz Website is under construction </h1>
        <p>Working day and night!</p>
      </div>
      <div id="outerCraneContainer">
        <div className="buildings">
          <div></div>
          <div className="1"></div>
          <div className="2"></div>
          <div className="3"></div>
          <div className="4"></div>
        </div>
        <div className="crane craneThree">
          <div className="line lineOne"></div>
          <div className="line lineTwo"></div>
          <div className="line lineThree"></div>
          <div className="stand"></div>
          <div className="weight"></div>
          <div className="cabin"></div>
          <div className="arm"></div>
        </div>
        <div className="crane craneTwo">
          <div className="line lineOne"></div>
          <div className="line lineTwo"></div>
          <div className="line lineThree"></div>
          <div className="stand"></div>
          <div className="weight"></div>
          <div className="cabin"></div>
          <div className="arm"></div>
        </div>
        <div className="crane craneOne">
          <div className="line lineOne"></div>
          <div className="line lineTwo"></div>
          <div className="line lineThree"></div>
          <div className="stand"></div>
          <div className="weight"></div>
          <div className="cabin"></div>
          <div className="arm"></div>
        </div>
      </div>
    </>
  )
}

export default App
