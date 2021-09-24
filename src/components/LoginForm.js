import React, { Component } from 'react'
import {Formik,Form} from "formik";
import * as Yup from 'yup';
import FormLayout from './FormLayout';
import axios from 'axios'
class LoginForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       token:''
    }
  }
  
  handleRegister = () =>{
    this.props.history.push('/register')
  }
    render() {
      const initialValues= {
  
        email:'',
        password:'',
        
    }
    const onSubmit= values =>{
        //console.log("values",values)
        (async () => {
      
          try {
            const response = await axios({
              url: `https://reqres.in/api/login`, 
              method: 'POST',
              data: {email:values.email,password:values.password}
            });
            
            const { token } = response.data;
            console.log(token)
            this.props.history.push('/welcome')
          } catch (error) {
            console.error(error); 
            this.props.history.push('/error')
          }
          
        })();
    }
        return (
            <>
             <Formik initialValues={initialValues}        
        validate={values => {
                      const errors = {};
                      if (!values.email || !values.password) {
                        errors.required = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                       ) {
                         errors.email = 'Invalid email address';
                      }
                      return errors;
                    }} 
            onSubmit={onSubmit}>
            {formik => {
                return <Form>
                    <FormLayout
                    control="input"
                    type="email"
                    label="Username"
                    name="email"
                    />
                       <FormLayout
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    />
                
                    <button type='submit'>Submit</button>
                </Form>
            }}
            </Formik>
          <button onClick={this.handleRegister}>Register Here</button>
            </>
        )
    }
}

export default LoginForm
