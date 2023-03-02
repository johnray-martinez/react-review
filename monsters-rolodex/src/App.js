import {Component} from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Dashboard />
        </header>
      </div>
    );
  }
}

export default App;
