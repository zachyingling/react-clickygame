import React from "react";
import "./FruitCard.css";
import ReactCardFlip from "react-card-flip";

class FruitCard extends React.Component {
  constructor(){
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  handleFrontCardComponent = () => {};

  render(){
    console.log(this.props);
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="card" id="cardMain" onClick={() => { this.handleClick(); this.props.handleSelected(this.props.name, this.props.id);}}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/front-of-poker-card.png"} height="150" width="170"/>
          </div>
        </div>

        <div className="card" id="cardMain" onClick={() => { this.handleClick(); this.props.handleUnselected(this.props.name, this.props.id);}}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/" + this.props.image} height="150" width="170"/>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default FruitCard;