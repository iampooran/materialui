import * as React from "react";
import Box from "@mui/material/Box";

const BoxExample = () => {
  return (
    <div>
      {" "}
      <Box
        sx={{
          width: 300,
          height: 300,
          backgroundColor: "primary.dark",
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      >
        This is Box
      </Box>
    </div>
  );
};

export default BoxExample;
