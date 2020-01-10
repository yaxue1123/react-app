import React, { Component } from "react";
import Input from './common/input';

class LoginForm extends Component {
  state = { 
    account: { username: "", password: "" },
    errors: {},
  };

  validate= () => {
    const errors = {};
    const { account } = this.state;

    if (this.state.account.username.trim() === '') {
      errors.username = 'Username is required.';
    }

    if (this.state.account.password.trim() === '') {
      errors.password = 'Password is required.';
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  handleSubmit = e => {
    // Prevent page reload.
    e.preventDefault();
    
    const errors = this.validate();

    console.log(errors);
    
    // errors should never be null.
    this.setState({ errors: errors || {} });
    if (errors) return;

    // Call the server.
    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account }); 
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Log in</h1>
        <form onSubmit={this.handleSubmit}>
          <Input 
            name="username" 
            value={account.username} 
            label="Username" 
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input 
            name="password" 
            value={account.password} 
            label="Password" 
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    ); 
  }
}

export default LoginForm;
