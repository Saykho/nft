import React from "react";
import './Menu.scss';

export function Menu(props) {
    return (
        <nav className="nav">
            <div className="nav__left-content">
                <img src="img/logo.svg" alt="Logotype" className="img-logo"/>
                <div className="divider"></div>
                <ul className="links small">
                    <li>Discover</li>
                    <li>How it work</li>
                </ul>
            </div>
            <div className="nav__right-content">
                <form action="https://google.com//search" method="get" className="search">
                    <input type="text" name="q" placeholder="Search" className="search-field"/>
                    <button type="submit" className="search-button">
                        <img src="img/search.svg" alt="Search" className="search-img"/>
                    </button>
                </form>
                <img src="img/notification.svg" alt="Notification" className="notification"
                     onClick={() => alert("Notification")}/>
                <button className="button-upload small" onClick={() => alert("Upload")}>Upload</button>
                <div className="account small">
                    <img src="img/avatar.svg" alt="Avatar" className="img-avatar"/>
                    <div className="coins">7.00698 &nbsp;
                        <span style={{'color': '#45B36B'}}>ETH</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}