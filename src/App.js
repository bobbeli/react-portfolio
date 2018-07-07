import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PortfolioCard from "./components/card/PortfolioCard";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PortfolioCard cardType="start" />
        <PortfolioCard cardType="bio" />
        <PortfolioCard cardType="code" />
      </div>
    );
  }
}

export default App;
