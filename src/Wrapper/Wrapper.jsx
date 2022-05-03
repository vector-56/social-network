import React from "react";
import stl from "./Wrapper.module.css";
import { Link } from "react-router-dom";
import Friend from "./Friends/Friends";

const Wrapper = (props) => {

let friendsItem = props.friendsData.map( friend => <Friend id={friend.id} name={friend.name} /> )

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
            <div className={stl.friends}>
                <p>Friends</p>
                {friendsItem}                     
            </div>
       </div>
    );
}

export default Wrapper;