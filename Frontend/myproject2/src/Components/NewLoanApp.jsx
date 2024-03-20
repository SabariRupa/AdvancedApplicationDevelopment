// LoanApplicationForm.jsx

import React from 'react';
import './NewLoanApp.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const NewLoanApp = () => {
    return (
      <div classname='sideapp'>
      <Sidebar/>
      <br/>
      <h2 id="naf">New Application Form</h2>
      <div className="loan-form-container">
      <div className="section personal-info">
          <h2>Personal Information </h2>
          <div className="sub-section">
              <div className="personal-field">
                  <input type="text" placeholder="Name" />
              </div>
              <div className="personal-field">
                  <input type="email" placeholder="Email" />
              </div>
              <div className="personal-field">
                  <input type="tel" placeholder="Phone Number" />
              </div>
              <div className="personal-field">
                  <input type="text" placeholder="Address" />
              </div>
              <div className="personal-field">
                  <input type="date" placeholder="Date of Birth" />
              </div>
              <div className="personal-field">
                  <input type="number" placeholder="Age" />
              </div>
              <div className="personal-field">
                  <select>
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                  </select>
              </div>
          </div>
      </div>

      <div className="section documents">
          <h2>Documents :</h2>
          <div className="sub-section">
              <input type="text" placeholder="Aadhaar Number" />
              <input type="text" placeholder="PAN Number" />
              <input type="text" placeholder="Additional Documents" />
          </div>
      </div>

      <div className="section loan-details">
          <h2>Loan Details :</h2>
          <br/><br/>
          <div className="sub-section">
              <input type="number" placeholder="Loan Amount" />
              <input type="text" placeholder="Loan Type" />
              <input type="text" placeholder="Loan Duration" />
          </div>
      </div>

      <div className="section bank-details">
          <h2>Bank Details :</h2>
          <div className="sub-section">
              <input type="text" placeholder="Branch Name" />
              <input type="text" placeholder="Account Number" />
              <input type="text" placeholder="IFSC Code" />
          </div>
      </div>

      <div className="section other-info">
          <h2>Other Information :</h2>
          <div className="sub-section">
              <input type="text" placeholder="Father or Husband Name" />
              <input type="text" placeholder="Category" />
              <input type="number" placeholder="Present Income" />
          </div>
      </div>
      <div className="section declaration">
      <h2>Declaration</h2>
      <div className="declaration-checkbox">
          <input type="checkbox" id="declaration-checkbox-1" />
          <label htmlFor="declaration-checkbox-1">
              I hereby declare that the information provided above is true and accurate to the best of my knowledge.
          </label>
      </div>
      <div className="declaration-checkbox">
          <input type="checkbox" id="declaration-checkbox-2" />
          <label htmlFor="declaration-checkbox-2">
              I understand that any false information provided may result in the rejection of my loan application.
          </label>
      </div>
      <div className="declaration-checkbox">
          <input type="checkbox" id="declaration-checkbox-3" />
          <label htmlFor="declaration-checkbox-3">
              I agree to abide by the terms and conditions of the loan agreement.
          </label>
      </div>
  </div>
  

  <div className="section terms">
  <h2>Terms and Conditions</h2>
  <div className="terms-checkbox">
      <input type="checkbox" id="terms-checkbox" />
      <label htmlFor="terms-checkbox">
          I agree to the terms and conditions
      </label>
  </div>
 
</div>



     <Link to='/documents'> <button className="submit-btn">Submit Application</button></Link>
  </div>
        </div>
    );
};

export default NewLoanApp;
