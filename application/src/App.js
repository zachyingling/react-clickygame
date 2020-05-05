import React, { Component } from 'react';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import FruitCard from "./components/FruitCard/FruitCard";
import fruits from "./fruit.json";
import "./App.css";

// const handleMatch = (name) => {
//   const result = this.state.fruits.filter(fruit => fruit.name !== name);

//   return result;
// };

class App extends Component {
  state = {
    fruits: fruits,
    selected: []
  };

  handleSelected = e => {
    this.state.selected.push(e);

    if(this.state.selected.length === 2){
      if (this.state.selected[0] === this.state.selected[1]) {
        // A Match
        const tempFruits = this.state.fruits.filter(fruit => fruit.name !== this.state.selected[0]);
        if(tempFruits.length === 0){
          this.setState({selected: [], fruits: fruits});
        } else {
          this.setState({selected: [], fruits: tempFruits});
        }
      } else {
        // Not a match
        this.setState({selected: []});
      }
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
                key={fruit.id}
                name={fruit.name}
                image={fruit.image}
                handleSelected={this.handleSelected}
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
