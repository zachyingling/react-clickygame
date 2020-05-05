import React, { Component } from 'react';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import fruits from "./fruit.json";

class App extends Component {
  state = {
    fruits
  };

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Jumbotron/>
        <div className="container">
          <div className="row">
            <h1>Hello</h1>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
