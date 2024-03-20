import React, { useState } from 'react';
import { Typography, Container, Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Sidebar from './Sidebar';
import './AdminDash.css';

const AdminDash = () => {
  const [dashboardData] = useState({
    users: [
      { id: 1, name: 'Admin One', email: 'admin1@example.com', role: 'admin' },
      { id: 2, name: 'Admin Two', email: 'admin2@example.com', role: 'admin' },
      { id: 3, name: 'Bank Admin One', email: 'bankadmin1@example.com', role: 'bank' },
      { id: 4, name: 'Bank Admin Two', email: 'bankadmin2@example.com', role: 'bank' },
    ],
    loans: [
      { id: 1, type: 'Crop Loan', sanctioned: 10000, repaid: 5000 },
      { id: 2, type: 'Equipment Loan', sanctioned: 8000, repaid: 6000 },
      { id: 3, type: 'Land Loan', sanctioned: 12000, repaid: 8000 },
    ],
    schemes: [
      { id: 1, name: 'Scheme One', description: 'Description of Scheme One' },
      { id: 2, name: 'Scheme Two', description: 'Description of Scheme Two' },
    ],
    banks: [
      { id: 1, name: 'Bank A', totalLoan: 5000 },
      { id: 2, name: 'Bank B', totalLoan: 8000 },
      { id: 3, name: 'Bank C', totalLoan: 12000 },
    ],
  });

  const adminUsers = dashboardData.users.filter(user => user.role === 'admin');
  const bankUsers = dashboardData.users.filter(user => user.role === 'bank');

  return (
    <div className='admin-dash'>
      <Sidebar />
      <div className='admin-dash-content'>
      <Container maxWidth="lg" style={{ marginTop: '0px',marginLeft:'250px', fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>
      <Typography variant="h5" style={{ marginBottom: '20px',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} className='admin-heading' gutterBottom>
          Welcome to Admin Dashboard 👋
        </Typography>
        <Grid container style={{marginTop:'84px'}} spacing={3} >
        <Grid item xs={12} md={6}>
              <Paper elevation={3} className="dashboard-item">
                <Typography variant="h6" className="dashboard-item-title" gutterBottom>
                  Total Users
                </Typography>
                <Typography className="dashboard-item-value" variant="h4" gutterBottom>
                  {dashboardData.users.length}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="dashboard-item">
                <Typography className="dashboard-item-title" variant="h6" gutterBottom>
                  Total Loans
                </Typography>
                <Typography className="dashboard-item-value" variant="h4" gutterBottom>
                  {dashboardData.loans.length}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="dashboard-item">
                <Typography className="dashboard-item-title" variant="h6" gutterBottom>
                  Total Schemes
                </Typography>
                <Typography className="dashboard-item-value" variant="h4" gutterBottom>
                  {dashboardData.schemes.length}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="dashboard-item">
                <Typography className="dashboard-item-title" variant="h6" gutterBottom>
                  Total Banks
                </Typography>
                <Typography className="dashboard-item-value" variant="h4" gutterBottom>
                  {dashboardData.banks.length}
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="dashboard-item">
                <Typography className="dashboard-item-title" variant="h6" gutterBottom>
                  Admin Users
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {adminUsers.map(user => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} className="dashboard-item">
                <Typography className="dashboard-item-title" variant="h6" gutterBottom>
                  Bank Users
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {bankUsers.map(user => (
                      <TableRow key={user.id}>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default AdminDash;