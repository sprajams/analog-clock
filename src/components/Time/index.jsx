import { useState, useEffect } from "react";

function Time({ setHours, setMinutes, setSeconds, timezone }) {
  const [date, setDate] = useState(new Date());
  if (timezone.length > 1) {
    console.log(timezone);
  }

  // set current time every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(
        timezone.length > 1
          ? new Date(new Date().toLocaleString("en-US", { timeZone: timezone }))
          : new Date()
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [timezone]);

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
