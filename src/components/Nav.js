import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Icon } from "semantic-ui-react";
export default class Nav extends Component {
  state = {
    activeItem:
      window.location.pathname === "/"
        ? "home"
        : window.location.pathname.substr(1),
  };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fluid inverted>
        <Menu.Item
          icon="home"
          as={Link}
          to="/"
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        >
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/addBooking"
          name="addBooking"
          active={activeItem === "addBooking"}
          onClick={this.handleItemClick}
        >
          <Icon name="add" />
          Add Booking
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="currentBookings"
          name="currentBookings"
          active={activeItem === "currentBookings"}
          onClick={this.handleItemClick}
        >
          <Icon name="clipboard list" />
          Current Booking
        </Menu.Item>
      </Menu>
    );
  }
}
