import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import Users from './Users';
import StrictAcess from './StrictAcess';
import { 
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const user = { username: 'joao', password: 1234, }

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              <li>
                <Link to="/strict-acess">Strict Acess</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/strict-acess" render={(props) => <StrictAcess {...props} user={user}/>} />
            <Route path="/about" component={About} />
            <Route path="/users" render={(props) => <Users {...props} greetingMessage="Good Morning!"/>} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
