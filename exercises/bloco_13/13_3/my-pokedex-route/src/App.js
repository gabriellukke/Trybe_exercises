import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import pokemons from './data';
import Pokedex from './components/Pokedex';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="nav-bar"></div>
        <h1> Pokedex </h1>
        <Pokedex pokemon={pokemons}/>
      </div>
    )
  }
}

export default App;
