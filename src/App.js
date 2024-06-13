// import { clear } from '@testing-library/user-event/dist/clear';
import React from 'react';
import {useState, useEffect, useRef} from 'react';


const Timer = ({ initialSeconds = 1000, ms = 1000 }) => {
  const [count, setCount] = useState(initialSeconds);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!paused && count > 0) {
      intervalRef.current = setInterval(() => {
        setCount((count) => Math.max(count - 1, 0));
      }, ms);
    } else if (paused || count === 0) {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [paused, count, ms]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>{formatTime(count)}</div>
      <button onClick={() => setPaused(!paused)}>{paused ? 'Продовжити' : 'Пауза'}</button>
    </div>
  );
};

const TimerControl = () => {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [start, setStart] = useState(false);

  const handleStart = () => {
    setStart(true);
  };

  const handleChange = (setter) => (e) => {
    const value = Math.max(0, parseInt(e.target.value, 10) || 0);
    setter(value);
  };

  const totalSeconds = hours * 3600 + minutes * 60 + seconds;

  return (
    <div>
      {!start ? (
        <div>
          <div>
            <label>
              Години:
              <input type="number"value={hours} onChange={handleChange(setHours)}/>
            </label>
          </div>
          <div>
            <label>
              Хвилини:
              <input type="number" value={minutes} onChange={handleChange(setMinutes)}/>
            </label>
          </div>
          <div>
            <label>
              Секунди:
              <input type="number" value={seconds} onChange={handleChange(setSeconds)}
              />
            </label>
          </div>
          <button onClick={handleStart}>Start</button>
        </div>
      ) : (
        <Timer initialSeconds={totalSeconds} />
      )}
    </div>
  );
};

const TimerContainer = ({ seconds, refresh, render: RenderComponent }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const newTimeLeft = Math.max(seconds - elapsedTime, 0);
      setTimeLeft(newTimeLeft);
    }, refresh);

    return () => clearInterval(intervalId);
  }, [seconds, refresh]);

  return <RenderComponent seconds={timeLeft} />;
};

const SecondsTimer = ({ seconds }) => <h3>{seconds}</h3>;


// const Timer2 = ({ hours, minutes, seconds }) => (
//   <div>
//     {String(hours).padStart(2, '0')}:
//     {String(minutes).padStart(2, '0')}:
//     {String(seconds).padStart(2, '0')}
//   </div>
// );

// const TimerContainer2 = ({ seconds, refresh, render: RenderComponent }) => {
//   const [timeLeft, setTimeLeft] = useState(seconds);
//   const startTimeRef = useRef(Date.now());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       const elapsedTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
//       const newTimeLeft = Math.max(seconds - elapsedTime, 0);
//       setTimeLeft(newTimeLeft);
//     }, refresh);

//     return () => clearInterval(intervalId);
//   }, [seconds, refresh]);

//   const hours = Math.floor(timeLeft / 3600);
//   const minutes = Math.floor((timeLeft % 3600) / 60);
//   const secs = timeLeft % 60;

//   return <RenderComponent hours={hours} minutes={minutes} seconds={secs} />;
// };

const ClockTimer = ({ hours, minutes, seconds }) => {
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; 
  const minuteAngle = minutes * 6; 
  const secondAngle = seconds * 6; 

  return (
    <div className="clock">
      <img src="./images/ClockFace.png" alt="Clock Face" className="clock-face" />
      <img
        src='./images/ClockFace_H.png'
        alt="Hour Hand"
        className="hand hour-hand"
        style={{ transform: `rotate(${hourAngle}deg)` }}
      />
      <img
        src='./images/ClockFace_M.png'
        alt="Minute Hand"
        className="hand minute-hand"
        style={{ transform: `rotate(${minuteAngle}deg)` }}
      />
      <img
       src='./images/ClockFace_S.png'
        alt="Second Hand"
        className="hand second-hand"
        style={{ transform: `rotate(${secondAngle}deg)` }}
      />
    </div>
  );
};

const TimerContainer2 = ({ seconds, refresh, render: RenderComponent }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const startTimeRef = useRef(Date.now());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
      const newTimeLeft = Math.max(seconds - elapsedTime, 0);
      setTimeLeft(newTimeLeft);
    }, refresh);

    return () => clearInterval(intervalId);
  }, [seconds, refresh]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const secs = timeLeft % 60;

  return <RenderComponent hours={hours} minutes={minutes} seconds={secs} />;
};




const PhoneNumbersEditor = () => {
  const [phoneNumbers, setPhoneNumbers] = useState(['']); 

  const addPhoneNumber = () => {
    setPhoneNumbers([...phoneNumbers, '']);
  };

  const removePhoneNumber = (index) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers.splice(index, 1);
    setPhoneNumbers(updatedPhoneNumbers);
  };

  const handlePhoneNumberChange = (index, value) => {
    const updatedPhoneNumbers = [...phoneNumbers];
    updatedPhoneNumbers[index] = value;
    setPhoneNumbers(updatedPhoneNumbers);
  };

  return (
    <div>
      {phoneNumbers.map((phoneNumber, index) => (
        <div key={index}>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
          />
          <button onClick={() => removePhoneNumber(index)}>Видалити</button>
        </div>
      ))}
      <button onClick={addPhoneNumber}>Додати номер телефону</button>
    </div>
  );
};


const App = () => {
  const [ms, setMs] = useState(1000)
    return (
        <div >
          <h2>Timer</h2>
          <Timer ms={ms}></Timer>
          <h2>TimerControl</h2>
          <TimerControl/>
          <h2>TimerContainer</h2>
          <TimerContainer seconds={1800} refresh={100} render={SecondsTimer}/>
          <h2>LCD</h2>
          {/* <TimerContainer2 seconds={1800} refresh={1000} render={Timer} /> */}
          <h2>Watch</h2>
          <TimerContainer2 seconds={1800} refresh={1000} render={ClockTimer} />
          <h2>TimerControl + TimerContainer</h2>
          <h2>Phonebook</h2>
          <PhoneNumbersEditor/>
        </div>
    );
};

export default App;
