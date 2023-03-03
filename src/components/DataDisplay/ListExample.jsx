import { ListItemButton, ListItemText } from "@mui/material";
import React from "react";

const ListExample = () => {
  return (
    <div>
      <hr />
      <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" />
      </ListItemButton>
    </div>
  );
};

export default ListExample;
