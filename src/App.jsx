import { useState, useEffect } from "react";
import Clock from "./components/Clock";
import Form from "./components/Form";
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

  return (
    <div className="outer">
      {/* CURRENT TIME */}
      <Clock time={time} />
      <Form
        setManual={setManual}
        manual={manual}
        setCustomTime={setCustomTime}
        customTime={customTime}
        time={time}
      />

      {manual ? (
        <Clock time={customTime} small />
      ) : (
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
      )}
    </div>
  );
}

export default App;
