import { Link } from "react-router-dom";
import React from 'react';
class SignUpConfirmation extends React.Component { 
    constructor(props){
        super(props);
        alert(this.props);
        this.changeInTextField = this.changeInTextField.bind(this);
        
    }
    changeInTextField(event){
         this.props.valueChange(event.target.name , event.target.value)
    }
    render() { 
        console.log("signupconfirmation",this.props);
        console.log("params confirmationtoken", this.props.match.params.confirmationtoken);
        return ( 
                <div>
                    <p>Account activated!</p>
                    <Link to="login" className="ml-2 mt-2">Login</Link>   
                </div>   
  
        )
    }
}



export default SignUpConfirmation;