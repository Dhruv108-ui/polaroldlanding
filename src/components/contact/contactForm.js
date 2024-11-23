import React, { useState } from "react";

import { Button, Box, TextField, Snackbar } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import { database } from "@/assets/db/config";
import { addDoc, collection } from "firebase/firestore";

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const ContactForm = () => {
  /**
   * State manager for snackbar
   */
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Detials saved");

  /**
   * Snackbar Handler
   */
  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  };

  /**
   * Snackbar Handler
   */
  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  /**
   * Country selector for country input field
   */
  const [value, setValue] = useState("");

  /**
   * To change the selcted country to user specific country
   * @param {*} newValue: Expects a country value
   */
  const handlePhoneChange = (newValue, info) => {
    setValue(newValue);
    setFormValues({ ...formValues, mobile: info.numberValue });
  };

  /**
   * Form data
   */
  const formData = {
    name: "",
    email: "",
    mobile: "",
    message: "",
  };

  /**
   * State manager from formData
   */
  const [formValues, setFormValues] = useState(formData);

  /**
   * Variables for Email validation
   * State manager
   * Email regex
   */
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,}$/i;

  /**
   * To populate the formData
   * @param e: React change event
   */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailError(!emailRegex.test(value));
    }
    setFormValues({ ...formValues, [name]: value });
  };

  /**
   * To handle form submission
   * @param {*} e: React form event
   */
  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setSnackbarText("Details saved");

    if (emailError === true) {
      setSnackbarText("Please enter a valid email");
      handleSnackbarClick();
      return;
    }
    
    try {
      const formCollection = collection(database, "polarContactFormData");
      const newData = await addDoc(formCollection, formValues);
      sendEmail(formValues)
      handleSnackbarClick();
      setFormValues(formData);
      setValue('')
      setEmailError(false)
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * To send email
   * @param data: form data 
   */
  const sendEmail = async (data) => {
    const templateParams = {
      to_name: 'Jatin',
      from_name: data.name,
      phone: data.mobile,
      email: data.email,
      message: data.message,
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        },
      );
    } 
    catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
      console.log("Error ", err)
    }
  }


  return (
    <form onSubmit={handleFormSubmit}>
      <Box
        sx={{
          "& .MuiButton-root": { ml: 3, mt: 1 },
          "& .MuiTextField-root": { ml: 3, my: 1, minWidth: "90%" },
        }}
      >
        <TextField
          id="indexFormName"
          label="Name"
          name="name"
          value={formValues["name"]}
          variant="outlined"
          required
          onChange={handleChange}
        />
        <TextField
          id="indexFormEmail"
          label="Email"
          name="email"
          value={formValues["email"]}
          variant="outlined"
          required
          error={emailError}
          onChange={handleChange}
        />

        <MuiTelInput
          defaultCountry="IN"
          name="mobile"
          placeholder="Mobile"
          value={value}
          required
          onChange={handlePhoneChange}
        />

        <TextField
          label="Message"
          name="message"
          value={formValues["message"]}
          multiline
          maxRows={1}
          required
          onChange={handleChange}
        />

        <div>
          <Button type="submit" className="button" variant="contained">
            Submit
          </Button>
        </div>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          message={snackbarText}
        />
      </Box>
    </form>
  );
};

export default ContactForm;
