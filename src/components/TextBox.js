import React,{Component} from 'react';
import { Field, ErrorMessage } from 'formik'
import ErrorComponent from './ErrorComponent';
import   {LoginFormLayout,LoginFormLabel,ErrorContent}  from "./Component.Styled"


class TextBox extends Component {
    render() {
        const {label,name,error,...rest}=this.props;
        return (
           
                
                     <LoginFormLayout>
      <LoginFormLabel htmlFor={name}>{label}</LoginFormLabel>
      <Field id={name} name={name} {...rest} />
      {error? <ErrorContent>{error}</ErrorContent> : null }
     
      </LoginFormLayout>
    
            
        )
    }
}

export default TextBox
