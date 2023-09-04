import { Component } from "react";
import "./error-message.css"

class ErrorMessage extends Component{
    render(){
        const{isErrorMessage, message} = this.props;
        return(isErrorMessage ? <p className="errorMessage">{message}</p>: <p className="infoMessage">{message}</p>)
    }
}

export default ErrorMessage;