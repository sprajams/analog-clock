import { useState, useEffect } from "react";
import Clock from "./components/Clock";
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

  return (
    <div className="outer">
      {/* CURRENT TIME */}
      <Clock time={time} />
      <div className="smallGroup">
        <Clock
          time={time}
          title={`New York, US`}
          timezone={`America/New_York`}
          small
        />
        <Clock
          time={time}
          title={`London, UK`}
          timezone={`Europe/London`}
          small
        />
        <Clock
          time={time}
          title={`Bangkok, TH`}
          timezone={`Asia/Bangkok`}
          small
        />
      </div>
    </div>
  );
}

export default App;
