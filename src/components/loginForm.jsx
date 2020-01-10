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

  validateProperty = ({ name, value }) => {
    if (name === 'username') {
      if (value.trim() === '') return 'Username is required';
      // ... other rules.
    }

    if (name === 'password') {
      if (value.trim() === '') return 'Password is required';
      // ... other rules.
    }
  }

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    // validation.
    // not call validate(), since only need validate the 
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];


    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors }); 
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
