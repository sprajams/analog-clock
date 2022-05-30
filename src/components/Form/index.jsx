import { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function Form({ setManual, manual }) {
  const [time, setTime] = useState("");

  const onChange = (e) => {
    setTime(e.target.value);
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
          value={time}
          onChange={onChange}
          required
        />
      ) : null}
    </div>
  );
}

export default Form;
