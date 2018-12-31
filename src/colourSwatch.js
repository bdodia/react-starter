import React from "react";

let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

class ColourSwatch extends React.Component {
  constructor(props) {
    super(props);
    this.colourBar = this.colourBar.bind(this);
  }

  colourBar() {
    let colourBarHTML = "";
    colourRange.forEach(c => {
      colourBarHTML = colourBarHTML + "<div>" + c + "</div>";
    });
    return colourBarHTML;
  }

  render() {
    return (
      <div>
        <h1>React project using webpack and babel set-up</h1>
        <p>Colour swatch goes here</p>
        {this.colourBar()}
      </div>
    );
  }
}

export { ColourSwatch };
