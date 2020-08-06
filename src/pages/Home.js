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
        sortOrder: "asc",
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
        if (e.target.value === "") {
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
        emp = this.state.Employees.filter(function (employee) {
            console.log(employee.name.first);
            console.log(name);
            name = name.toLowerCase();
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return name === employee.name.first;
        });
        return this.setState({ filteredEmployees: emp })
    }

    sortName = () => {
        let nameOrder;
        let order;
        if (this.state.sortOrder === "asc") {
            nameOrder = this.state.Employees.sort((a, b) =>
                a.name.last > b.name.last ? 1 : -1
            );
            order = "dsc";
        } else {
            nameOrder = this.state.Employees.sort((a,b) => 
            a.name.last < b.name.last ? 1 : -1
            );
            order = "asc";
        }
        this.setState({ Employees: nameOrder, sortOrder: order })
        }

        render() {
            return (
                <div>
                    <Container style={{ minHeight: "80%"}}>
                    <Row>
                        <Searchbar 
                        findEmployee = {this.findEmployee}
                        handleInputChange = {this.handleInputChange}
                        Employees = {this.state.Employees}
                        />
                    </Row>
                    </Container>
                </div>
            )
        }
    }


    export default Home;