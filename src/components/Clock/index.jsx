import { useEffect, useState, useMemo } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";
import { toHaveTextContent } from "@testing-library/jest-dom/dist/matchers";

function Clock({ timezone, time, small, title }) {
  const adjustedTime = useMemo(() => {
    // create date with timezone
    const tzDate = new Date(
      time.toLocaleString("en-US", { timeZone: timezone })
    );
    return {
      hours: tzDate.getHours(),
      minutes: tzDate.getMinutes(),
      seconds: tzDate.getSeconds(),
    };
  }, [time, timezone]);
  // const [hours, setHours] = useState(NaN);
  // const [minutes, setMinutes] = useState(NaN);
  // const [seconds, setSeconds] = useState(NaN);

  // from current time, set the current hour, minute, second
  // useEffect(() => {
  //   setHours(time.getHours());
  //   setMinutes(time.getMinutes());
  //   setSeconds(time.getSeconds());
  // }, [setHours, setMinutes, setSeconds, time]);

  const hoursDeg =
    360 *
    ((adjustedTime.hours +
      adjustedTime.minutes / 60 +
      adjustedTime.seconds / 3600) /
      12);
  const minutesDeg =
    360 * ((adjustedTime.minutes + adjustedTime.seconds / 60) / 60);
  const secondsDeg = 360 * (adjustedTime.seconds / 60);

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
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{timezone ? title : "Local Time"}</h2>
      <div className={clsx(styles.clock, small && styles.small)}>
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
            {adjustedTime.hours} : {adjustedTime.minutes} :
            {adjustedTime.seconds}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clock;
