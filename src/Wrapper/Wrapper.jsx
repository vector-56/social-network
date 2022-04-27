import React from "react";
import stl from "./Wrapper.module.css";
import Content from "./Content/Content";
import Message from "./Message/Message"
import { BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Route } from "react-router-dom";

const Wrapper = () => {
    return (
            <div className={stl.wrapper}>
                <div className={stl.sidebar}>
                    <ul>
                        <NavLink to="/content">Profile</NavLink>
                        <NavLink to="/message">Message</NavLink>
                        <li>News</li>
                        <li>Music</li>
                        <li>Settings</li>
                    </ul>
                </div>
                <Route path="/content" component={Content} />
                <Route path="/message" component={Message} />
            </div>
    );
}

export default Wrapper;