import React from 'react'

const SignupForm = ({handleSubmit }) =>(
            <form onSubmit={handleSubmit} className= "" >
            <div className="head">Signup</div>
            <hr/>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter username"
                        className="form-control"
                        required
                        />
                        
                </div>
                 <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        className="form-control"
                        required
                        />
                        
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        className="form-control"
                        required
                        />
                    
                </div>
                    <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                        type="password"
                        name="cpassword"
                        placeholder="Confirm password"
                        className="form-control"
                        required
                        />
                </div>
                <div className="form-group">
                      <button type="submit" className="btn btn-success login-button" >Sign Up</button>
                </div>
                
       </form>
)


export default SignupForm;
