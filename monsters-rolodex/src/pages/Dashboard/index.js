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

  }

  // helpers
  handleClick = () => {
    this.setState({currentName: 'Hotdog'}, () => {
      console.log(this.state);
    });
  }

  render() {
    return(
      <main class="dashboard">
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