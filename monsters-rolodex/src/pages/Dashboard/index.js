import {Component} from 'react';
import Monster from '../../components/monster';
import InputField from '../../components/inputField';

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchBar: '',
      monsters: []
    };
  }

  // lifecycle methods
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      this.setState({monsters: data});
    })
    .catch(console.error);
  }

  // helpers
  handleClick = () => {
    this.setState({currentName: 'Hotdog'}, () => {
      console.log(this.state);
    });
  }

  updateSearchBar = (keyword) => {
    this.setState({searchBar: keyword})
  }

  render() {
    return(
      <main className="dashboard">
          <p>
            {this.state.currentName}
          </p>
          <button onClick={this.handleClick} type="button">
            Change Name
          </button>
          <InputField callback={this.updateSearchBar} type='search'/>
          {this.state.monsters
          .map((monster) => {
            if (monster.name.toLowerCase().includes(this.state.searchBar.toLowerCase())) {
              return <Monster key={monster.id} data={monster}/>
            }
          })}
      </main>
    );
  }
}

export default Dashboard;