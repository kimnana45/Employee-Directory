import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Searchbar from "../components/Searchbar"
import moment from "moment";
import { Link } from "react-router-dom";

class Home extends Component {
    state = {
        Employees: [],
        filteredEmployees: [],
        sortDirection: "asc",
        search: "",
        error: ""
    }

    componentDidMount() {
        API.getEmployees().then(employees => {
            console.log(employees);
            this.setState({
                Employees: employees.data.results,
                filteredEmployees: employees.data.results
            });
        });
    }

    handleInputChange = e => {
        console.log(e.target.value);
        console.log(this.state.search);
        if(e.target.value === "") {
            this.setState({ filteredEmployees: this.state.Employees })
        } else {
            this.setState({ search: e.target.value }, () => {
                this.findEmployee();
            });
        }
    }

    findEmployee = e => {
        let emp;
        let name = this.state.search;
        emp = this.state.Employees.filter(function(employee) {
            console.log(employee.name.first);
            console.log(name);
            name = name.toLowerCase();
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return name === employee.name.first;
        });
        return this.setState({ filteredEmployees: emp })
    }

    sortName = () => {

    }
}

