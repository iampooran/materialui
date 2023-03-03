import React from "react";
import AlertExample from "./components/Feedback/AlertExample";
import BackDropExample from "./components/Feedback/BackDropExample";
import SnakBarExample from "./components/Feedback/SnakBarExample";

const Feedback = () => {
  return (
    <div>
      <AlertExample />
      <hr />
      <BackDropExample />
      <hr />
      <SnakBarExample />
    </div>
  );
};

export default Feedback;
