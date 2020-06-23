import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <img src={image} alt={`${name} small gif`}/>
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>{`Weight ${averageWeight.value}${averageWeight.measurementUnit}`}</p>
        </div>
      </div>
    )
  }
}

export default Pokemon;
