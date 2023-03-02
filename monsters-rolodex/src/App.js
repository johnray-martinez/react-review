import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentName: 'Jor',
      otherState: '5'
    };
  }

  handleClick = () => {
    this.setState({currentName: 'Hotdog'}, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.currentName}
          </p>
          <button onClick={this.handleClick} type="button">
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
