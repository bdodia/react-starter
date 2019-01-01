import React from "react";
import ReactDOM from "react-dom";
import { ColourSwitch } from "./ColourSwitch";
import "./styles/styles.scss";

let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

ReactDOM.render(<ColourSwitch />, document.getElementById("app"));
