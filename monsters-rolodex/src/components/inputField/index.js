import {Component} from 'react';

class InputField extends Component {
  constructor() {
    super();

    this.state = {
      value: ''
    }
  }

  changeHandler = ({target}) => {
    this.setState({value: target.value});
    this.props.callback(target.value);
  }

  render() {
    let {callback, ...otherProps} = this.props;
    return(
      <div className='input-field'>
        <input
          onChange={this.changeHandler}
         {...otherProps} 
        />
      </div>
    );
  }
}

export default InputField;