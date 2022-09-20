import React from "react";

const Buttons = ({onGoodValue, onNeutralValue, onBadValue}) => (
    <div>
    <button type="button" onClick={onGoodValue}>
      good</button>
      <button type="button" onClick={onNeutralValue}>
      neutral</button>
      <button type="button" onClick={onBadValue}>
      bad</button>
  </div>
);

export default Buttons;