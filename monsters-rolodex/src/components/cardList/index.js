import Card from '../card';
import './card-list.styles.css';

const CardList = ({list}) => {
  return (
    <div className='card-list'>
      {list
        .map(({id, email, name, image}) => {
          return <Card 
            key={id} 
            image={image}
            name={name}
            email={email}/>
        })}
    </div>
  )
}

export default CardList;