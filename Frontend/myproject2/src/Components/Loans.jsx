import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Loans.css';

function Loans() {
  const [userLoans, setUserLoans] = useState([]);
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [role,setRole]=useState(localStorage.getItem('role'))
  useEffect(() => {
    const dummyLoans = [
      { id: 1, status: 'Submitted', fullName: 'John Doe', amount: 50000, bank: 'ABC Bank', applicationDate: '2024-03-18' },
      { id: 2, status: 'Approved', fullName: 'Jane Smith', amount: 70000, bank: 'XYZ Bank', applicationDate: '2024-03-19' },
    ];

    setUserLoans(dummyLoans);
  }, []);

  const handleViewDetails = (loan) => {
    setSelectedLoan(loan);
    setIsModalOpen(true);
  };

  const handlePay = (loan) => {
   
  };

  return (
    <div className='loans-container'>
      <Sidebar />
      <div className='loans-content'>
        <h2>Submitted Loan Applications</h2>
        <table className='application-table'>
          <thead>
            <tr>
              <th>Application ID</th>
              <th>Status</th>
              <th>Full Name</th>
              <th>Amount</th>
              <th>Bank</th>
              <th>Application Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userLoans.map(application => (
              <tr key={application.id}>
                <td>{application.id}</td>
                <td>{application.status}</td>
                <td>{application.fullName}</td>
                <td>{application.amount}</td>
                <td>{application.bank}</td>
                <td>{application.applicationDate}</td>
                <td>
                  <button onClick={() => handleViewDetails(application)} className='view-button'>{role==='admin'?<>Approve</>:<>View</>}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {role==='admin'?<></>:<>
        <div className='button-container'>
          <Link to="/loanExplorer" className='new-application-button'>New Application</Link>
          <a href="https://www.onlineservices.nsdl.com/paam/endUserRegisterContact.html" target='_blank' rel="noopener noreferrer" className='loan-requirements-button'>Apply For new PAN</a>
        </div>
        </>}
        </div>
    </div>
  );
}

export default Loans;