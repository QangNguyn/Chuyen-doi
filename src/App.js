import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      vnd: 0,
      usa: 0,
    };
  }
  handleConvertVnToUsa = (e) => {
    this.setState({ vnd: e.target.value, usa: e.target.value / 24193 });
  };
  handleConvertUsaToVn = (e) => {
    this.setState({ usa: e.target.value, vnd: e.target.value * 24193 });
  };

  render() {
    return (
      <div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            <img
              src="https://cdn.pixabay.com/photo/2012/04/18/19/53/flag-37712_960_720.png"
              style={{ width: "30px" }}
            />
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.handleConvertUsaToVn}
            value={this.state.usa}
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            <img
              src="https://media.loveitopcdn.com/3807/la-co-viet-nam-vector-1.png"
              style={{ width: "30px" }}
            />
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            onChange={this.handleConvertVnToUsa}
            value={this.state.vnd}
          />
        </div>
      </div>
    );
  }
}

export default App;
