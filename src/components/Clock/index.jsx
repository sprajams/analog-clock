import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

function Clock({ timezone }) {
  const [hours, setHours] = useState(NaN);
  const [minutes, setMinutes] = useState(NaN);
  const [seconds, setSeconds] = useState(NaN);

  const [time, setTime] = useState(new Date());
  // set current time every 1 second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        timezone
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
    setHours(time.getHours());
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
  }, [setHours, setMinutes, setSeconds, time]);

  const hoursDeg = 360 * ((hours + minutes / 60 + seconds / 3600) / 12);
  const minutesDeg = 360 * ((minutes + seconds / 60) / 60);
  const secondsDeg = 360 * (seconds / 60);

  // create 60 markings
  const [markings, setMarkings] = useState([]);
  useEffect(() => {
    for (let i = 1; i <= 60; i++) {
      setMarkings((curr) => {
        return [
          ...curr,
          <div
            className={styles.marking}
            style={{
              transform: `translate(-50%, 0)  rotate(${i * 6}deg) `,
            }}
            key={i}
          ></div>,
        ];
      });
    }
  }, []);

  if (timezone) {
    const countryName = timezone.split("/")[1];
    console.log(countryName);
  }

  return (
    <div>
      <h2>{timezone ? timezone : "Current"}</h2>

      <div className={styles.clock}>
        <div className={styles.center}></div>
        <div>{markings}</div>
        <div
          className={clsx(styles.hour, styles.hand)}
          style={{
            transform: `translate(-50%, 0)  rotate(${hoursDeg}deg)`,
          }}
        ></div>
        <div
          className={clsx(styles.minute, styles.hand)}
          style={{
            transform: `translate(-50%, 0)  rotate(${minutesDeg}deg) `,
          }}
        ></div>
        <div
          className={clsx(styles.second, styles.hand)}
          style={{
            transform: `translate(-50%, 0)  rotate(${secondsDeg}deg)`,
          }}
        ></div>
        <div className={clsx(styles.clockNum, styles.twelve)}>12</div>
        <div className={clsx(styles.clockNum, styles.three)}>3</div>
        <div className={clsx(styles.clockNum, styles.six)}>6</div>
        <div className={clsx(styles.clockNum, styles.nine)}>9</div>
        <div className={styles.brand}>
          <div>GEBO</div>
          <div>
            {hours} : {minutes} : {seconds}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
