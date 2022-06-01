import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styles from "./styles.module.scss";

function TimeInput({ setManual, manual, setCustomTime }) {
  const onChange = (e) => {
    const arr = e.target.value.split(":");
    const [hours, minutes] = arr;
    const newTime = new Date();
    newTime.setHours(hours);
    newTime.setMinutes(minutes);
    newTime.setSeconds(0);
    setCustomTime(newTime);
  };
  return (
    <div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Switch />}
            onChange={() => {
              setManual(!manual);
            }}
            label={"Custom Time"}
          />
        </FormGroup>
      </div>
      {manual ? (
        <input
          type="time"
          id="time"
          name="time"
          onChange={onChange}
          required
          className={styles.input}
        />
      ) : null}
    </div>
  );
}

export default TimeInput;
