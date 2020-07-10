import React from "react";
import "./FruitCard.css";

function FruitCard (props) {
  return (
    <div className="card" id="cardMain" onClick={() => props.handleSelected(props.name)}>
      <div className="img-container">
        <img alt={props.name} src={process.env.PUBLIC_URL + "/" + props.image} height="150" width="170"/>
      </div>
    </div>
  );
}

export default FruitCard;