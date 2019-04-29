// this component will render a list of counters.
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // pass a reference to the handle event function to child component
    return (
      <div>
        <button
          onClick={this.props.onReset}
          className="btn btn-primary btn-s m-2"
        >
          Reset
        </button>
        <br />
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
