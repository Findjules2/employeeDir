import React from "react";
import "./App.css";
import API from "./utils/API";
import EmployeeWrapper from "./components/EmployeeWrapper";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getMany(100)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Search />
        <EmployeeWrapper employees={this.state.employees} />
      </div>
    );
  }
}
export default App;
