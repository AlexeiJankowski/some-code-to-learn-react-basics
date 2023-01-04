import React, {useState, useEffect} from 'react';

import './Timer.css';

const addZero = number => number < 10 ? `0${number}` : number;

const msecondsToTime = mseconds => {
  const seconds = Math.round((mseconds % 60000)/1000);
  const minutes = Math.floor(mseconds/(60 * 1000));
  const hours = Math.floor(minutes/60);
  if (mseconds) {
    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  }
  return '00:00:00';    
}

const Timer = () => {
  const [timerStart, setTimerStart] = useState();     
  const [timer, setTimer] = useState(0);   

  const [outputTimer, setOutputTimer] = useState('00:00:00');
  const [isTimerStarted, setIsTimerStarted] = useState(false); 

  useEffect(() => {
    let timeInterval;
    if (isTimerStarted) {
      timeInterval = setInterval(() => {       
        setOutputTimer(msecondsToTime(timer + (new Date() - timerStart)));
      }, 1000);
    }  
    
    if(!isTimerStarted) { 
      clearInterval(timeInterval);      
    }

    return () => clearInterval(timeInterval);
  }, [timerStart, isTimerStarted, timer])

  const onStartHandler = () => {
    setTimerStart(new Date());
    setIsTimerStarted(true);
    setOutputTimer(msecondsToTime(timer));
  }

  const onPauseHandler = () => {
    if (isTimerStarted) {
      setTimerStart(new Date());
      setTimer(timer + (new Date() - timerStart));
      setIsTimerStarted(false);
    }    
  }

  const onClearHandler = () => {
    setTimerStart(0);
    setTimer(0);
    setIsTimerStarted(false);
    setOutputTimer(msecondsToTime(0));
  }

  return (
    <>
    <main>     
      <h1>Simple Timer Application</h1> 
      <section>
        <span className="countdown">{outputTimer}</span>
        <div className="button-container">
          <button type="button" onClick={onStartHandler}>Start</button>
          <button type="button" onClick={onPauseHandler}>Pause</button>
          <button type="button" onClick={onClearHandler}>Clear</button>
        </div>
      </section>
    </main>
    </>
  )
}

export default Timer;