import styles from "./styles.module.scss";

function Clock() {
  return (
    <div className={styles.wrap}>
      <div className={styles.outline}>
        <div>x</div>
      </div>
      {/* <div className={styles.hour}></div>
      <div className={styles.minute}></div> */}
      <div className={styles.second}></div>
    </div>
  );
}

export default Clock;
