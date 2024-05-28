import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Stack, IconButton, Snackbar, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { collection, addDoc,updateDoc } from 'firebase/firestore';
import { database } from './firebase'; // Adjust the import path as needed

const ContactModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
    privacyPolicy: false,
    countryCode: 'IN +91',
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fullPhoneNumber = `${formData.countryCode} ${formData.phoneNumber}`;

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.message) {
      setSnackbar({
        open: true,
        message: 'All fields are required!',
        severity: 'error',
      });
      return;
    }
    if (formData.phoneNumber.length !== 10) {
      setSnackbar({
        open: true,
        message: 'Phone number should be of 10 digits!',
        severity: 'error',
      });
      return;
    }
    if (!formData.privacyPolicy) {
      setSnackbar({
        open: true,
        message: 'Please agree to our privacy policy!',
        severity: 'error',
      });
      return;
    }

    const data = {
      fname: formData.firstName,
      lname: formData.lastName,
      email: formData.email,
      phoneNo: fullPhoneNumber,
      message: formData.message,
    };

    try {
      // Save data to Firebase
      const contactRef = await addDoc(collection(database, 'contact'), data);
        
        // Add the document ID to the blog data
      await updateDoc(contactRef, { id: contactRef.id });
      // Clear form and close modal
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        message: '',
        privacyPolicy: false,
        countryCode: 'IN +91',
      });
      handleClose();

      // Show success snackbar
      setSnackbar({
        open: true,
        message: 'Message sent successfully!',
        severity: 'success',
      });
    } catch (error) {
      console.error('Error:', error);

      // Show error snackbar
      setSnackbar({
        open: true,
        message: 'Failed to send message. Please try again.',
        severity: 'error',
      });
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
          <Box className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
            <IconButton
              className="absolute top-4 right-4"
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
            <h2 className="text-sm font-semibold mb-2 text-center gradient">Contact Us</h2>
            <h2 className="text-2xl font-semibold mb-4 text-center">Get in touch</h2>
            <p className="mb-6">We’d love to hear from you. Please fill out this form.</p>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Stack className="flex gap-4 flex-row">
                <TextField
                  className="mb-4 w-[50%]"
                  fullWidth
                  label="First name"
                  variant="outlined"
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  className="mb-4 w-[50%]"
                  fullWidth
                  label="Last name"
                  variant="outlined"
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Stack>
              <TextField
                className="mb-4 w-full"
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="mb-4 w-full">
                <TextField
                  fullWidth
                  label="Phone number"
                  variant="outlined"
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <select
                        className="mr-2 p-2 border rounded"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                      >
                        <option value="US +1">US +1</option>
                        <option value="IN +91">IN +91</option>
                        {/* Add more country codes as needed */}
                      </select>
                    ),
                  }}
                />
              </div>
              <TextField
                className="mb-4 w-full"
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  className="mr-2"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                />
                <label htmlFor="privacyPolicy" className="font-semibold">
                  You agree to our friendly <a href="/privacy-policy" className="text-[#344054]">privacy policy</a>.
                </label>
              </div>
              <Button
                className="bg-black text-white w-full py-2 mt-2 hover:bg-black"
                sx={{ textTransform: "none" }}
                fullWidth
                variant="contained"
                type="submit"
              >
                Send message
              </Button>
            </form>
          </Box>
        </Box>
      </Modal>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactModal;
