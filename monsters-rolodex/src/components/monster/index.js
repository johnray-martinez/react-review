import {Component} from 'react';

const Monster = (props) => {
  let {name, type} = props.data;

  return (
    <div className='monster'>
      <p>Name: {name}</p>
      <p>Type: {type}</p>
    </div>
  );
}

export default Monster;