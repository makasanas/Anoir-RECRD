import React from "react";
import "./../styles/index.scss";

const ThankYou = () => {
    return (
      <div className="form-content">
          <h2>Thank you for signing up!</h2>
          <p>We’ll keep you posted when we launch mid 2021</p>
          <div className="form">
                    
           <h2 className="waitlist-detail">You are 58,982 on the waitlist</h2>
           <h4 className="desc">Get bumped up on the list with an invite from an existing beta user</h4>
            <div className="button">
                <button className="btn">Ok</button>
            </div>
          </div>
      </div>
    );
  }
  
  export default ThankYou;