import React from "react";
import "./FruitCard.css";
import ReactCardFlip from "react-card-flip";

class FruitCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleFrontCardComponent = this.handleFrontCardComponent.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  handleFrontCardComponent() {
    this.setState(prevState => ({ isFlipped: false }));
  };

  frontCardClickFunction = () => {
    console.log(this.props.selected.length);
    this.handleClick();
    setTimeout(this.timeoutMatchFunc, 1500);
  };

  timeoutMatchFunc = () => {
    this.props.handleMatch(this.props.name, this.props.id);
  };

  // After unselected the fruit it just call this function to flip the card over
  secondCardClickFunction = () => {
    console.log(this.props.selected.length);
    this.handleClick();
  };

  render(){
    if(this.props.selected.length === 2) { 
      console.log("front flip card called");
      setTimeout(this.handleFrontCardComponent, 500);
    }
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="card" id="cardMain" onClick={() => {this.props.handleSelected(this.props.name, this.props.id, this.frontCardClickFunction);}}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/front-of-poker-card.png"} height="150" width="170"/>
          </div>
        </div>

        <div className="card" id="cardMain" onClick={() => {this.props.handleUnselected(this.props.name, this.props.id, this.secondCardClickFunction);}}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/" + this.props.image} height="150" width="170"/>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default FruitCard;