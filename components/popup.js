import React from "react";
import close from "../static/close-icon.svg"
import "./../styles/index.scss";

const TermsConditions = () => {
    return (
      <div className="popup-wrapper">
      <div className="popup-content">
          <h2>Terms & Conditions</h2>
          <div className="closePopup">
            <img src={close} alt="close icon" />
          </div>
          <div className="detail">
            <h4>1.   Agreement to Terms</h4>
            <p>1.1  These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of vuebox, doing business as  Vuebox, located at 160 Kemp House, City Road, , London,  EC1V 2NX United Kingdom we, concerning your access to and use of the Recrd (https://www.recrd.com) website as well as any related applications (the Site).</p>  
            <p>The Site provides the following services: a user generated social video network (Services). You agree that by accessing the Site and/or Services, you have read, understood, and agree to be bound by all of these Terms and Conditions.</p>  
            <p>If you do not agree with all of these Terms and Conditions, then you are prohibited from using the Site and Services and you must discontinue use immediately. We recommend that you print a copy of these Terms and Conditions for future reference.</p>  
            <p>1.2  The supplemental policies set out in Section 1.7 below, as well as any supplemental terms and condition or documents that may be posted on the Site from time to time, are expressly incorporated by reference.</p> 
          </div>
        </div>
      </div>
    );
  }
  
  export default TermsConditions;