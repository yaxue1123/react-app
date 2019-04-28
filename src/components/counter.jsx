import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  // can replace arrow function to bind event handlers.
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>No tag</p>;

  //   return this.state.tags.map(tag => <li key={tag}>{tag}</li>);
  // }

  handleIncrement = product => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();
    console.log(this.props);
    return (
      <React.Fragment>
        {this.props.children}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <br />
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        <ul>{this.renderTags()}</ul> */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 p-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
