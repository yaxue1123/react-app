import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"]
  };

  // can replace arrow function to bind event handlers.
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  renderTags() {
    if (this.state.tags.length === 0) return <p>No tag</p>;

    return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  }

  handleIncrement = () => {
    console.log(this);
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <React.Fragment>
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
