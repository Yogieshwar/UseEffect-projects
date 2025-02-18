import React, { useEffect } from 'react'
import { useState } from 'react'

const CountDownTimer = () => {
    const [input,setInput]=useState(0)
    const [time,setTime]=useState(0);
    const [isCounting,setIsCounting]=useState(false)
    const [intervalId,setIntervalId]=useState(null)

    useEffect(()=>{
        if(isCounting){
            const id=setInterval(()=>{
                setTime((prevTime=>{
                    if(prevTime<=0){
                        clearInterval(id);
                        setIsCounting(false);
                        return 0;
                    }
                    return prevTime-10;//decrease 1 second
                }))

            },10)
            setIntervalId(id)
        }else if(intervalId){
            clearInterval(intervalId)
            setIntervalId(null)

        }
        return()=>clearInterval(intervalId)
    },[isCounting])
    let FormatTime=(time)=>{
        let milliseconds = `0${Math.floor((time % 1000) / 10)}`.slice(-2);
        let seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
        let minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
        if (input == 1) {
            return `${seconds} Seconds`;  
        } else if (input >1 && input <= 2) {
            return `1 Minute ${seconds} Seconds`;  
        } else {
            return `${minutes} Minutes ${seconds} Seconds`;
        }
    }
   //function to start countdown
   let HandleCountdownstart=()=>{
    if(input>0){
        setTime(input*60000)
        setIsCounting(true)
    }
 

   }
  
  return (
    <>
    <h3 className='fs-1 text-success fw-bold text-center my-5'>CountDown Timer</h3>
    <div className=' d-flex justify-content-center align-items-center'>
    <div className='card text-center p-5' style={{width:"500px"}}>
        <div className='d-flex justify-content-center align-items-center'>
           <input type="text" className="text-input  form-control mx-2" placeholder="Enter Time in minutes" value={input} onChange={(e)=>setInput(Number(e.target.value))} style={{width:"200px"}}/>
           <input type="submit" onClick={HandleCountdownstart} className='submitbtn btn btn-primary py-1 l ' />
        </div>
        <p className='text-center fs-2 fw-bold my-3'>{FormatTime(time)}</p>
    </div>
    </div>
    </>
  )
}

export default CountDownTimer
