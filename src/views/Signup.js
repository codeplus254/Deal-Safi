import React, { Component } from 'react';
import SignupForm from '../components/forms/SignupForm';

class SignUp extends Component{
    render(){
        return (
            <div className="container" id="signupContainer">
                <SignupForm />
            </div>
        )
    }
}

export default SignUp;
