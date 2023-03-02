const InputField = (props) => {
  let {onChangeHandler, label, ...otherProps} = props;
  return(
    <div className='input-field'>
      {label && <label>
        {label}
      </label>}
      <input
        onChange={onChangeHandler}
       {...otherProps} 
      />
    </div>
  );
}

export default InputField;