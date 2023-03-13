import {useState, useEffect, ChangeEvent} from 'react';
import CardList from '../../components/cardList';
import InputField from '../../components/inputField';
import { get } from '../../utils/fetch';

export type Monster = {
  id: string,
  name: string,
  email: string,
  image: string
}

const Dashboard = () => {
  // state setup
  const [searchBar, setSearchBar] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

  // hooks
  useEffect(() => {
    get<Monster[]>('https://jsonplaceholder.typicode.com/users')
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

  useEffect(() => {
    let newFilteredMonsters = monsters.filter(({name}) => name.toLowerCase().includes(searchBar));

    setFilteredMonsters(newFilteredMonsters);
  }, [searchBar, monsters])

  // helpers
  const updateSearchBar = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchBar(e.target.value);
  }

  return(
    <main className="dashboard">
        <InputField className='monster-searchbox' label='Search' onChangeHandler={updateSearchBar} type='search'/>
        <CardList list={filteredMonsters}/>
    </main>
  );
}

export default Dashboard;