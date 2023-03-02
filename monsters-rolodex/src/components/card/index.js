import './card.styles.css';

const Card = (props) => {
  let {name, email, image} = props;

  return (
    <div className='card'>
      <img src={image}/>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Card;