import React from "react";
import ReactDOM from "react-dom";

import { ColourSwitch } from "./ColourSwitch";

let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

// class numberCheck {
//   constructor() {
//     this.numberValue = 5;
//     this.someAdder = this.someAdder.bind(this);
//   }

//   someAdder() {
//     return `10 ${this.numberValue}`;
//   }
// }

// class newSyntax {
//   numberValue = 2334;
//   someAdder = () => {
//     return `10 ${this.numberValue}`;
//   };
// }

// const newVersion = new newSyntax();
// console.log(newVersion.someAdder());

// const myNumber = new numberCheck();
// const getNumber = myNumber.someAdder;
// console.log(myNumber.numberValue);
// console.log(getNumber());

ReactDOM.render(<ColourSwitch />, document.getElementById("app"));
