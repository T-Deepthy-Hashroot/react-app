import React from 'react';
class SignUpConfirmation extends React.Component { 
    constructor(props){
        super(props);
        this.changeInTextField = this.changeInTextField.bind(this);
        
    }
    changeInTextField(event){
         this.props.valueChange(event.target.name , event.target.value)
    }
    render() { 
        return ( 
                <div>
                    <label>{this.props.label}</label>
                  <input name={this.props.name} type={this.props.type} className="form-control col-md-9" value={this.props.value} placeholder={this.props.placeholder}
                   onChange={this.changeInTextField} /> 
                </div>   
  
        )
    }
}
export default SignUpConfirmation;