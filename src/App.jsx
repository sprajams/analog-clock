import { useState, useEffect } from "react";
import Time from "./components/Time";
import Clock from "./components/Clock";
import Form from "./components/Form";
import "./App.scss";

function App() {
  //current time

  const [manual, setManual] = useState(false);
  const [customTime, setCustomTime] = useState("");
  const cHours = Number(customTime.substring(0, 2));
  const cMinutes = Number(customTime.substring(3, 5));

  return (
    <div className="outer">
      {/* CURRENT TIME */}
      <div>
        {/* <Time
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
          customTime={customTime}
        /> */}
        {/* {manual ? (
          <Clock hours={cHours} minutes={cMinutes} seconds={0} />
        ) : (
          <Clock timezone={`America/New_York`} />
        )} */}
      </div>
      <Clock />
      <Clock timezone={`America/New_York`} />
      <Clock timezone={`Europe/London`} />
      <Clock timezone={`Asia/Bangkok`} />

      {/* CUSTOM TIME */}
      {/* <div>
        <Form
          setManual={setManual}
          manual={manual}
          setCustomTime={setCustomTime}
          customTime={customTime}
        />
      </div> */}
    </div>
  );
}

export default App;
