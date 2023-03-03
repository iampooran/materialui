import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { Slider, Stack } from "@mui/material";
import React from "react";

const SliderExample = () => {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />

        <Slider disabled defaultValue={30} aria-label="Disabled slider" />
      </Stack>
    </div>
  );
};

export default SliderExample;
