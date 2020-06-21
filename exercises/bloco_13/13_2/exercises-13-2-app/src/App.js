import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
    }
    this.fetchDog = this.fetchDog.bind(this);
  }
  
  componentDidMount() {
    this.fetchDog();
  }

  fetchDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(data => data.json())
      .then(result => this.setState({data: result }))
  }

  render() {
    if (this.state.data === '') return "Loading...";
    return (
      <div>
        <p>Doguinhos</p>
        <button onClick={this.fetchDog}>Novo doguinho!</button>
        <div>
          <img src={this.state.data.message} />
        </div>
      </div>
    )
  }
}

export default App;
