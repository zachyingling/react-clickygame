import React from "react";
import "./Jumbotron.css";

function Jumbotron () {
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Instructions</h1>
        <p class="lead">This application you have to flip cards and match them. When you match all the cards, the game is over.</p>
      </div>
    </div>
  );
}

export default Jumbotron;