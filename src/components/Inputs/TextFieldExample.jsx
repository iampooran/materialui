import { TextField } from "@mui/material";
import React from "react";

const TextFieldExample = () => {
  return (
    <div>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
};

export default TextFieldExample;
