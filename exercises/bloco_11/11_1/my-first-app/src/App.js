import React from 'react';
import './App.css';

const tasks = ['Programar', 'Codar', 'Criar códigos', 'Estudar React', 'Estudar JS']

const App = () => {
  return (
    <ul>
     { tasks.map(task => <li> {task} </li>) }
    </ul>
   )
  }

export default App;