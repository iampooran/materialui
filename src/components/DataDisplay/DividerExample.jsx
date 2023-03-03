import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const DividerExample = () => {
  return (
    <div>
      <hr />
      <List sx={style} component="nav" aria-label="mailbox folders">
        <ListItem button>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Drafts" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </div>
  );
};

export default DividerExample;
