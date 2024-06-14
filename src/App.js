import React from 'react';
import {useState, useEffect, useRef} from 'react';

//ПЕРЕРОБЛЮЮ

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
