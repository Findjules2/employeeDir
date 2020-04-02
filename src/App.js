import React from "react";
import "./App.css";
import API from "./utils/API";
import EmployeeWrapper from "./components/EmployeeWrapper";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    employees: [],
    searchName: ""
  };

  componentDidMount() {
    API.getMany(100)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  searchTerm = terms => {
    this.setState({ searchName: terms });
  };

  render() {
    const activeList = this.state.employees.filter(employee => {
      return employee.name.first
        .toLowerCase()
        .includes(this.state.searchName.toLowerCase());
    });
    return (
      <div className="App">
        <Navbar />
        <Search search={this.searchTerm} theTerm={this.state.searchName} />
        <EmployeeWrapper employees={activeList} />
      </div>
    );
  }
}
export default App;
