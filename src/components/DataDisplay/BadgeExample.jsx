import { Badge } from "@mui/material";
import React from "react";
import MailIcon from "@mui/icons-material/Mail";

const BadgeExample = () => {
  return (
    <div>
      <hr />
      <p>
        <Badge badgeContent={40} color="primary" max={10}>
          <MailIcon color="action" />
        </Badge>
      </p>
    </div>
  );
};

export default BadgeExample;
