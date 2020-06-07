import React from 'react';
import Pokemon from './pokemon'

class Pokedex extends React.Component {
  render() {
    const { pokemon } = this.props;

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemon}/>
      </div>
    )
  }
}

export default Pokedex;
