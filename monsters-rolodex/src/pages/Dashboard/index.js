import {Component} from 'react';
import Monster from '../../components/monster';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // lifecycle methods
  componentDidMount() {
    console.log('mount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      this.setState({monsters: data}, () => {
        console.log(this.state);
      });
    })
    .catch(console.error);
  }

  // helpers
  handleClick = () => {
    this.setState({currentName: 'Hotdog'}, () => {
      console.log(this.state);
    });
  }

  render() {
    console.log('render')
    return(
      <main className="dashboard">
          <p>
            {this.state.currentName}
          </p>
          <button onClick={this.handleClick} type="button">
            Change Name
          </button>

          {this.state.monsters.map((monster, i) => {
            return <Monster key={i} data={monster}/>
          })}
      </main>
    );
  }
}

export default Dashboard;