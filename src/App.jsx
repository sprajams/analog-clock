import { useState } from "react";
import Time from "./components/Time";
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
      <div>H: {hours}</div>
      <div>M: {minutes}</div>
      <div>S: {seconds}</div>
    </div>
  );
}

export default App;
