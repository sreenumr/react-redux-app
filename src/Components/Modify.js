import React from "react";
import IncButton from "./IncButton";
import DecButton from "./DecButton";
import Quantity from "./Quantity";

const Modify = () => {
  return (
    <div className="row right">
      <DecButton />
      <Quantity />
      <IncButton />
    </div>
  );
};

export default Modify;
