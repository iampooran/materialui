import { Switch } from "@mui/material";
import React from "react";

const label = { inputProps: { "aria-label": "Switch demo" } };

const SwitchExample = () => {
  return (
    <div>
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
      <Switch {...label} disabled />
    </div>
  );
};

export default SwitchExample;
