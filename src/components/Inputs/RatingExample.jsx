import { Rating, Typography } from "@mui/material";
import React from "react";

const RatingExample = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div>
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      <Typography component="legend">Read only</Typography>
      <Rating name="read-only" value={value} readOnly />
      <Typography component="legend">Disabled</Typography>
      <Rating name="disabled" value={value} disabled />
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
      <p>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      </p>
    </div>
  );
};

export default RatingExample;
