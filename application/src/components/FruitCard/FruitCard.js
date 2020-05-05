import React from "react";
import "./FruitCard.css";

function FruitCard (props) {
  return (
    <div className="card" id="cardMain">
      <div className="img-container">
        <img alt={props.name} src={props.image} height="150" width="170"/>
      </div>
    </div>
  );
}

export default FruitCard