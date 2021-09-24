import React, { Component } from 'react'
import {Formik,Form} from "formik";
import FormLayout from './FormLayout';
import axios from "axios"
class RegisterForm extends Component {
    
    render() {
        const initialValues= {
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
        const onSubmit= values =>{
            (async () => {
      
                try {
                  const response = await axios({
                    url: `https://reqres.in/api/register`, 
                    method: 'POST',
                    data: {email:values.email,password:values.password}
                  });
                  
                  const { token } = response.data;
                  console.log(token)
                  this.props.history.push('/login')
                } catch (error) {
                  console.error(error); 
                  this.props.history.push('/error');
                }
                
              })();
        }
        return (
            <>
        <Formik initialValues={initialValues}        
        validate={values => {
                      const errors = {};
                      if (!values.email || !values.firstName || !values.lastName || !values.password || !values.confirmPassword) {
                        errors.required = 'Required';
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                       ) {
                         errors.email = 'Invalid email address';
                      }
                      else if(values.confirmPassword !== values.password)
                      {
                          errors.password='password not matching'
                      }
                      return errors;
                    }} onSubmit={onSubmit}>
            {formik => {
                return <Form>
                       <FormLayout
                    control="input"
                    type="firstName"
                    label="First Name"
                    name="firstName"
                    />
                       <FormLayout
                    control="input"
                    type="lastName"
                    label="Last Name"
                    name="lastName"
                    />
                    <FormLayout
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    />
                       <FormLayout
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    />
                       <FormLayout
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    />
                    <button type='submit' disabled={!formik.isValid}>Submit</button>
                </Form>
            }}
            </Formik>
         </>
        )
    }
}

export default RegisterForm
