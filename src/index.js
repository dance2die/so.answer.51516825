import React, { Component } from "react";
import { render } from "react-dom";

import "./styles.css";

const Child = ({ isClicked }) => (
  <div className={isClicked ? `highlight` : ``}>I am a child element</div>
);

class App extends Component {
  state = {
    // clicked: [] works too
    clicked: {}
  };

  handleClick = i => {
    this.setState(prevState => {
      // const clicked = [...prevState.clicked]; <- if clicked is declared as an array
      const clicked = { ...prevState.clicked };
      clicked[i] = !clicked[i];
      return { clicked };
    });
  };

  render() {
    const items = [1, 2, 3, 4, 5].map((id, i) => {
      return (
        <div onClick={() => this.handleClick(i)}>
          <Child isClicked={this.state.clicked[i]} />
        </div>
      );
    });

    return (
      <div>
        <div>{items}</div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
