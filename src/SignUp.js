import React from 'react';
import './App.css';
import { Link } from "react-router-dom";
import SingleTextInput from './shared/SingleTextInput';
import { connect } from 'react-redux';
import { signupAction  } from './action/AuthAction.js'


class SignUp extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          name: '',
          username: '',
          password: '',
          passwordconfirmation: ''
        }
        this.valueChange = this.valueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      valueChange(key,value){
        this.setState({[key]: value})
      }
      handleSubmit(event){
         event.preventDefault();
         this.props.signUp(this.state);
      }
    render(){
        return (
                <form className="col-lg-6 offset-lg-3 p-4">  
                  <h2>SignUp</h2>          
                  <SingleTextInput name="email" value={this.state.email} type="email" placeholder="email" valueChange={this.valueChange} label="Email" />
                  <SingleTextInput name="name" value={this.state.firstName} type="text" placeholder="Name" valueChange={this.valueChange} label="Name" />
                  <SingleTextInput name="username" value={this.state.lastName} type="text" placeholder="User Name" valueChange={this.valueChange} label="User Name" />
                  <SingleTextInput name="password" value={this.state.password} type="password" placeholder="Password" valueChange={this.valueChange} label="Password" />
                  <SingleTextInput name="passwordconfirmation" value={this.state.passwordConfirmation} type="password" placeholder="Password Confirmation" valueChange={this.valueChange} label="Password Confirmation" />
                  <button className="btn btn-primary mt-2" type="submit" onClick={this.handleSubmit}>Sign Up</button>
                  <Link to="login" className="ml-2 mt-2">Login</Link>   
                </form>
           )
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUp: (props) => {
      dispatch(signupAction(props))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("state from reducer" , state.main)
  return {
    signUpState: state.main.authReducer
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);