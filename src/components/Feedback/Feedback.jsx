import React from "react";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 2,
    bad: 5
  };

  handleIncrement = () => {};

  render() {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <button type="button" onClick={this.handleIncrement}>
          good</button>
          <button type="button" onClick={this.handleIncrement}>
          neutral</button>
          <button type="button" onClick={this.handleIncrement}>
          bad</button>
      </div>
      <div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: </p>
        <p>Positive feedback: </p>
      </div>
    </div>
    )
  }
}

export default Feedback;