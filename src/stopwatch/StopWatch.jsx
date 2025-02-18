import React from 'react'
import { useState,useEffect } from 'react'

const StopWatch = () => {
//use state for holding time,intervalis etc
const [time,setTime]=useState(0);
const [isRunning,setIsRunning]=useState(false)
const [intervalId,setIntervalId]=useState(null)


// useEffect for Handeling sideeffects like creating timee and removing timers
useEffect(()=>{
    //mounting phase
    if(isRunning){
        const id=setInterval(()=>{
            setTime(prevTime=>prevTime+10)
        },10)
        setIntervalId(id)
    }else if(intervalId){
         clearInterval(intervalId)
         setIntervalId(null)
         
    }
    return()=>clearInterval(intervalId)//[unmounting]cleanup function to remove 
},[isRunning])

//function for formating time
let FormatTime=(time)=>{
    let milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
    let seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    let minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return`${minutes}:${seconds}:${milliseconds}`
}
//function for start time
let HandleStart=()=>setIsRunning(true)
//function for stop time
let HandleStop=()=>setIsRunning(false)
//function for reset time
let HandleReset=()=>{
    setIsRunning(false)
    setTime(0)
}
  return (
    <>
    <h3 className='fs-1 text-success fw-bold text-center my-5'>Stop Watch</h3>
     <div className=' d-flex justify-content-center align-items-center'>
     <div className='card text-center p-3 ' style={{width:"300px"}}>
        <p className='fw-bold text text-uppercase fs-3'>{FormatTime(time)}</p>
        <div class="btn border-0" >
           <button type="button" class="btn btn-danger m-1" onClick={HandleStart} disabled={isRunning}>Start</button>
           <button type="button" class="btn btn-warning m-1" onClick={HandleStop} disabled={!isRunning}>Stop</button>
           <button type="button" class="btn btn-success m-1" onClick={HandleReset} >Reset</button>
       </div>
      </div>
     </div>
    </>
  )
}

export default StopWatch
