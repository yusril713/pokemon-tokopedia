import { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route, NavLink, Switch } from "react-router-dom";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
                    <div className="container-fluid">
                        <NavLink to="/" draggable="false" className="navbar-brand">
                            <img draggable="false" src="/favicon.png" width="30" className="d-inline-block align-text-top me-2" alt="" />
                            <span>POKEMON TOKOPEDIA</span>
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbar">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <NavLink to="/" draggable="false" className="nav-link">Pokemon List</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/my-pokemon-list" draggable="false" className="nav-link">My Pokemon List</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navbar