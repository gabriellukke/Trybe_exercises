import React, { Component } from 'react';
import Dropdown from './components/Dropdown';

const content = [
  {id: 1, item: 'Arch'},
  {id: 2, item: 'Debian'},
  {id: 3, item: 'Manjaro'},
  {id: 4, item: 'Ubuntu'},
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dropdown content={content}>Título da lista customizado</Dropdown>
      </div>
    )
  }
}

export default App;
