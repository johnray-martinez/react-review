import {Component} from 'react';

const Monster = (props) => {
  let {name, email} = props.data;

  return (
    <div className='monster'>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

export default Monster;