import React from 'react'
import StopWatch from './stopwatch/StopWatch'
import CountDownTimer from './countdown-timer/CountDownTimer'
import { Route,Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<StopWatch/>}/>
        <Route path='/timer' element={<CountDownTimer/>}/>
      </Routes>

      
    </div>
  )
}

export default App
