import React from 'react'
import "./SignIn.css";

function SignIn() {
    return (
        <div className="container">
            <form className="form">
                <div className="title">
                    <span>Task</span><span className="span-white">Manager</span>
                </div>

                <div className="input-group">
                    <span className="input-group-text group1"><i class="fab fa-google"></i></span>
                    <input 
                        type="button" 
                        className="form-control" 
                        value="Google"
                        // onClick={() => handleClick(googleProvider)} 
                        />
                </div>

                <div className="input-group">
                    <span className="input-group-text group1"><i class="fab fa-facebook"></i></span>
                    <input 
                        type="button" 
                        className="form-control" 
                        value="Facebook" />
                </div>

                <div className="input-group group2">
                <span className="input-group-text">Your Email</span>
                    <input 
                        type="text" 
                        name="inputEmail" 
                        className="form-control"
                        placeholder="Pleace insert your email adress" 
                        />    
                </div>

                <div className="input-group group2">
                    <span className="input-group-text">Password</span>
                    <input 
                        type="text" 
                        name="inputEmail" 
                        className="form-control btn--outline bt-large"
                        placeholder="Pleace insert your password adress" 
                        />
                </div>

                <div className="input-group center">
                    <button className="btn btn--primary">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignIn
