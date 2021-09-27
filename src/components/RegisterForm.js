import React, { Component } from 'react'
import {Formik,Form} from "formik";
import FormLayout from './FormLayout';
import axios from "axios"
import {LoginButton,ErrorContent} from "./Component.Styled"
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
                  this.props.history.push('/')
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
                      if (!values.email) {
                        errors.email = 'Required';
                      }
                      else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                       ) {
                         errors.email = 'Invalid email address';
                      }
                       if(!values.firstName){
                        errors.firstName = 'Required';
                      }
                      else if(!/^[a-zA-Z]*$/g.test(values.firstName))
                      {
                        errors.firstName='no numbers or special characters allowed'
                      }
                       if(!values.lastName){
                        errors.lastName = 'Required';
                      }
                      else if(!/^[a-zA-Z]*$/g.test(values.lastName))
                      {
                        errors.lastName='no numbers or special characters allowed'
                      }
                       if(!values.password){
                        errors.password = 'Required';
                      }
                       if(!values.confirmPassword){
                        errors.confirmPassword = 'Required';
                      }
                      else if(values.confirmPassword !== values.password)
                      {
                          errors.confirmPassword='password not matching'
                      }
                      return errors;
                    }} onSubmit={onSubmit}>
            {formik => {
               console.log(formik.errors)
                return <Form>
                       <FormLayout
                    control="input"
                    type="firstName"
                    label="First Name"
                    name="firstName"
                    error={formik.errors.firstName ? formik.errors.firstName : null}
                    />
                       <FormLayout
                    control="input"
                    type="lastName"
                    label="Last Name"
                    name="lastName"
                    error={formik.errors.lastName ? formik.errors.lastName : null}
                    />
                    <FormLayout
                    control="input"
                    type="email"
                    label="Email"
                    name="email"
                    error={formik.errors.email ? formik.errors.email : null}
                    />
                       <FormLayout
                    control="input"
                    type="password"
                    label="Password"
                    name="password"
                    error={formik.errors.password ? formik.errors.password : null}
                    />
                       <FormLayout
                    control="input"
                    type="password"
                    label="Confirm Password"
                    name="confirmPassword"
                    error={formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                    />
                    <LoginButton type='submit' disabled={!formik.isValid}>Submit</LoginButton>
                </Form>
            }}
            </Formik>
         </>
        )
    }
}

export default RegisterForm
