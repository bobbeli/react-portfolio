import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PortfolioCard from "./components/card/PortfolioCard";
import Header from "./components/header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PortfolioCard cardType="start" columns="one"/>
        <PortfolioCard cardType="bio" columns="one" />
        <PortfolioCard cardType="code" columns="two" />
        <PortfolioCard cardType="code" columns="two" />
        <PortfolioCard cardType="code" columns="two" />
        <PortfolioCard cardType="code" columns="two" />
      </div>
    );
  }
}

export default App;
