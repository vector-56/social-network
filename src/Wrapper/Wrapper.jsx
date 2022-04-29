import React from "react";
import stl from "./Wrapper.module.css";
import { NavLink } from "react-router-dom";

const Wrapper = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.sidebar}>
                <ul>
                    <li><NavLink to="/profile">Profile</NavLink></li>
                    <li><NavLink to="/message">Message</NavLink></li>
                    <li><NavLink to="/news">News</NavLink></li>
                    <li><NavLink to="/music">Music</NavLink></li>
                    <li><NavLink to="/setting">Settings</NavLink></li>
                </ul>
            </div>
       </div>
    );
}

export default Wrapper;