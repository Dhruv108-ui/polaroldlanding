import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Stack, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Combine country code with phone number
    const fullPhoneNumber = `${formData.countryCode} ${formData.phoneNumber}`;
    
    // Dummy API endpoint
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts';
    
    // Form data to be sent
    const data = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: fullPhoneNumber,
      message: formData.message,
    };

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Success:', result);
      
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
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
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
  );
};

export default ContactModal;
