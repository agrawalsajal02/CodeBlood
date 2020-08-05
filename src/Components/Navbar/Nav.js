import React, { Component } from "react";
import Login from "../login/Login"
import Firebase from "../../config/fbconfig";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./nav.css"
import {Switch,Route,Link} from "react-router-dom"
class Nav extends Component {
  constructor(props) {
    super(props);
   
    this.state = ({
      user: null,
   
    });
    this.logout = this.logout.bind(this);
    this.authListener = this.authListener.bind(this);
  }
  
  logout() {
    Firebase.auth().signOut();
}

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    Firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  };

  render(){
    return (
    <header className="main-header">
      <div className="main-header-left">
        <ul className="main-header-lefts">
          <li className=" main-header-brand"><Link to="/"><img src="3.png" style={{height:"50px"}}/></Link></li>
          <li className="main-header-left-item"><Link to="/recent">Recent</Link></li>
          <li className="main-header-left-item"><Link to="/ide">Ide</Link></li>
        </ul>
      </div><nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item"><Link to="/aboutus">Aboutus</Link></li>
          <li className="main-nav__item"><Link to="/contactus">Contactus</Link></li>
          <li className="main-nav__item">
          <div>{this.state.user ? (  <button onClick={this.logout}>Logout</button>) : (<Link to="/login">Login</Link>)}</div>
            </li>
        </ul>
      </nav>
    </header>
  );
  }
}

export default Nav;
