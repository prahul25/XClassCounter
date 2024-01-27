import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <h1>Counter Application</h1>
        <p>Counter: {this.state.count}</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Increment
        </button>
        <button onClick={() =>
            this.setState({
              count: this.state.count - 1,
            })
          }>Decrement</button>
      </div>
    );
  }
}
