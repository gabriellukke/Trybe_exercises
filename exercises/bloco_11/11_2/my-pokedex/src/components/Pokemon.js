import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image} = this.props.pokemon;

    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Weight ${averageWeight.value}`} </p>
        </div>
        <img src={image} alt={`${name} small gif`}/>
      </div> 
    )
  }
}

export default Pokemon;