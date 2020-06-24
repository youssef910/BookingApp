import React from "react";
import { Table } from "semantic-ui-react";
import TableRow from "./TableRow";
// import GuestList from "../utils/GuestList";
export default (props) => {
  console.log("ssss", props);
  return (
    <Table singleLine striped inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>First Name</Table.HeaderCell>
          <Table.HeaderCell>Last Name </Table.HeaderCell>
          <Table.HeaderCell>Dining Date</Table.HeaderCell>
          <Table.HeaderCell>Number of covers</Table.HeaderCell>
          <Table.HeaderCell>Phone Number</Table.HeaderCell>
          <Table.HeaderCell>E-mail </Table.HeaderCell>
          <Table.HeaderCell>status</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {props.bookings.map((guest) => (
          <TableRow item={guest} />
        ))}
      </Table.Body>
    </Table>
  );
};  
