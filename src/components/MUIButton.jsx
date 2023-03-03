import { PhotoCamera } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';


const MUIButton = () => {


    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));

  return (
    <div>
      <div>
        <p>Button Example</p>
        {/* contained */}
        <Button variant="contained">Click Me</Button>
        {/* outlined */}
        <Button variant="outlined">Click Me</Button>
        {/* text */}
        <Button variant="text">Click Me</Button>
        {/* Primary */}
        <Button>Primary</Button>
        {/* Disabled */}
        <Button disabled>Disabled</Button>
        {/* Link */}
        <Button href="#text-buttons">Link</Button>
        {/* contained with disabled*/}
        <Button variant="contained" disabled>
          Click Me
        </Button>
      </div>

      {/* Color */}
      <div>
        <p>Color Button</p>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="contained" sx={{ color: "red", background: "yellow" }}>
          Error
        </Button>
      </div>

      {/* Size */}
      <div>
        <p>Button Size</p>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
      </div>

      {/* Upload */}
      <div>
        <p>Upload Button</p>
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </div>

    {/* Button with Text and Icon */}
    <div>
    <p>Button with Text and Icon</p>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      </div>

    {/* Add Custom CSS */}
    <p>Add Custom CSS to Button</p>
      <ColorButton variant="contained">Custom CSS</ColorButton>
    </div>
  );
};

export default MUIButton;
