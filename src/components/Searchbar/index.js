import React from "react";
import "./style.css";

function Searchbar(props) {
    const { search, handleInputChange, findEmployee } = props;
    return (
        <form className="search">
            <div className="form-group">
                <h2>Search</h2>
                <input
                    value={search}
                    onChange={handleInputChange}
                    name="Employees"
                    type="text"
                    className="form-control"
                    placeholder="Search for an employee"
                    id="index"
                />
                <button type="submit"
                    onClick={e => {
                        e.preventDefault();
                        findEmployee()
                    }}
                    className="btn btn-primary"
                >
                    Search
            </button>
            </div>
        </form>
    )
}

export default Searchbar; 