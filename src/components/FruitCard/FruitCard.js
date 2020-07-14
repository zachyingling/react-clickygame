import React from "react";
import "./FruitCard.css";
import ReactCardFlip from "react-card-flip";

class FruitCard extends React.Component {
  constructor(){
    super();
    this.state = {
      isFlipped: false
    };
  }

  render(){
    return (
        <div className="card" id="cardMain" onClick={() => this.props.handleSelected(this.props.name, this.props.id)}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/" + this.props.image} height="150" width="170"/>
          </div>
        </div>
      );
    }
}

export default FruitCard;