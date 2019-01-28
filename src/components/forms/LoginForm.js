import React from 'react'

const LoginForm = ({handleSubmit }) =>(
            <form onSubmit={handleSubmit} className= "" >
            <div className="head">Login</div>
            <hr/>
                
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
                      <button type="submit" className="btn btn-success login-button" >Sign Up</button>
                </div>
                
       </form>
)


export default LoginForm;
