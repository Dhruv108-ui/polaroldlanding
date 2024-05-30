import React, { useState } from 'react';
import { Modal, Box, TextField, Button, Stack, IconButton, Snackbar, Alert, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { database } from './firebase'; // Adjust the import path as needed

const ContactModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    countryCode: 'IN +91',
    company: '',
    role: '',
    otherRole: '',
    platform: '',
    goal: '',
    // privacyPolicy: false,
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
    const role = formData.role === 'Other' ? formData.otherRole : formData.role;

    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.company || !role || !formData.platform || !formData.goal) {
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
    // if (!formData.privacyPolicy) {
    //   setSnackbar({
    //     open: true,
    //     message: 'Please agree to our privacy policy!',
    //     severity: 'error',
    //   });
    //   return;
    // }

    const data = {
      name: formData.name,
      email: formData.email,
      phoneNo: fullPhoneNumber,
      company: formData.company,
      role: role,
      platform: formData.platform,
      goal: formData.goal,
    };

    try {
      // Save data to Firebase
      const contactRef = await addDoc(collection(database, 'contact'), data);
        
      // Add the document ID to the blog data
      await updateDoc(contactRef, { id: contactRef.id });
      
      // Clear form and close modal
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        countryCode: 'IN +91',
        company: '',
        role: '',
        otherRole: '',
        platform: '',
        goal: '',
        privacyPolicy: false,
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
          <Box className="bg-white rounded-lg shadow-lg w-full max-w-lg p-4 sm:p-8 relative" onClick={(e) => e.stopPropagation()}>
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
              <Stack className='flex-row gap-2'>
                <TextField
                  className="mb-4 w-full"
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <TextField
                  className="mb-4 w-full"
                  fullWidth
                  label="E-mail ID"
                  type="email"
                  variant="outlined"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Stack>
              <Stack className='flex-row gap-2'>
                <div className="mb-4 w-full">
                  <TextField
                    fullWidth
                    label="Phone No"
                    variant="outlined"
                    required
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    InputProps={{
                      startAdornment: (
                        <select
                          className="mr-1 p-1 border rounded"
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
                  label="Company Name"
                  variant="outlined"
                  required
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />
              </Stack>
              <FormControl className="mb-4 w-full">
                <InputLabel>What best describes your role? *</InputLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  label="What best describes your role?"
                  required
                >
                  <MenuItem value="Bank/NBFC">Bank/NBFC</MenuItem>
                  <MenuItem value="Investment advisory">Investment advisory</MenuItem>
                  <MenuItem value="Insurance agent/agency">Insurance agent/agency</MenuItem>
                  <MenuItem value="Loan agent">Loan agent</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </FormControl>
              {formData.role === 'Other' && (
                <TextField
                  className="mb-4 w-full"
                  fullWidth
                  label="Please specify your role"
                  variant="outlined"
                  required
                  name="otherRole"
                  value={formData.otherRole}
                  onChange={handleChange}
                />
              )}
              <FormControl className="mb-4 w-full">
                <InputLabel>Platform preference *</InputLabel>
                <Select
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                  label="Platform preference"
                  required
                >
                  <MenuItem value="Whatsapp">Whatsapp</MenuItem>
                  <MenuItem value="Linkedin">Linkedin</MenuItem>
                  <MenuItem value="Email">Email</MenuItem>
                  <MenuItem value="Twitter">Twitter</MenuItem>
                </Select>
              </FormControl>
              <FormControl className="mb-4 w-full">
                <InputLabel>What&apos;s your ultimate goal? *</InputLabel>
                <Select
                  name="goal"
                  value={formData.goal}
                  onChange={handleChange}
                  label="What's your ultimate goal?"
                  required
                >
                  <MenuItem value="Increased lead conversions">Increased lead conversions</MenuItem>
                  <MenuItem value="Reduced response times">Reduced response times</MenuItem>
                  <MenuItem value="Higher customer satisfaction">Higher customer satisfaction</MenuItem>
                  <MenuItem value="More closed deals">More closed deals</MenuItem>
                </Select>
              </FormControl>
              {/* <div className="flex items-center mb-4">
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
              </div> */}
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

