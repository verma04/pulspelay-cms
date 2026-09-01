import React from "react";
import { SketchPicker } from "react-color";
const ColorPicker = ({ state, setState }) => {
  console.log(state, setState, "sdds");
  return <SketchPicker color={state} onChange={(e) => setState(e.hex)} />;
};

export default ColorPicker;
