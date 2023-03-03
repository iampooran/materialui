import { Typography } from "@mui/material";
// import { createTheme } from "@mui/material";
import React from "react";

// const theme = createTheme({
//     components: {
//       MuiTypography: {
//         defaultProps: {
//           variantMapping: {
//             h1: 'h2',
//             h2: 'h2',
//             h3: 'h2',
//             h4: 'h2',
//             h5: 'h2',
//             h6: 'h2',
//             subtitle1: 'h2',
//             subtitle2: 'h2',
//             body1: 'span',
//             body2: 'span',
//           },
//         },
//       },
//     },
//   });
  

const TypographyExample = () => {
  return (
    <div>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
    </div>
  );
};

export default TypographyExample;
