import React, { Component } from 'react';
import Button from './components/Button';
import Alert from './components/Alert';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal = false,
      isDisableButton: false,
    }
  }

  changeTitle = (value) => {
    this.state({ title:value })
  }

  changeShowComponent = () => {
    this.setState((state) => {
      showModal: !state.showModal,
      isDisableButton: !state.isDisableButton,
    })
  }

  render() {
    return (
      <div className="main">
        <Button content="Clique aqui" isDisable={this.state.isDisableButton} showComponent={this.changeShowComponent} value="Título Show" />
        {this.state.showModal &&
          <Alert
          hideComponent={this.changeShowComponent}
          contentTitle="Modal"
          content="Coloque qualquer coisa aqui."
          />
          }
      </div>
    )
  }
}

export default App;
