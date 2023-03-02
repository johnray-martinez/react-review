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

  updateSearchBar = (e) => {
    this.setState({searchBar: e.target.value})
  }

  getFilteredMonsters = () => {
    let {monsters, searchBar} = this.state;

    return monsters.filter(({name}) => name.toLowerCase().includes(searchBar));
  }

  render() {
    return(
      <main className="dashboard">
          <InputField label='Search' value={this.state.searchBar} onChangeHandler={this.updateSearchBar} type='search'/>
          <CardList list={this.getFilteredMonsters()}/>
      </main>
    );
  }
}

export default Dashboard;