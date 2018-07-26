import React from 'react'
// import { connect } from 'react-redux';
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {

    myFunction = () => {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.classList.add("responsive")
        } else {
            x.classList.remove("responsive")
        }
    }

    render () {
        return (
            <div className="nav-container">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

                <div className="topnav" id="myTopnav">
                    <a href="/" className="active"><img src={logo} className="logo" alt="logo"/></a>
                    <div className="nav-links">
                        <Link className="" to="/">About</Link>
                        <Link className="" to="/">Jobs</Link>
                        <Link className="" to="/">Contact</Link>
                    </div>
                    <a className="icon" onClick={this.myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default NavBar