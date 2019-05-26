import React, { Component } from "react";

class LoginForm extends Component {
  // create a ref object.
  username = React.createRef();

  // componentDidMount() {
  //   this.username.current.focus();
  // }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    const username = this.username.current.value;
    console.log("submitted", username);
  };

  render() {
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <lable htmlFor="username">Username</lable>
            <input
              autoFocus
              ref={this.username}
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <lable htmlFor="password">Password</lable>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
