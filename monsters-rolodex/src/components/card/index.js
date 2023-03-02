import './card.styles.css';

const Card = (props) => {
  let {name, email, image} = props;

  return (
    <div className='card'>
      <img src={image}/>
      <p className='card__title'>Name: {name}</p>
      <p className='card__title'>Email: {email}</p>
    </div>
  );
}

export default Card;