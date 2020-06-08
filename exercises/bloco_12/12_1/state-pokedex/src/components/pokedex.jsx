import React from 'react';
import Pokemon from './pokemon';
import Button from './button';
import pokemons from '../data';


class Pokedex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemonIndex: 0,
      pokemonType: pokemons,
    }
  }

  nextPokemon(numberOfPokemons) {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % numberOfPokemons,
    }));
  }

  filterPokemon(type) {
    const filteredPokemons = pokemons.filter(x => x.type === type);
    return this.setState({ pokemonType: filteredPokemons })
  }


  render() {
    const { pokemonIndex } = this.state;
    const { pokemonType } = this.state;

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemonType[pokemonIndex]} />
        <div>
          <Button onClick={() => this.filterPokemon('Fire')} children="Fire" />
          <Button onClick={() => this.filterPokemon('Psychic')} children="Psychic" />
          <Button onClick={() => this.nextPokemon(pokemonType.length)} children="Next Pokemon" />
        </div>
      </div>
    )
  }
}

export default Pokedex;
