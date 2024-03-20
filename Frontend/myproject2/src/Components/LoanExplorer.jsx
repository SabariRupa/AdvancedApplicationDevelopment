import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import './LoanExplorer.css';

const LoanExplorer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dummyBanks = [
    {
      id: 1,
      name: 'ABC Bank',
      schemes: [
        { id: 1, schemeName: 'Scheme 1', interestRate: '10%', maximumLoanAmount: '$100,000', description: 'Lorem ipsum', eligibilityCriteria: 'Lorem ipsum' },
        { id: 2, schemeName: 'Scheme 2', interestRate: '8%', maximumLoanAmount: '$150,000', description: 'Lorem ipsum', eligibilityCriteria: 'Lorem ipsum' }
      ]
    },
    {
      id: 2,
      name: 'XYZ Bank',
      schemes: [
        { id: 3, schemeName: 'Scheme 3', interestRate: '9%', maximumLoanAmount: '$120,000', description: 'Lorem ipsum', eligibilityCriteria: 'Lorem ipsum' },
        { id: 4, schemeName: 'Scheme 4', interestRate: '7%', maximumLoanAmount: '$200,000', description: 'Lorem ipsum', eligibilityCriteria: 'Lorem ipsum' }
      ]
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className="loan-list" style={{ display: 'flex', marginTop: '5px' }}>
      <Sidebar />
      <div className="loan-explorer-container" style={{ flex: 1, padding: '20px' ,marginTop:'80px'}}>
        <h1 style={{fontSize:'30px'}}>Loan Explorer</h1>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Bank</TableCell>
                <TableCell>Scheme Name</TableCell>
                <TableCell>Interest Rate</TableCell>
                <TableCell>Maximum Loan Amount</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Eligibility Criteria</TableCell>
                <TableCell>Apply Now</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dummyBanks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((bank) => (
                bank.schemes.map((scheme) => (
                  <TableRow key={scheme.id}>
                    <TableCell>{bank.name}</TableCell>
                    <TableCell>{scheme.schemeName}</TableCell>
                    <TableCell>{scheme.interestRate}</TableCell>
                    <TableCell>{scheme.maximumLoanAmount}</TableCell>
                    <TableCell>{scheme.description}</TableCell>
                    <TableCell>{scheme.eligibilityCriteria}</TableCell>
                    <TableCell>
                      <Link to='/newloanapp'>Apply Now</Link>
                    </TableCell>
                  </TableRow>
                ))
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
          component="div"
          count={dummyBanks.length * rowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default LoanExplorer;