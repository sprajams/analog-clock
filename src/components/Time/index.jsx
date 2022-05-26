import { useState, useEffect } from "react";

function Time({ setHours, setMinutes, setSeconds }) {
  const [date, setDate] = useState(new Date());

  // set current time every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // from current time, set the current hour, minute, second
  useEffect(() => {
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  }, [setHours, setMinutes, setSeconds, date]);

  return (
    <div>
      <div>{date.toLocaleTimeString()}</div>
    </div>
  );
}

export default Time;
