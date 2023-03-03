import { Button, ButtonGroup } from "@mui/material";
import React from "react";

const ButtonGroupExample = () => {
  return (
    <div>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonGroupExample;
