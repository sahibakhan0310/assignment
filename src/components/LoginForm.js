import React, { Component } from 'react'
import {Formik,Form} from "formik";
import FormLayout from './FormLayout';
import axios from 'axios'
import { setLoading,loginUserUnsuccessful,loginUser } from '../actions/Loading.action';
import {connect} from 'react-redux'
import Loader from './Loader';
import Welcome from './Welcome';
import ErrorPage from './ErrorPage';

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
        //this.setState({loading:true})
        //this.props.setLoading(true)
        (async () => {
      
          try {
            this.props.setLoading(true)
            const response = await axios({
              url: `https://reqres.in/api/login`, 
              method: 'POST',
              data: {email:values.email,password:values.password}
            });
            //this.props.setLoading(true)
            this.props.loginUser(response.data)
            //this.props.history.push('/welcome')
          } catch (error) {
            //this.props.setLoading(true)
            
            console.error(error); 
            this.props.loginUserUnsuccessful(error)
            this.props.history.push('/error')
          }
          
        })();
    }
    const {loading,isLoggedIn,isError}=this.props;
        return (
            <>
 {loading && <Loader /> }
 {isLoggedIn && <Welcome />}
 {isError && <ErrorPage />}
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
const mapStateToProps= (state) => {
  return {
    showLoading:state.showLoading,
    isLoggedIn:state.isLoggedIn,
    isError:state.isError
  }
}
const mapDispatchToProps = dispatch =>{
return {
  setLoading: (data) => dispatch(setLoading(data)),
  loginUser: (data) => dispatch(loginUser(data)),
  loginUserUnsuccessful : (data) => dispatch(loginUserUnsuccessful (data))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
