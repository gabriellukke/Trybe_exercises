import React from 'react';
import Pokemon from './pokemon';
import Button from './button';
import pokemons from '../data';


class Pokedex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonIndex: 0,
      pokemonType: 'Fire'
    }
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }
  
  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon[this.state.pokemonIndex]}/>
        <div>
          <Button onClick={() => this.nextPokemon(pokemon.length)} children="Next Pokemon" />
        </div>
      </div>
    )
  }
}

export default Pokedex;
