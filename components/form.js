import React from "react";
import "./../styles/index.scss";

const Form = () => {
    return (
      <div className="form-content">
          <h2>Sign up for early access.</h2>
          <p>Join the waiting list to participate in the beta launch of recrd.</p>
          <div className="form">
            <div className="flex-col">
                <div className="form-field">
                    <label>Username</label>
                    <input type="text" />
                </div>

                <div className="form-field">
                    <label>Email Address</label>
                    <input type="email" />
                </div>
            </div>
            <div className="form-field password-field">
                <label>Password</label>
                <input type="password" placeholder="Password must be at least 8 characters"/>
            </div>

            <div className="form-field agreement-field">
                <input type="checkbox" id="agreement" value="agreement" />
                <label htmlFor="agreement"> By joing the waitlist means you have accepted our <span className="redirect-link">Terms and Conditions</span> and <span className="redirect-link">Privacy Policy</span>.</label>
            </div>

            <div className="button">
                <button className="btn">Login</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default Form;