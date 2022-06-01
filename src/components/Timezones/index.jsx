import { useState } from "react";
import Clock from "../Clock";
import tzData from "../../constants/tzData";
import styles from "./styles.module.scss";

function Timezones({ time }) {
  const [tz, setTz] = useState("");
  const [arrTz, setArrTz] = useState([
    `America/New_York`,
    `Europe/London`,
    `Asia/Bangkok`,
  ]);

  const onChange = (e) => {
    setTz(e.target.value);
  };
  const onClick = () => {
    setArrTz((curr) => {
      return [...curr, tz];
    });
  };

  return (
    <div>
      <div>TimeZones</div>
      <div>
        <label htmlFor="tz-select">Add a timezone:</label>
        <select name="tz" id="tz-select" onChange={onChange}>
          <option value="">--Please choose an option</option>
          {tzData.map((x) => {
            return (
              <option value={x.name} key={x.name}>
                {x.name}
              </option>
            );
          })}
        </select>
        <button onClick={onClick}>Add</button>
      </div>
      <div className={styles.container}>
        {arrTz.map((x, i) => {
          return <Clock time={time} title={x} timezone={x} key={x + i} small />;
        })}
      </div>
    </div>
  );
}
export default Timezones;
