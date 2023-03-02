import './input-field.styles.css';

const InputField = (props) => {
  let {onChangeHandler, 
    label, 
    className,
    ...otherProps} = props;
  return(
    <div className='input-field'>
      {label && <label>
        {label}
      </label>}
      <input
        className={`input-field ${className}}`}
        onChange={onChangeHandler}
       {...otherProps} 
      />
    </div>
  );
}

export default InputField;