import React, { Component } from 'react';
import './App.css';

const states = ['Rio de Janeiro', 'Minas Gerais', 'São Paulo', 'Amapá', 'Amazonas', 'Alagoas', 'Pernambuco', 'Bahia', 'Distrito Federal', 'Paraíba', 'Piauí', 'Rio Grande do Norte', 'Tocantins', 'Mato Grosso', 'Mato Grosso do Sul', 'Roraima', 'Espirito Santo', 'Rondônia', 'Sergipe', 'Pará', 'Ceará', 'Santa Catarina', 'Paraná', 'Acre', 'Maranhão', 'Goiás', 'Rio Grande do Sul'];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: {
        house: false,
        apartament: false,
      },
      resume: '',
      role: '',
      roleDescription: '',
    }
  }


  render() {
    return (
      <div>
        <form>
          <fieldset>
            <legend>Dados Pessoais</legend>
            <div className="container">
              Nome:
              <input 
              type="name"
              name="name"
              maxLength="40"
              required
              value={this.state.name}
              />
            </div>
            <div className="container">
              Email:
              <input
              type="email"
              name="email"
              maxLength="50"
              required
              value={this.state.email}
              />
            </div>
            <div className="container">
              CPF:
              <input
              type="text"
              name="cpf"
              maxLength="11"
              required
              value={this.state.cpf}
              />
            </div>
            <div className="container">
              Endereço
              <input
              type="text"
              name="address"
              maxLength="200"
              required
              value={this.state.address}
              />
            </div>
            <div className="container">
              Cidade:
              <input
              type="text"
              name="city"
              maxLength="28"
              value={this.state.city}
              />
            </div>
            <div className="container">
              Estado:
              <select
              type="text"
              name="countryState"
              required
              value={this.state.countryState}
              />
              {states.sort().map((value, key) => <option key={key}>{value}</option>)}
            </div>
            <div>
              Tipo:
              <label>
                <input
                type="radio"
                name="type"
                value={this.state.addressType.house}
                />
                Casa
              </label>
              <label>
                <input
                type="radio"
                name="type"
                value={this.state.addressType.apartament}
                />
                Apartamento
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Dados Profissionais</legend>
            <div className="container">
              Resumo do currículo:
              <textarea 
              name="resume"
              maxLength="1000"
              required
              value={this.state.resume}
              />
            </div>
            <div className="container">
              Cargo:
              <input
              type="text"
              name="role"
              maxLength="40"
              required
              value={this.state.role}
              onMouseEnter={() => {alert('Preencha com cuidado esta informação')}}
              />
            </div>
            <div className="container">
              Descrição do Cargo:
              <textarea 
              name="roleDescription"
              maxLength="500"
              required
              value={this.state.roleDescription}
              />
            </div>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default App;
