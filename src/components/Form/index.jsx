import { useState } from "react";

function Form() {
  const [manual, setManual] = useState(false);

  return (
    <div>
      <input type="time" id="time" name="time" />
    </div>
  );
}

export default Form;
