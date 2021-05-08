import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <div className={"tab"}>
        <NavLink className="tablinks" to="/one">
            One
        </NavLink>
        <NavLink className="tablinks" to="/two">
            Two
        </NavLink>
        <NavLink className="tablinks" to="/three">
            Three
        </NavLink>
    </div>
);

export default Navbar;
