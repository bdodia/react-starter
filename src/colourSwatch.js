import React from "react";

let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

const Colour = props => {
  return <span key={props.colourCode}> {props.colourCode} </span>;
};

const renderColourBar = colourRange => {
  if (colourRange.length > 0) {
    return colourRange.map((colourValue, index) => (
      <Colour key={index} colourCode={colourValue} />
    ));
  } else return [];
};

class ColourSwatch extends React.Component {
  render() {
    const coloursBar = renderColourBar(colourRange);

    return (
      <div>
        <h1>React project using webpack and babel set-up</h1>
        {coloursBar}
      </div>
    );
  }
}

export { ColourSwatch };
