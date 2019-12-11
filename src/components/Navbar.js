import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar bg-dark navbar-dark" style={{ height: "68px", padding: "0px 0px 0px 10px" }} >
                    < a href="/" >
                        <img src={require('../images/myLogo.png')} alt="logo" s />
                    </a>
                </div>
            </div >
        )
    }
}

export default Navbar;