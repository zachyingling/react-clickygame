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
    console.log(this.props);
    if(this.props.selected.length === 2) { 
      console.log("front flip card called");
      setTimeout(this.handleFrontCardComponent, 1000);
    } else {
      this.handleClick();
    }
    setTimeout(this.timeoutSelectedFunc, 2000);
  };

  timeoutSelectedFunc = () => {
    this.props.handleSelected(this.props.name, this.props.id);
  };

  secondCardClickFunction = () => {
    console.log(this.props);
    if(this.props.selected.length === 2) { 
      console.log("front flip card called");
      setTimeout(this.handleFrontCardComponent, 1000);
    } else {
      this.handleClick();
    }
    setTimeout(this.timeoutUnselectedFunc, 2000);
  };

  timeoutUnselectedFunc = () => {
    this.props.handleUnselected(this.props.name, this.props.id);
  }

  render(){
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div className="card" id="cardMain" onClick={() => this.frontCardClickFunction()}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/front-of-poker-card.png"} height="150" width="170"/>
          </div>
        </div>

        <div className="card" id="cardMain" onClick={() => this.secondCardClickFunction()}>
          <div className="img-container">
            <img alt={this.props.name} src={process.env.PUBLIC_URL + "/" + this.props.image} height="150" width="170"/>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default FruitCard;