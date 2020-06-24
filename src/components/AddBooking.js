import React, { Component } from "react";
import {
  Form,
  Input,
  Grid,
  GridRow,
  GridColumn,
  Button,
} from "semantic-ui-react";
const options = [
  { key: "1", text: 1, value: "1" },
  { key: "2", text: 2, value: "2" },
  { key: "3", text: 3, value: "3" },
  { key: "4", text: 4, value: "4" },
  { key: "5", text: 5, value: "5" },
  { key: "6", text: 6, value: "6" },
  { key: "7", text: 7, value: "7" },
  { key: "8", text: 8, value: "8" },
  { key: "9", text: 9, value: "9" },
  { key: "10", text: 10, value: "10" },
];
export default class AddBooking extends Component {
  state = {
    bookingEntries: {
      firstName: "",
      lastName: "",
      diningDate: "",
      numberOfCovers: "",
      phoneNumber: "",
      email: "",
    },
  };

  handleChange = (event) => {
    const { target } = event;
    const { name: property, value } = target;
    this.setState(function (prevState) {
      const newEntries = prevState.bookingEntries;
      newEntries[property] = value;
      return { bookingEntries: newEntries };
    });
  };
  handleSelectNumberOfCovers = (e, data) => {
    const selectedNumberOfCovers = data.value;
    this.setState({
      bookingEntries: {
        ...this.state.bookingEntries,
        numberOfCovers: selectedNumberOfCovers,
      },
    });
  };
  clearForm() {
    this.setState({
      bookingEntries: {
        firstName: "",
        lastName: "",
        diningDate: "",
        numberOfCovers: "",
        phoneNumber: "",
        email: "",
      },
    });
  }
  handelSubmit = (e) => {
    e.preventDefault();

    this.props.addNewBooking(this.state.bookingEntries);
    this.clearForm();
  };
  render() {
    const {
      firstName,
      lastName,
      diningDate,
      numberOfCovers,
      phoneNumber,
      email,
    } = this.state.bookingEntries;
    return (
      <div>
        <Form onSubmit={this.handelSubmit}>
          <Grid stackable columns="equal">
            <GridRow centered>
              <Form.Field
                control={Input}
                label="First Name"
                placeholder="Full Name"
                value={firstName}
                iconPosition="left"
                name="firstName"
                required
                onChange={this.handleChange}
                icon="user"
              />
            </GridRow>
            <GridRow centered>
              <Form.Field
                label="Last name"
                control={Input}
                placeholder="Last name"
                iconPosition="left"
                value={lastName}
                name="lastName"
                required
                onChange={this.handleChange}
                icon="user"
                color="blue"
              />
            </GridRow>
            <GridRow centered>
              <Form.Field
                label="Dining Date"
                value={diningDate}
                control={Input}
                type="date"
                name="diningDate"
                onChange={this.handleChange}
                required
              />
            </GridRow>
            <GridRow centered>
              <Form.Select
                search
                label="Number Of Covers"
                options={options}
                scrolling
                selection
                value={numberOfCovers}
                name="numberOfCovers"
                onChange={this.handleSelectNumberOfCovers}
                placeholder="Please select"
                required
              />
            </GridRow>
            <GridRow centered>
              <Form.Field
                label="Phone Number"
                control={Input}
                placeholder="Phone Number"
                iconPosition="left"
                icon="phone"
                name="phoneNumber"
                value={phoneNumber}
                type="Number"
                required
                onChange={this.handleChange}
              ></Form.Field>
            </GridRow>
            <GridRow centered>
              <Form.Field
                icon="at"
                iconPosition="left"
                control={Input}
                value={email}
                name="email"
                label="Email"
                type="Email"
                placeholder="email"
                onChange={this.handleChange}
                required
              />
            </GridRow>
            <Grid.Row>
              <Button color="blue">Submit</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    );
  }
}
