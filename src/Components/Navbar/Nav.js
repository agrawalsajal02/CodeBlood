import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import "./nav.css"
import {Switch,Route,Link} from "react-router-dom"
function Nav() {
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
          <li className="main-nav__item"><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
