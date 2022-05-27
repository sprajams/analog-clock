import { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./styles.module.scss";

function Clock({ hours, minutes, seconds }) {
  const hoursDeg = (360 / 12) * (hours + minutes / 60 + seconds / 360);
  const minutesDeg = (360 / 60) * (minutes + seconds / 60);
  const secondsDeg = (360 / 60) * seconds;

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
      </div>
    </div>
  );
}

export default Clock;
