import React from 'react';
class SingleTextInput extends React.Component { 
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
                    <label>{this.props.name}</label>
                  <input name={this.props.name} type={this.props.type} className="form-control col-lg-2 col-md-2" value={this.props.value} placeholder={this.props.placeholder}
                   onChange={this.changeInTextField} /> 
                </div>   
  
        )
    }
}
export default SingleTextInput;