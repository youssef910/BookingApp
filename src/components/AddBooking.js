import React, { useState } from "react";
import { Form, Input, Grid, GridRow, Button } from "semantic-ui-react";
export default function AddBooking(callback, addNewBooking) {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    numberOfCovers: "",
    phoneNumber: "",
    email: "",
    diningDate: "",
  });

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };
  const clearForm = () => {
    setInputs((Inputs) => ({
      firstName: "",
      lastName: "",
      numberOfCovers: "",
      phoneNumber: "",
      email: "",
      diningDate: "",
    }));
  };
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    return callback.addNewBooking(inputs), clearForm();
  };

  const {
    firstName,
    lastName,
    diningDate,
    numberOfCovers,
    phoneNumber,
    email,
  } = inputs;
  return (
    console.log("", inputs),
    (
      <div>
        <Form onSubmit={handleSubmit}>
          <Grid stackable centered columns="equal">
            <GridRow centered>
              <Form.Field
                control={Input}
                label="First Name"
                inline
                placeholder="Full Name"
                value={firstName}
                iconPosition="left"
                name="firstName"
                required
                onChange={handleInputChange}
                icon="user"
              />
            </GridRow>
            <GridRow centered>
              <Form.Field
                label="Last name"
                control={Input}
                inline
                placeholder="Last name"
                iconPosition="left"
                value={lastName}
                name="lastName"
                required
                onChange={handleInputChange}
                icon="user"
                color="blue"
              />
            </GridRow>
            <GridRow centered>
              <Form.Field
                label="Dining Date"
                inline
                value={diningDate}
                control={Input}
                type="date"
                name="diningDate"
                onChange={handleInputChange}
                required
              />
            </GridRow>
            <GridRow centered>
              <Form.Field
                label="Number Of Covers"
                inline
                control={Input}
                select
                placeholder="Number Of Covers"
                iconPosition="left"
                icon="group"
                name="numberOfCovers"
                value={numberOfCovers}
                type="number"
                required
                onChange={handleInputChange}
              ></Form.Field>
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
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                required
              />
            </GridRow>
            <Grid.Row>
              <Button color="blue">Submit</Button>
            </Grid.Row>
          </Grid>
        </Form>
      </div>
    )
  );
}
