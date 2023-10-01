import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputLabel,
  Typography
} from "@mui/material";
import contacts from '../hooks/contacts';
import InforModalComponent from './InforModalComponent';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function ContactListComponent() {
  const [contactData, setContactData] = useState(contacts)
  const [selectedContactData, setSelectedContactData] = useState({
    "employee_name": "",
    "employee_id": "",
    "email": "",
    "phone": "",
    "dob": "",
    "address": "",
    "department": "",
    "gender": ""
  })

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <h2 className="text-center">Contact List</h2>
      <table>
        <tr>
          <th>
            <InputLabel id="contact-label" sx={{ marginLeft: 1 }}>Contact Name Search</InputLabel>
            <input type="text" id="search-contact" onChange={
              (e) => {
                const value = e.target.value.toLowerCase()
                const filterData = contacts.filter((contact) => {
                  return contact.employee_name.toLowerCase().includes(value)
                })
                setContactData(filterData)
              }

            } /></th>
          <th>
            <div>
              <InputLabel id="gender-label" sx={{ marginLeft: 1 }}>Gender</InputLabel>
              <select onChange={
                (e) => {
                  const value = e.target.value.toLowerCase()
                  const filterData = contacts.filter((contact) => {
                    if (value === "all") return true
                    return contact.gender.toLocaleLowerCase() === value
                  })
                  setContactData(filterData)
                }
              }>
                <option value="all">All</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </th>
        </tr>
      </table>
      <br></br>


      <div className='row'>
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee Name</th>
              <th>Address</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {
              contactData.map(
                contact =>
                  <tr key={contact.id} onClick={() => {
                    setSelectedContactData(contact)
                    handleClickOpen()
                  }}>
                    <td>{contact.employee_id}</td>
                    <td>{contact.employee_name}</td>
                    <td>{contact.address}</td>
                    <td>{contact.phone}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
        {
          selectedContactData.employee_id ? <InforModalComponent>
            <div>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {selectedContactData.employee_name}
                </DialogTitle>
                <DialogContent>
                  <Typography id="name"><span style={{ fontWeight: 'bold' }}>Employee Name:</span> {selectedContactData.employee_name}</Typography>
                  <Typography id="employeeid"><span style={{ fontWeight: 'bold' }}>Employee Id:</span> {selectedContactData.employee_id}</Typography>
                  <Typography id="email"><span style={{ fontWeight: 'bold' }}>Email:</span> {selectedContactData.email}</Typography>
                  <Typography id="phonenumber"><span style={{ fontWeight: 'bold' }}>Phone Number:</span> {selectedContactData.phone}</Typography>
                  <Typography id="dob"><span style={{ fontWeight: 'bold' }}>Date Of Birth:</span> {selectedContactData.dob}</Typography>
                  <Typography id="address"><span style={{ fontWeight: 'bold' }}>Address:</span> {selectedContactData.address}</Typography>
                  <Typography id="department"><span style={{ fontWeight: 'bold' }}>Department:</span> {selectedContactData.department}</Typography>
                  <Typography id="gender"><span style={{ fontWeight: 'bold' }}>Gender: </span>{selectedContactData.gender}</Typography>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </div>
          </InforModalComponent> : null
        }
      </div>
    </div>
  );
}

ContactListComponent.propTypes = {

};

export default ContactListComponent;