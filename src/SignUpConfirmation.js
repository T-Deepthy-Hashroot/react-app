import { Link } from "react-router-dom";
import React from 'react';
import axios from 'axios'
class SignUpConfirmation extends React.Component { 
    constructor(props){
        super(props);
        axios.post('http://localhost:3001/users/confirm_signup', {
          confirmation_token: this.props.match.params.confirmationtoken
         })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    }
    render() { 
        return ( 
                <div>
                    <p>Account activated!</p>
                </div>   
  
        )
    }
}
export default SignUpConfirmation;