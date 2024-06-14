import React from 'react';
import {useState, useEffect, useRef} from 'react';

//1
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

//2

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


//3
const TimerContainer = ({ seconds, refresh, render }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const RenderComponent = render;

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const newTimeLeft = seconds - elapsedTime;
      setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
    }, refresh);

    return () => clearInterval(intervalId); 
  }, [seconds, refresh]);

  return <RenderComponent seconds={timeLeft} />;
};

//4
const Timer2 = ({ seconds, paused, onTogglePause }) => {
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <div>{formatTime(seconds)}</div>
      <button onClick={onTogglePause}>{paused ? 'Продовжити' : 'Пауза'}</button>
    </div>
  );
};


const TimerContainer2 = ({ seconds, refresh, render }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const RenderComponent = render; 

  useEffect(() => {
    const startTime = Date.now();
    if (!paused) {
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = seconds - elapsedTime;
        setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
      }, refresh);
    }

    return () => clearInterval(intervalRef.current); 
  }, [seconds, refresh, paused]);

  const togglePause = () => {
    setPaused(!paused);
    if (!paused) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - (seconds - timeLeft) * 1000;
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = seconds - elapsedTime;
        setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
      }, refresh);
    }
  };

  return (
    <RenderComponent
      seconds={timeLeft}
      paused={paused}
      onTogglePause={togglePause}
    />
  );
};

//5
const ClockTimer = ({ seconds }) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  const hourAngle = -(hours % 12) * 30 + minutes * 0.5; 
  const minuteAngle = -minutes * 6 + secs * 0.1; 
  const secondAngle = -secs * 6; 

  return (
    <div className="clock">
      <img src="./images/ClockFace.png" className="clock-face" alt="Clock Face" />
      <img src='./images/ClockFace_H.png' className="hand hour" style={{ transform: `rotate(${hourAngle}deg)` }} alt="Hour Hand" />
      <img src='./images/ClockFace_M.png' className="hand minute" style={{ transform: `rotate(${minuteAngle}deg)` }} alt="Minute Hand" />
      <img src='./images/ClockFace_S.png' className="hand second" style={{ transform: `rotate(${secondAngle}deg)` }} alt="Second Hand" />
    </div>
  );
};

const TimerContainer3 = ({ seconds, refresh, render }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const RenderComponent = render; 

  useEffect(() => {
    const startTime = Date.now();
    if (!paused) {
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = seconds - elapsedTime;
        setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
      }, refresh);
    }

    return () => clearInterval(intervalRef.current); 
  }, [seconds, refresh, paused]);

  const togglePause = () => {
    setPaused(!paused);
    if (!paused) {
      clearInterval(intervalRef.current);
    } else {
      const startTime = Date.now() - (seconds - timeLeft) * 1000;
      intervalRef.current = setInterval(() => {
        const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
        const newTimeLeft = seconds - elapsedTime;
        setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
      }, refresh);
    }
  };

  return (
    <RenderComponent
      seconds={timeLeft}
      paused={paused}
      onTogglePause={togglePause}
    />
  );
};

//6
const TimerContainer4 = ({ seconds, refresh, render }) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const RenderComponent = render;

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
      const newTimeLeft = seconds - elapsedTime;
      setTimeLeft(newTimeLeft > 0 ? newTimeLeft : 0);
    }, refresh);

    return () => clearInterval(intervalId); 
  }, [seconds, refresh]);

  return <RenderComponent seconds={timeLeft} />;
};

const TimerDisplay = ({ seconds }) => {
  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return <div>{formatTime(seconds)}</div>;
};

const TimerControl4 = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
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
              <input type="number" value={hours} onChange={handleChange(setHours)} />
            </label>
          </div>
          <div>
            <label>
              Хвилини:
              <input type="number" value={minutes} onChange={handleChange(setMinutes)} />
            </label>
          </div>
          <div>
            <label>
              Секунди:
              <input type="number" value={seconds} onChange={handleChange(setSeconds)} />
            </label>
          </div>
          <button onClick={handleStart}>Start</button>
        </div>
      ) : (
        <TimerContainer seconds={totalSeconds} refresh={1000} render={TimerDisplay} />
      )}
    </div>
  );
};


//7
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
  const [ms, setMs] = useState(1000);
  const SecondsTimer = ({ seconds }) => <h2>{seconds}</h2>;
    return (
        <div >
          <h2>Timer</h2>
          <Timer ms={ms}></Timer>
          <h2>TimerControl</h2>
          <TimerControl4/>
          <h2>TimerContainer</h2>
          <TimerContainer seconds={1800} refresh={100} render={SecondsTimer}/>
          <h2>LCD</h2>
          <TimerContainer2 seconds={1800} refresh={1000} render={Timer2} />
          <h2>Watch</h2>
          <TimerContainer3 seconds={1800} refresh={1000} render={ClockTimer} />
          <h2>TimerControl + TimerContainer</h2>
          <TimerControl/>
          <h2>Phonebook</h2>
          <PhoneNumbersEditor/>
        </div>
    );
};

export default App;
