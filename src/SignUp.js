/* eslint-disable react/jsx-no-undef */
import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import SingleTextInput from './shared/SingleTextInput';


class SignUp extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          firstName: '',
          lastName: '',
          password: '',
          passwordConfirmation: ''
        }
        this.valueChange = this.valueChange.bind(this);
      }
      valueChange(key,value){
        this.setState({[key]: value})
      }
    render(){
        return (
                <form className="col-lg-6 offset-lg-3 p-4">  
                <h2>SignUp</h2>          
                <SingleTextInput name="email" value={this.state.email} type="email" placeholder="email" valueChange={this.valueChange} label="Email" />
                <SingleTextInput name="firstName" value={this.state.firstName} type="text" placeholder="First Name" valueChange={this.valueChange} label="First Name" />
                <SingleTextInput name="lastName" value={this.state.lastName} type="text" placeholder="Last Name" valueChange={this.valueChange} label="Last Name" />
                <SingleTextInput name="password" value={this.state.password} type="password" placeholder="Password" valueChange={this.valueChange} label="Password" />
                <SingleTextInput name="passwordConfirmation" value={this.state.passwordConfirmation} type="password" placeholder="Password Confirmation" valueChange={this.valueChange} label="Password Confirmation" />
                <input className="btn btn-primary mt-2" type="submit" value="Sign Up"></input>
                <Link to="login" className="ml-2 mt-2">Login</Link>   
                </form>
           
            
           )
    }

}

export default SignUp;
