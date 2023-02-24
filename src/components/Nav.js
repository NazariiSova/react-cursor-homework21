import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <Link to="/SingIn">SingIn</Link>
            <Link to="/SingUp">SingUp</Link>
        </div>
    );
;}

export default Nav;
