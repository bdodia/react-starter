let colourRange = ["Blue", "Red", "Green", "Pink", "Purple", "Cream", "Brown"];

const ColourSwatch = () => {
  return <div>Colour swatch goes here</div>;
};

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
        some {this.state.colourIndex}
        <button onClick={this.getRandomIndex}>Switch Colour </button>
        <p />
        {this.getColour(this.state.colourIndex)}
      </div>
    );
  }
}

ReactDOM.render(<ColourSwitch />, document.getElementById("app"));
