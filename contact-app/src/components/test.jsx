import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
          <DialogContentText id ="">Employee Name:{selectedContactData.employee_name}</DialogContentText>
            <DialogContentText id ="">Employee Id:{selectedContactData.employee_id}</DialogContentText>
            <DialogContentText id ="">Email:{selectedContactData.email}</DialogContentText>
            <DialogContentText id ="">Phone Number:{selectedContactData.phone}</DialogContentText>
            <DialogContentText id ="">Date Of Birth:{selectedContactData.dob}</DialogContentText>
            <DialogContentText id ="">Address:{selectedContactData.address}</DialogContentText>
            <DialogContentText id ="">Department:{selectedContactData.department}</DialogContentText>
            <DialogContentText id ="">Gender:{selectedContactData.gender}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}