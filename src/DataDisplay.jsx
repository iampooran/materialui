import React from "react";
import AvatarExample from "./components/DataDisplay/AvatarExample";
import BadgeExample from "./components/DataDisplay/BadgeExample";
import DividerExample from "./components/DataDisplay/DividerExample";
import ListExample from "./components/DataDisplay/ListExample";
import TableExample from "./components/DataDisplay/TableExample";
import TypographyExample from "./components/DataDisplay/TypographyExample";

const DataDisplay = () => {
  return (
    <div>
      <AvatarExample />
      <BadgeExample />
      <DividerExample />
      <ListExample />
      <TableExample />
      <TypographyExample />
    </div>
  );
};

export default DataDisplay;
