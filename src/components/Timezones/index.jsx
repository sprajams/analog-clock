import { useState } from "react";
import Clock from "../Clock";
import tzData from "../../constants/tzData";
import styles from "./styles.module.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Timezones({ time, setArrTz, arrTz }) {
  const [tz, setTz] = useState("");

  //   state of selected timezone value
  const onChange = (e) => {
    setTz(e.target.value);
  };
  //   add new clock with selected timezone if the selected timezone isnt already displayed
  const onClick = () => {
    if (tz) {
      if (!arrTz.includes(tz)) {
        setArrTz((curr) => {
          return [...curr, tz];
        });
      }
    }
  };

  return (
    <div>
      <div className={styles.inputWrap}>
        <Box className={styles.selectBox}>
          <FormControl fullWidth>
            <InputLabel id="timezone-select-label">Timezone:</InputLabel>
            <Select
              labelId="timezone-select-label"
              name="tz"
              id="tz-select"
              onChange={onChange}
              value={tz}
              label="Timezone"
            >
              {tzData.map((x) => {
                return (
                  <MenuItem value={x.name} key={x.name}>
                    {x.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <button onClick={onClick} className={styles.inputButton}>
          Add
        </button>
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
