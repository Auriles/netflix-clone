import React, { Component } from 'react';
import "../../js/menu-hamburger.js";

class SidebarComponent extends Component {

    render() {

        return (

            <div className="sidebar-component">

                <div className="logo-navbar">LOGO</div>
                <nav className="active">
                    <ul>
                        <li><a href="#" className="active">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
                <div className="menu-toggle">
                    <i className="fa fa-bars"></i>
                </div>
            </div>
        );
    }
}

export default SidebarComponent;
