// this component will render a list of counters.
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // use object destructuring to simplify the code.
    const {
      onReset,
      counters,
      onDelete,
      onIncrement,
      onDecrement
    } = this.props;

    // pass a reference to the handle event function to child component
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-s m-2">
          Reset
        </button>
        <br />
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
