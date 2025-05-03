import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to ="/">讲义</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to ="/">Home</Link>
                        <Link className="nav-link" to="/Linux">Linux</Link>
                        <Link className="nav-link" to="/Django">Django</Link>
                        <Link className="nav-link" to="/Web">Web</Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Navbar;