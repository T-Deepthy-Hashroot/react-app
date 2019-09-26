import React from 'react';
import './App.css';
import SingleTextInput from './shared/SingleTextInput';
import { loginAction  } from './action/AuthAction.js'
import { connect } from 'react-redux';


class Login extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
          email: '',
          password: ''
        }
        this.valueChange = this.valueChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      valueChange(key,value){
        this.setState({[key]: value})
      }
      handleSubmit(event){
        event.preventDefault();
        console.log("event",event);
        this.props.login(this.state);
     }
    render(){
        return (
            <form className="col-lg-6 offset-lg-3 p-4">
              <h2>Login</h2>
                <SingleTextInput name="email" value={this.state.email} type="email" placeholder="email" valueChange={this.valueChange} label="Email"/>
                <SingleTextInput name="password" value={this.state.password} type="password" placeholder="password" valueChange={this.valueChange} label="Password"/>
                <input className="btn btn-primary mt-2" type="submit" onClick={this.handleSubmit}  value="Login"></input>
                </form>
           )
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (props) => {
      console.log("props...", props);
      dispatch(loginAction(props))
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  console.log("state from reducer" , state.main)
  return {
    loginState: state.main.authReducer
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
