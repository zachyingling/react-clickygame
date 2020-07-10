import React from "react";
import "./Jumbotron.css";

function Jumbotron () {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Instructions</h1>
        <p className="lead">This application you have to flip cards and match them. When you match all the cards, the game is over.</p>
      </div>
    </div>
  );
}

export default Jumbotron;