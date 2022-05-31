import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import styles from "./styles.module.scss";

function Form({ setManual, manual, setCustomTime, customTime }) {
  const onChange = (e) => {
    setCustomTime(e.target.value);
  };

  return (
    <div>
      <div>
        <FormGroup>
          <FormControlLabel
            control={<Switch defaultChecked />}
            onChange={() => {
              setManual(!manual);
            }}
            label={manual ? "Custom Time" : "Current Time"}
          />
        </FormGroup>
      </div>
      {manual ? (
        <input
          type="time"
          id="time"
          name="time"
          value={customTime}
          onChange={onChange}
          required
          className={styles.input}
        />
      ) : null}
    </div>
  );
}

export default Form;
