import React, { Component } from 'react';
import pokemons from './data';
import Pokedex from './components/pokedex';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={pokemons}/>
      </div>
    )
  }
}

export default App;
