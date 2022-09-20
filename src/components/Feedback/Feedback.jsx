import React from "react";
import Buttons from "./Buttons";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  goodValue = () => {
    this.setState( prevState => ({
        good: prevState.good + 1,
        }));
  };

  neutralValue = () => {
    this.setState( prevState => ({
        neutral: prevState.neutral + 1,
        }));
  };

  badValue = () => {
    this.setState( prevState => ({
        bad: prevState.bad + 1,
        }));
  };

  render() {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <Buttons 
      onGoodValue={this.goodValue} 
      onNeutralValue={this.neutralValue} 
      onBadValue={this.badValue}
      />
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