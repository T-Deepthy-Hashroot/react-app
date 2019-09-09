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
                <form>            
                <SingleTextInput name="email" value={this.state.email} type="email" placeholder="email" valueChange={this.valueChange} />
                <SingleTextInput name="firstName" value={this.state.firstName} type="text" placeholder="First Name" valueChange={this.valueChange}/>
                <SingleTextInput name="lastName" value={this.state.lastName} type="text" placeholder="Last Name" valueChange={this.valueChange}/>
                <SingleTextInput name="password" value={this.state.password} type="password" placeholder="Password" valueChange={this.valueChange}/>
                <SingleTextInput name="passwordConfirmation" value={this.state.passwordConfirmation} type="password" placeholder="Password Confirmation" valueChange={this.valueChange}/>
                <input className="btn btn-primary" type="submit" value="Register"></input>
                <Link to="Login">Login</Link>   
                </form>
           
            
           )
    }

}

export default SignUp;
