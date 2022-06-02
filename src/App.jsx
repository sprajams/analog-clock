import { useState, useEffect } from "react";
import Clock from "./components/Clock";
import TimeInput from "./components/TimeInput";
import Timezones from "./components/Timezones";
import "./App.scss";

function App() {
  //current time
  const [time, setTime] = useState(new Date());
  // set current time every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [manual, setManual] = useState(false);
  const [customTime, setCustomTime] = useState(new Date());

  const [arrTz, setArrTz] = useState([
    `America/New_York`,
    `Europe/London`,
    `Asia/Bangkok`,
  ]);
  return (
    <div className="outer">
      {/* CURRENT TIME */}

      <Clock time={manual ? customTime : time} />
      <TimeInput
        setManual={setManual}
        manual={manual}
        setCustomTime={setCustomTime}
        customTime={customTime}
        time={time}
      />

      <div className="smallGroup">
        <Timezones
          time={manual ? customTime : time}
          setArrTz={setArrTz}
          arrTz={arrTz}
        />
      </div>
    </div>
  );
}

export default App;
