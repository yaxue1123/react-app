import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import Movies from "./components/movies";
import registerForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MainNav from "./components/mainNav";
import Logout from "./components/logout";
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
    }
    catch (ex) {
      // for situation of anonymous users.
      // avoid app crush.
      // do nothing.
    }

  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <MainNav user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/registerForm" component={registerForm} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
