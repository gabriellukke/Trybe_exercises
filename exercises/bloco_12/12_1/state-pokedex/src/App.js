import React, { Component } from 'react';
import pokemons from './data';
import Pokedex from './components/pokedex';
import Button from './components/button';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonIndex: 0,
    }
  }

  nextPokemon = () => {
    this.setState({pokemonIndex: (this.state.pokemonIndex + 1) % pokemons.length,})
  }

  render() {

    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemon={pokemons[this.state.pokemonIndex]}/>
        <Button onClick={this.nextPokemon} label="teste"/>
        <input onChange={this.nextPokemon}></input>
      </div>
    )
  }
}

export default App;
