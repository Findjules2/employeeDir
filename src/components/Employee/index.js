import React from "react";

function Employee(props) {
  return (
    <tr>
      <td>
        <img src={props.picture} />
      </td>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
    </tr>
  );
}

export default Employee;
