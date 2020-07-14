import React, { Component } from 'react';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import FruitCard from "./components/FruitCard/FruitCard";
import fruits from "./fruit.json";
import "./App.css";

class App extends Component {
  state = {
    fruits: fruits,
    selected: []
  };

  handleUnselected = (name, id, cb) => {
    return this.setState({ selected: [] }, cb);
  };

  // Function is called everytime a fruit card is clicked
  handleSelected = (name, id, cb) => {
    let clickedFruit = {
      fruitId: id,
      fruitName: name
    };

    const newStateArray = this.state.selected.slice();
    newStateArray.push(clickedFruit);
    return this.setState({selected: newStateArray}, cb);
  };

  handleMatch = () => {
    // Makes sure two fruits are selected
    if(this.state.selected.length === 2){
      // Checks if the two fruits clicked on page have the same names
      if (this.state.selected[0].fruitName === this.state.selected[1].fruitName) {
        // Checks if the two fruits have different ids or are differnt images and cards
        if(this.state.selected[0].fruitId !== this.state.selected[1].fruitId){
          const tempFruits = this.state.fruits.filter(fruit => fruit.name !== this.state.selected[0].fruitName);
          // Checks if there are anymore rendered fruits left on the page
          if(tempFruits.length === 0){
            return this.setState({selected: [], fruits: fruits});
          } else {
            return this.setState({selected: [], fruits: tempFruits});
          }
        } else {
          // Not a match
          return this.setState({selected: []});
        }
      } else {
        // Not a match
        return this.setState({selected: []});
      }
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Jumbotron/>
        <div className="container" id="containerMain">
          <div className="row">
            {this.state.fruits.map(fruit => (
              <FruitCard
                id={fruit.id}
                key={fruit.id}
                name={fruit.name}
                image={fruit.image}
                handleSelected={this.handleSelected}
                handleUnselected={this.handleUnselected}
                handleMatch={this.handleMatch}
                selected={this.state.selected}
              />
            ))}
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
