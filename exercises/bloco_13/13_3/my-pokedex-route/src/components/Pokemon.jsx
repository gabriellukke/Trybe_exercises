import React from 'react';
import { Link } from 'react-router-dom';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image, id } = this.props.pokemon;

    return (
      <div className="pokemon">
        <img src={image} alt={`${name} small gif`}/>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Weight ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
          <Link to={`/pokemons/:${id}`} >Details</Link>
        </div>
      </div>
    )
  }
}

export default Pokemon;
