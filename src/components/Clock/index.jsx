import clsx from "clsx";
import styles from "./styles.module.scss";

function Clock({ hours, minutes, seconds }) {
  const hoursDeg = (360 / 12) * (hours + minutes / 60 + seconds / 360);
  const minutesDeg = (360 / 60) * (minutes + seconds / 60);
  const secondsDeg = (360 / 60) * seconds;
  return (
    <div className={styles.wrap}>
      <div className={styles.outline}>
        {/* <div>x</div> */}
        <div>
          <div className={styles.twelve}>12</div>
          <div className={styles.three}>3</div>
          <div className={styles.six}>6</div>
          <div className={styles.nine}>9</div>
        </div>
      </div>
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
          transform: `translate(-50%, 0)  rotate(${secondsDeg}deg) translate(-50%, 0) `,
        }}
      ></div>
    </div>
  );
}

export default Clock;
