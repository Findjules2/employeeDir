import React from "react";
import Employee from "../Employee";

function EmployeeWrapper(props) {
  console.log(props.employees[0]);

  // compare(a, b) {
  //     // Use toUpperCase() to ignore character casing
  //     // console.log(a);
  //     // console.log(b);
  //     const bandA = a.name.first.toUpperCase();
  //     const bandB = b.name.first.toUpperCase();
  //     let comparison = 0;
  //     if (bandA > bandB) {
  //       comparison = 1;
  //     } else if (bandA < bandB) {
  //       comparison = -1;
  //     }
  //     return comparison;
  //   }
  //   // singers.sort(compare);
  //   Employees = event => {
  //     event.preventDefault();
  //     const newArray = this.state.employeeList.sort(this.compare);
  //     console.log(newArray);
  //     this.setState({
  //       employeeList: newArray
  //     })
  //   }

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone</th>
          <th scope="col">Email</th>
          <th scope="col">D.O.B.</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map(employee => (
          <Employee
            key={employee.login.uuid}
            picture={employee.picture.thumbnail}
            first={employee.name.first}
            last={employee.name.last}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob.date}
          />
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeWrapper;
