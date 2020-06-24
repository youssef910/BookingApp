import React, { Component } from "react";
import AppHeader from "./components/AppHeader";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AddBooking from "./components/AddBooking";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import CurrentBookings from "./components/CurrentBookings";
import { Container } from "semantic-ui-react";
import GuestList from "./utils/GuestList";

class App extends Component {
  state = { bookings: GuestList };

  addNewBooking = (booking) => {
    const updatedBookings = this.state.bookings;
    updatedBookings.push(booking);
    this.setState({ bookings: updatedBookings });
  };
  render() {
    return (
      <Container className="App">
        <Router>
          <AppHeader />
          <Nav></Nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/addBooking">
              <AddBooking addNewBooking={this.addNewBooking} />
            </Route>
            <Route path="/currentBookings">
              <CurrentBookings bookings={this.state.bookings} />
            </Route>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
