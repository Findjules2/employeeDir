import React from "react";
// import "./App.css";
// import API from "./utils/API";
// import EmployeeWrapper from "./components/EmployeeWrapper";
// import Navbar from "./components/Navbar";

function Search() {
  return (
    <div className="navbar navbar-light bg-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

// class Search extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             employees: employee_list,
//             search: ""
//         }
//     };
//     handleSearch = (event) =>{
//         event.preventDefault();
//         this.setState({
//             employees: this.state.employees.filter(emp => emp.includes(this.state.search))
//         })
//     }
//     _handleChange = e =>{
//         const {value, name } = e.target;
//         this.setState({
//             [name]:value,
//             employees: employee_list.filter(emp => emp.name.first.includes(this.state.search))
//         })
//     }
// render() {
//     return (
//       <div>
//         <section style={styles.sectionStyles} className="section">
//           <form className="form-group mx-auto py-5" style={styles.formStyles} onSubmit={() => this.handleSearch} >
//             <input
//               className="form-control"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//               name ="search"
//               value={this.state.search}
//               onChange={(e) => this._handleChange(e)}
//             />
//           </form>
//         </section>
//         <EmployeeList employees={this.state.employees}  />
//       </div>
//     );
//   }
// }
