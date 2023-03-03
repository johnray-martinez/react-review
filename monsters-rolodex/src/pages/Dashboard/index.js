import {useState, useEffect} from 'react';
import CardList from '../../components/cardList';
import InputField from '../../components/inputField';

const Dashboard = () => {
  // state setup
  const [searchBar, setSearchBar] = useState('');
  const [monsters, setMonsters] = useState([]);

  // hooks
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
     .then((data) => {
       data = data.map(item => {
         return {
           ...item,
           image: `https://robohash.org/${item.id}?set=set2`
         }
       })
       setMonsters(data);
     })
     .catch(console.error);
  }, [])

  // helpers
  const updateSearchBar = (e) => {
    setSearchBar(e.value);
  }

  const getFilteredMonsters = () => {
    return monsters.filter(({name}) => name.toLowerCase().includes(searchBar));
  }

  return(
    <main className="dashboard">
        <InputField className='monster-searchbox' label='Search' value={searchBar} onChangeHandler={updateSearchBar} type='search'/>
        <CardList list={getFilteredMonsters()}/>
    </main>
  );
}

export default Dashboard;