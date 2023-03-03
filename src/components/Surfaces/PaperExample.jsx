import { Box, Paper } from "@mui/material";
import React from "react";

const PaperExample = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
        <Paper variant="outlined" />
        <Paper variant="outlined" square />
      </Box>
    </div>
  );
};

export default PaperExample;
