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
    let {monsters, currentName, searchBar} = this.state;
    return(
      <main className="dashboard">
          <InputField callback={this.updateSearchBar} type='search'/>
          {monsters
          .map((monster) => {
            if (monster.name.toLowerCase().includes(searchBar.toLowerCase())) {
              return <Monster key={monster.id} data={monster}/>
            }
          })}
      </main>
    );
  }
}

export default Dashboard;