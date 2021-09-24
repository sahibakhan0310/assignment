import React,{Component} from 'react';
import { Field, ErrorMessage } from 'formik'
import ErrorComponent from './ErrorComponent';


class TextBox extends Component {
    render() {
        const {label,name,...rest}=this.props;
        return (
            <div>
                <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component={ErrorComponent} name={name} />
    </div>
            </div>
        )
    }
}

export default TextBox
