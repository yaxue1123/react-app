import React, { Component } from "react";

class Counter extends Component {
  // stateless component/ controlled component
  // state = {
  //   value: this.props.counter.value
  // };

  // can replace arrow function to bind event handlers.
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No tag</p>;

  //   return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  // }

  render() {
    let classes = this.getBadgeClasses();
    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger sm m-2"
        >
          Delete
        </button>
        <br />
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
