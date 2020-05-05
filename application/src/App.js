import React, { Component } from 'react';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import Container from "./components/Container/Container";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Jumbotron/>
        <Container>
        
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
