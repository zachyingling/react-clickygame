import React, { Component } from 'react';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import FruitCard from "./components/FruitCard/FruitCard";
import fruits from "./fruit.json";
import "./App.css"

class App extends Component {
  state = {
    fruits
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
                name={fruit.name}
                image={fruit.image}
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
