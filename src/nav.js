import {Link} from "react-router-dom";
import React, {}  from 'react';
function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/a7">Assignment 7</Link> |
            <Link to="/tuiter/home">Tuiter</Link>
        </div>
    )
}

export default Nav;