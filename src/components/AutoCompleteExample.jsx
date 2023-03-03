import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const options = ["The Godfather", "Pulp Fiction"];

// interface AutocompleteOption {
//   label: string;
// }

const AutoCompleteExample = () => {
  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) =>  <TextField {...params} label="Movie Name"/>}
      />
    </div>
  );
};

export default AutoCompleteExample;