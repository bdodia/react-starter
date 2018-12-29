import React from "react";

let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

const colourBar = () => {
  let colourBarHTML = "";
  colourRange.forEach(c => {
    colourBarHTML = colourBarHTML + " " + c;
  });
  return colourBarHTML;
};

const ColourSwatch = () => {
  return (
    <div>
      <h1>React project using webpack and babel set-up</h1>
      <p>Colour swatch goes here</p>
      {colourBar()}
    </div>
  );
};

export { ColourSwatch };
