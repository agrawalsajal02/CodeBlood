import React from "react";
import './App.css';
import Footer from "./Components/Footer/Footer";
import Mainbody from "./Components/MainBody/Mainbody";
import Nav from "./Components/Navbar/Nav";
import Ide from "./Components/ide/Ide";
import Aboutus from "./Components/Aboutus/Aboutus"
import Contactus from "./Components/contactus/Contactus"
import Recent from "./Components/Recent/Recent"
import { Route, Switch } from "react-router-dom";
import Login from "./Components/login/Login"
import Show from "./Components/Show"
import firebase from "./config/fbconfig";
function App() {
  return (
    <div className="App">
      
      <Nav />
      <Switch>
        <Route path="/" component={Mainbody} exact />

        <Route path="/ide" component={Ide} />
        <Route path="/aboutus" component={Aboutus} />
        <Route path="/contactus" component={Contactus} />
        <Route path="/login" component={Login} />
        <Route path="/recent" component={Recent} />
        <Route path="/show" component={Show} />

      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
