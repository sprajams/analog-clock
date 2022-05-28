import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

function Clock({ hours, minutes, seconds }) {
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
  return (
    <div>
      <div className={styles.clock}>
        <div className={styles.center}></div>
        <div>{markings}</div>
        <div
          className={clsx(styles.hour, styles.hand)}
          style={{
            transform: `translate(-50%, 0)  rotate(${hoursDeg}deg) translate(-50%, 0) `,
          }}
        ></div>
        <div
          className={clsx(styles.minute, styles.hand)}
          style={{
            transform: `translate(-50%, 0)  rotate(${minutesDeg}deg) translate(-50%, 0) `,
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
        <div className={styles.brand}>GEBO</div>
      </div>
    </div>
  );
}

export default Clock;
