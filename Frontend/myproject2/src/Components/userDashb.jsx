import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import { Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './userDashb.css';
import { useNavigate } from 'react-router-dom';
import { PieChart as MUIPieChart } from '@mui/x-charts/PieChart';

function UserDashb() {
  const nav = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const [userLoans, setUserLoans] = useState([]);
  const [user, setUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loansPerPage] = useState(5);

  useEffect(() => {
    const dummyUser = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
    };
    setUser(dummyUser);

   
    const dummyUserLoans = [
      { id: 1, status: 'Paid', loanType: 'Home Loan', amount: 50000 },
      { id: 2, status: 'Pending', loanType: 'Car Loan', amount: 30000 },
      { id: 3, status: 'Paid', loanType: 'Personal Loan', amount: 20000 },
      { id: 4, status: 'Pending', loanType: 'Education Loan', amount: 40000 },
      { id: 5, status: 'Paid', loanType: 'Business Loan', amount: 60000 },
    ];
    setUserLoans(dummyUserLoans);
  }, []);

  const navtoLoan = () => {
    nav('/loan-list');
  };

  const handleViewDetails = (loan) => {
    nav('/loans');
  };

  const indexOfLastLoan = currentPage * loansPerPage;
  const indexOfFirstLoan = indexOfLastLoan - loansPerPage;
  const currentLoans = userLoans.slice(indexOfFirstLoan, indexOfLastLoan);

  const totalAmountBorrowed = userLoans.reduce((acc, loan) => acc + loan.amount, 0);

  const paidLoans = userLoans.filter((loan) => loan.status === 'Paid');
  const remainingLoans = userLoans.filter((loan) => loan.status !== 'Paid');
  const pieChartData = [
    { title: 'Paid', value: paidLoans.length, color: '#4CAF50' },
    { title: 'Remaining', value: remainingLoans.length, color: '#f44336' },
  ];

  return (
    <Grid container style={{marginLeft:'-10px',paddingLeft:'0px',maxWidth:'1400px'}} spacing={2}>
      <Grid item xs={3}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
      
      <Typography variant="h3" style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif',fontSize:'30px',marginTop:'85px'}} className="hello-user">{user ? `Hello ${user.fullName}! 👋` : ''}</Typography>
      <br/><br/>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', minHeight: '150px' }}>
                <Typography variant="h6" style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} gutterBottom>
                  Total Loan Amount
                </Typography>
                <Typography  style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} variant="h4" gutterBottom>
$10000              </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', minHeight: '150px' }}>
                <Typography variant="h6" style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} gutterBottom>
                  No.of Repayment Done
                </Typography>
                <Typography  style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} variant="h4" gutterBottom>
5                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', minHeight: '150px' }}>
                <Typography variant="h6" style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} gutterBottom>
                 Repayment Pending
                </Typography>
                <Typography  style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} variant="h4" gutterBottom>
5                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Paper elevation={3} style={{ padding: '20px',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif', minHeight: '150px' }}>
                <Typography variant="h6" style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} gutterBottom>
                 Current Balance
                </Typography>
                <Typography  style={{fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} variant="h4" gutterBottom>
    $1200        </Typography>
              </Paper>
            </Grid>
            </Grid>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Loan ID</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Loan Type</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentLoans.map((loan) => (
                <TableRow key={loan.id}>
                  <TableCell>{loan.id}</TableCell>
                  <TableCell>{loan.status}</TableCell>
                  <TableCell>{loan.loanType}</TableCell>
                  <TableCell>${loan.amount}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleViewDetails(loan)}>View Details</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <ul className='pagination'>
          {userLoans.length > loansPerPage &&
            [...Array(Math.ceil(userLoans.length / loansPerPage))].map((_, index) => (
              <li key={index} className='page-item'>
                <button onClick={() => setCurrentPage(index + 1)} className='page-link'>
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default UserDashb;
