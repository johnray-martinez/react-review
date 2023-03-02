import {Component} from 'react';
import CardList from '../../components/cardList';
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

  getFilteredMonsters = () => {
    let {monsters, searchBar} = this.state;

    return monsters.filter(({name}) => name.toLowerCase().includes(searchBar));
  }

  render() {
    let {currentName, monsters} = this.state;
    return(
      <main className="dashboard">
          <p>
            {currentName}
          </p>
          <button onClick={this.handleClick} type="button">
            Change Name
          </button>
          <InputField callback={this.updateSearchBar} type='search'/>
          <CardList list={this.getFilteredMonsters()}/>
      </main>
    );
  }
}

export default Dashboard;