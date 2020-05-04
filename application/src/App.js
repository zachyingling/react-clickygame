import React from 'react';
import Header from './components/Header/Header';
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <Jumbotron/>
      <Footer/>
    </div>
  );
}

export default App;
