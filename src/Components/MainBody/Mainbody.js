import React from "react";
import "./mainbody.css"
// import img from "../../../public/screenshot.png"
function mainbody() {
  return (
    <div className="mainbody">
      <h1 style={{textAlign:"center"}}>Welcome to Code blood</h1>
      <div className="container">
      <div className="row">
        <div className="col lg-6">
<img src="human.png"  className="img-thumbnail" alt="Responsive image"/>   
        </div>
<div  className="col lg-6">
<img src="screenshot.png"  style={{"margin-top":"20%"}} className="img-fluid" alt="Responsive image"/>
</div>
</div>
      </div>
    </div>
  );
}

export default mainbody;
