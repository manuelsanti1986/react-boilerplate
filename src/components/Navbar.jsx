import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => (
    <div className={"tab"}>
        <NavLink className="tablinks" to="/one">
            <i className={"fa fa-user-o"} />
            One
        </NavLink>
        <td/>
        <NavLink className="tablinks" to="/two">
            <i className={"fa fa-gear"} />
            Two
        </NavLink>
        <NavLink className="tablinks" to="/three">
            <i className={"fa fa-sign-out"} />
            Three
        </NavLink>
    </div>
);

export default Navbar;
