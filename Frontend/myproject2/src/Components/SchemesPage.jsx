import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, FormControl, InputLabel, Select, MenuItem, TableSortLabel } from '@mui/material';
import Sidebar from './Sidebar';

const SchemesPage = () => {
  const [schemes, setSchemes] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [orderBy, setOrderBy] = useState('schemeName');
  const [order, setOrder] = useState('asc');
  const [openAddSchemeDialog, setOpenAddSchemeDialog] = useState(false);
  const [newSchemeData, setNewSchemeData] = useState({
    bankid: '',
    schemeName: '',
    interestRate: '',
    maximumLoanAmount: '',
    description: '',
    eligibilityCriteria: ''
  });

  const dummySchemes = [
    { id: 1, bankid: 1, schemeName: 'Scheme 1', interestRate: '5%', maximumLoanAmount: '100000', description: 'Description 1', eligibilityCriteria: 'Criteria 1', bankName: 'Bank A' },
    { id: 2, bankid: 1, schemeName: 'Scheme 2', interestRate: '6%', maximumLoanAmount: '150000', description: 'Description 2', eligibilityCriteria: 'Criteria 2', bankName: 'Bank A' },
    { id: 3, bankid: 2, schemeName: 'Scheme 3', interestRate: '4%', maximumLoanAmount: '120000', description: 'Description 3', eligibilityCriteria: 'Criteria 3', bankName: 'Bank B' },
    { id: 4, bankid: 2, schemeName: 'Scheme 4', interestRate: '5.5%', maximumLoanAmount: '200000', description: 'Description 4', eligibilityCriteria: 'Criteria 4', bankName: 'Bank B' },
    { id: 5, bankid: 3, schemeName: 'Scheme 5', interestRate: '7%', maximumLoanAmount: '180000', description: 'Description 5', eligibilityCriteria: 'Criteria 5', bankName: 'Bank C' },
  ];

  const fetchSchemes = () => {
    setSchemes(dummySchemes);
  };

  useEffect(() => {
    fetchSchemes();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc');
  };

  const handleDeleteScheme = async (schemeId) => {
    if (window.confirm("Are you sure to delete the scheme?")) {
      const updatedSchemes = schemes.filter(scheme => scheme.id !== schemeId);
      setSchemes(updatedSchemes);
    }
  };

  const handleAddScheme = async () => {
    setOpenAddSchemeDialog(false);
    setNewSchemeData({
      bankid: '',
      schemeName: '',
      interestRate: '',
      maximumLoanAmount: '',
      description: '',
      eligibilityCriteria: ''
    });
    const schemesData = [...schemes, newSchemeData];
    setSchemes(schemesData);
  };

  const handleOpenAddSchemeDialog = () => {
    setOpenAddSchemeDialog(true);
  };

  const handleCloseAddSchemeDialog = () => {
    setOpenAddSchemeDialog(false);
  };

  const handleNewSchemeDataChange = (event) => {
    const { name, value } = event.target;
    setNewSchemeData({
      ...newSchemeData,
      [name]: value
    });
  };

  return (
    <div className='users-div'>
      <Sidebar />
      <div className='users-content' style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>
        <Container maxWidth="lg" style={{ marginTop: '14px' , minWidth:'84%',marginLeft:'220px',}}>
          <Grid container spacing={3} style={{display:'flex',width:'100%'}}>
            <Grid item xs={12} style={{ marginBottom: '0px',display:'flex',justifyContent:'space-between' }}>
          <Typography variant="h4" style={{ marginTop:'85px',fontSize:'xx-large',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} gutterBottom>
            SCHEMES LIST
          </Typography>
              <Button  style={{maxHeight:'40px',marginTop:'85px',fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif'}} variant="outlined" color="primary" onClick={handleOpenAddSchemeDialog}>
                Add Scheme
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} style={{ padding: '20px', minHeight: '300px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <TableSortLabel
                          active={orderBy === 'schemeName'}
                          direction={orderBy === 'schemeName' ? order : 'asc'}
                          onClick={handleSort('schemeName')}
                          style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
                        >
                          Scheme Name
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
                          active={orderBy === 'interestRate'}
                          direction={orderBy === 'interestRate' ? order : 'asc'}
                          onClick={handleSort('interestRate')}
                        >
                          Interest Rate
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
                          active={orderBy === 'description'}
                          direction={orderBy === 'description' ? order : 'asc'}
                          onClick={handleSort('description')}
                        >
                          Description
                        </TableSortLabel>
                      </TableCell>
                      <TableCell>
                        <TableSortLabel style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
                          active={orderBy === 'maximumLoanAmount'}
                          direction={orderBy === 'maximumLoanAmount' ? order : 'asc'}
                          onClick={handleSort('maximumLoanAmount')}
                        >
                          Maximum Loan Amount
                        </TableSortLabel>
                      </TableCell>
                      <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>Bank</TableCell>
                      <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {(rowsPerPage > 0
                      ? schemes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                      : schemes
                    ).map(scheme => (
                      <TableRow key={scheme.id}>
                        <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>{scheme.schemeName}</TableCell>
                        <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>{scheme.interestRate}</TableCell>
                        <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>{scheme.description}</TableCell>
                        <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>{scheme.maximumLoanAmount}</TableCell>
                        <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>{scheme.bankName}</TableCell>
                        <TableCell style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>
                          <Button style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} color="error" onClick={() => handleDeleteScheme(scheme.id)}>Delete</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
                  count={schemes.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Dialog open={openAddSchemeDialog} onClose={handleCloseAddSchemeDialog}>
        <DialogTitle style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>Add Scheme</DialogTitle>
        <DialogContent style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>
          <TextField
            style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
            margin="dense"
            id="schemeName"
            name="schemeName"
            label="Scheme Name"
            fullWidth
            value={newSchemeData.schemeName}
            onChange={handleNewSchemeDataChange}
          />
          <TextField
            style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
            margin="dense"
            id="interestRate"
            name="interestRate"
            label="Interest Rate"
            fullWidth
            value={newSchemeData.interestRate}
            onChange={handleNewSchemeDataChange}
          />
          <TextField
            style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
            margin="dense"
            id="maximumLoanAmount"
            name="maximumLoanAmount"
            label="Maximum Loan Amount"
            fullWidth
            value={newSchemeData.maximumLoanAmount}
            onChange={handleNewSchemeDataChange}
          />
          <TextField
            style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
            margin="dense"
            id="description"
            name="description"
            label="Description"
            fullWidth
            value={newSchemeData.description}
            onChange={handleNewSchemeDataChange}
          />
          <TextField
            style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
            margin="dense"
            id="eligibilityCriteria"
            name="eligibilityCriteria"
            label="Eligibility Criteria"
            fullWidth
            value={newSchemeData.eligibilityCriteria}
            onChange={handleNewSchemeDataChange}
          />
          <FormControl style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} fullWidth>
            <InputLabel id="bankid-label">Bank</InputLabel>
            <Select
              style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}
              labelId="bankid-label"
              id="bankid"
              name="bankid"
              value={newSchemeData.bankid}
              onChange={handleNewSchemeDataChange}
              fullWidth
            >
              {schemes.map(scheme => (
                <MenuItem key={scheme.id} value={scheme.bankid} style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }}>
                  {scheme.bankName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} onClick={handleCloseAddSchemeDialog}>Cancel</Button>
          <Button style={{ fontFamily: 'Gill Sans, Gill Sans MT, Calibri, Trebuchet MS, sans-serif' }} onClick={handleAddScheme} color="primary">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SchemesPage;