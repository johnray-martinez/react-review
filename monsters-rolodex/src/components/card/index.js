const Card = (props) => {
  let {name, email, image} = props;

  return (
    <div className='card'>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Card;