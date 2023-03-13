import { ChangeEventHandler } from 'react';
import './input-field.styles.css';

type InputFieldProps = {
  label: string,
  className?: string,
  type: string
  onChangeHandler: ChangeEventHandler,
}

const InputField = (props: InputFieldProps) => {
  let {
    onChangeHandler, 
    label, 
    className,
    type,
    ...otherProps
  } = props;
  return(
    <div className='input-field'>
      {label && <label>
        {label}
      </label>}
      <input
        type={type}
        className={`input-field ${className}}`}
        onChange={onChangeHandler}
       {...otherProps} 
      />
    </div>
  );
}

export default InputField;