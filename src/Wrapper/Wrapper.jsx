import React from "react";
import stl from "./Wrapper.module.css";
import { Link } from "react-router-dom";

const Wrapper = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.sidebar}>
                <ul>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/message">Message</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/music">Music</Link></li>
                    <li><Link to="/setting">Settings</Link></li>
                </ul>
            </div>
       </div>
    );
}

export default Wrapper;