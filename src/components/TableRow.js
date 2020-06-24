import React from "react";
import { Table, Dropdown } from "semantic-ui-react";

const statusOptions = [
  {
    key: "Not arrived",
    text: "Not arrived",
    value: "Not arrived",
  },
  { key: "Seated", text: "Seated", value: "Seated" },
];
export default (props) => {
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
