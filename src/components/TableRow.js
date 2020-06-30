import React from "react";
import { Table, Dropdown } from "semantic-ui-react";
import PropTypes from "prop-types";
const statusOptions = [
  {
    key: "Not arrived",
    text: "Not arrived",
    value: "Not arrived",
  },
  { key: "Seated", text: "Seated", value: "Seated" },
];
const TableRow = (props) => {
  return (
    <Table.Row>
      <Table.Cell>{props.item.firstName}</Table.Cell>
      <Table.Cell>{props.item.lastName}</Table.Cell>
      <Table.Cell>{props.item.diningDate}</Table.Cell>
      <Table.Cell>{props.item.numberOfCovers}</Table.Cell>
      <Table.Cell>{props.item.phoneNumber}</Table.Cell>
      <Table.Cell>{props.item.email}</Table.Cell>
      <Table.Cell>
        <Dropdown
          placeholder="Select status"
          compact
          selection
          defaultValue={statusOptions[0].value}
          options={statusOptions}
        />
      </Table.Cell>
    </Table.Row>
  );
};

TableRow.prototypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  diningDate: PropTypes.instanceOf(Date).isRequired,
  numberOfCovers: PropTypes.number.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
};
export default TableRow;
