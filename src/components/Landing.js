import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  return (
    <div className="WATCHING">
      <h3>WHO'S WATCHING?</h3>
      <br />
      <br />
      <br />
      <br />
      <Link to="/catalog" className="nav-link">
        {" "}
        <div className="container">
          <div className="blue-box">
            <br />
            <br />
            <h2>Mona</h2>
          </div>
          <div className="red-box">
            <br />
            <br />
            <h2>Jasmine</h2>
          </div>
          <div className="green-box">
            <br />
            <br />
            <h2>Aura</h2>
          </div>
          <div className="yellow-box">
            <br />
            <br />
            <h2>Tina</h2>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Landing;
