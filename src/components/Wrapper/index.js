import React, { Children } from "react";
import "./style.css";

function Wrapper({ children }) {
    return (
        <div className="wrapper">
            { children }
        </div>
    )
}

export default Wrapper;