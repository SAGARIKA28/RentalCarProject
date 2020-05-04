import React, { Component } from "react";
import NavBar from "./components/layout/navBar";
import Footer from "./components/layout/footerSec";
import BookinForm from "./components/bookingForm";
import PopUp from "./components/popUp";
import M from "materialize-css";
import CarList from "./components/carList";
import CarDetail from "./components/carDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={CarList} />
            <Route path="/car/:id" component={CarDetail} />
            <Route path="/book/:id" component={BookinForm} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}
