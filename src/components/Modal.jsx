// ContactModal.js
import React from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';


const ContactModal = ({ open, handleClose }) => {
  return (
      <Modal open={open} onClose={handleClose}>
        <Box className="fixed inset-0 flex items-center justify-center p-4">
          <Box className="bg-white rounded-lg shadow-lg w-full max-w-md p-8">
            <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
            <p className="mb-4">We’d love to hear from you. Please fill out this form.</p>
            <form noValidate autoComplete="off">
              <TextField
                className="mb-4 w-full"
                fullWidth
                label="First name"
                variant="outlined"
                required
              />
              <TextField
                className="mb-4 w-full"
                fullWidth
                label="Last name"
                variant="outlined"
                required
              />
              <TextField
                className="mb-4 w-full"
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                required
              />
              <div className="mb-4 w-full">
                <TextField
                  fullWidth
                  label="Phone number"
                  variant="outlined"
                  required
                  InputProps={{
                    startAdornment: (
                      <select className="mr-2 p-2 border rounded">
                        <option value="US">US +1</option>
                        <option value="IN">IN +91</option>
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
              />
              <div className="flex items-center mb-4">
                <input type="checkbox" id="privacyPolicy" className="mr-2" />
                <label htmlFor="privacyPolicy">
                  You agree to our friendly <a href="/privacy-policy" className="text-blue-500">privacy policy</a>.
                </label>
              </div>
              <Button
                className="bg-black text-white w-full py-2"
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
