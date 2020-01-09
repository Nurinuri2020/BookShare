import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import {Prompt} from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './logo.png';
import fire from './config/Fire';
import './Login.css';


class Home extends Component {
    state = {
        logoutConfirmation: false
    }

    // confirmationLogOut(e){
    //     e.preventDefault();
    
    //   }

    logout = () => {
        fire.auth().signOut();
    }

    render() {
        return (
            

            <div class="container-fluid">
            <div className="container center">
        <nav className="menu">
            <h1 className="menu__logo">BookShare</h1>

            <div className="menu__right">
                <ul className="menu__list">
                
                <Link to="/home"><li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li></Link>
                <Link to="/about"><li className="menu__list-item"><a className="menu__link" href="#">About</a></li></Link>
                <Link to="/portfolio"><li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li></Link>
                <Link to="/contact"><li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li></Link>
                
                </ul>

                

                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter" />
                </form>
            </div>
        </nav>
    </div>
                <h1 class="display-1">Welcome Home</h1>
                <button onClick={() => this.setState({logoutConfirmation: true})} class="btn btn-warning">Logout</button>
                {this.state.logoutConfirmation && (
                        <div className="confirm">
                            <p>Sure you want to leave?</p>
                            <button className="yesConfirm" onClick={() => this.logout()}>Yes</button>
                            <button className="noConfirm" onClick={() => this.setState({logoutConfirmation: false})}>No</button>
                        </div>
                )}
            </div>
        );

    }

}

export default Home;