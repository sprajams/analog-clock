import { useState } from "react";
import Time from "./components/Time";
import Clock from "./components/Clock";
import "./App.scss";

function App() {
  const [hours, setHours] = useState(NaN);
  const [minutes, setMinutes] = useState(NaN);
  const [seconds, setSeconds] = useState(NaN);

  return (
    <div className="App">
      <Time
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
      />
      <Clock hours={hours} minutes={minutes} seconds={seconds} />
    </div>
  );
}

export default App;
