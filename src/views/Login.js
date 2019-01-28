import React, { Component } from 'react';
import LoginForm from '../components/Forms/LoginForm'

class Login extends Component{
    
  
 
    
    render(){
        
        return (
            <div className="container" id="loginContainer">
                <LoginForm />
            </div>
        )
    }
}

export default Login;