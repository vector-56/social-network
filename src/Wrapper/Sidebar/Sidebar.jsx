import React from "react";
import stl from "./Sidebar.module.css";

const Sidebar = () => {
    <div className={stl.sidebar}>
        <ul>
            <li>Profile</li>
            <li>Message</li>
            <li>News</li>
            <li>Music</li>
            <li>Setting</li>
        </ul>
    </div>
}

export default Sidebar;