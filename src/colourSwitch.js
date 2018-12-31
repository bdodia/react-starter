import React from "react";
import { ColourSwatch } from "./ColourSwatch";

let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

class ColourSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.getColour = this.getColour.bind(this);
    this.state = {
      colourIndex: 0
    };
  }

  getColour(index) {
    return colourRange[index];
  }

  getRandomIndex() {
    this.setState(() => {
      return {
        colourIndex: Math.floor(Math.random() * colourRange.length)
      };
    });
  }

  render() {
    return (
      <div>
        <ColourSwatch />
        <button onClick={this.getRandomIndex}>Switch Colour </button>
        <p>
          Colour selected: {this.state.colourIndex} :{" "}
          {this.getColour(this.state.colourIndex)}
        </p>
      </div>
    );
  }
}
export { ColourSwitch };
