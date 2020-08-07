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
            nameOrder = this.state.Employees.sort((a, b) =>
                a.name.last < b.name.last ? 1 : -1
            );
            order = "asc";
        }
        this.setState({ Employees: nameOrder, sortOrder: order })
    }

    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <Row>
                        <Searchbar
                            findEmployee={this.findEmployee}
                            handleInputChange={this.handleInputChange}
                            Employees={this.state.Employees}
                        />
                    </Row>
                    <Row>
                        <Col size="sm-2">
                            <h4>Picture</h4>
                            <hr></hr>
                        </Col>
                        <Col size="sm-2">
                            <h4>
                                Name{" "}
                                <button onClikc={this.sortName}>
                                    <i className="fas fa-sort fa-sx" />
                                </button>
                            </h4>
                        </Col>
                        <Col size="sm-2">
                            <h4>Phone Number</h4>
                            <hr></hr>
                        </Col>
                        <Col size="sm-3">
                            <h4>Email</h4>
                            <hr></hr>
                        </Col>
                        <Col size="sm-2">
                            <h4>DOB</h4>
                            <hr></hr>
                        </Col>
                    </Row>
                    {this.state.filteredEmployees.map((thisEmp, index) => {
                        return (
                            <Row key={index}>
                                <Col size="sm-2">
                                    <img src={thisEmp.picture.medium}
                                        alt="employee-picture"
                                    />
                                </Col>
                                <Col size="sm-2">
                                    {thisEmp.name.last}, {thisEmp.name.first}
                                </Col>
                                <Col size="sm-2">
                                    {thisEmp.phone}
                                </Col>
                                <Col size="sm-3">
                                    <Link to={"/"}>{thisEmp.email}</Link>
                                </Col>
                                <Col size="sm-2">
                                    {moment(thisEmp.dob.date.split("T")[0], "YYY-MM-DD").format("l")}
                                </Col>
                            </Row>
                        )
                    })}
                </Container>
            </div>
        )
    }
}

export default Home;