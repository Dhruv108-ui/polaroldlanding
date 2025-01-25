import React, { useState } from "react";

import { Button, Box, TextField, Snackbar } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";

import { database } from "@/assets/db/config";
import { addDoc, collection } from "firebase/firestore";

import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useRouter } from "next/router";

const ContactForm = () => {
  const router = useRouter(); // Router for navigation

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarText, setSnackbarText] = useState("Details saved");
  const [value, setValue] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [emailError, setEmailError] = useState(false);
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Za-z]{2,}$/i;

  const handleSnackbarClick = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handlePhoneChange = (newValue, info) => {
    setValue(newValue);
    setFormValues({ ...formValues, mobile: info.numberValue });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailError(!emailRegex.test(value));
    }
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSnackbarText("Details saved");

    if (emailError === true) {
      setSnackbarText("Please enter a valid email");
      handleSnackbarClick();
      return;
    }

    try {
      const formCollection = collection(database, "polarContactFormData");
      await addDoc(formCollection, formValues);
      sendEmail(formValues);
      handleSnackbarClick();

      setFormValues({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
      setValue("");
      setEmailError(false);

      // Navigate to the Thank You page
      router.push("/thank-you");
      setTimeout(() => {
        // Redirect to the homepage after 5 seconds
        router.push("/");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  const sendEmail = async (data) => {
    const templateParams = {
      to_name: "Jatin",
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
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      );
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log("EMAILJS FAILED...", err);
        return;
      }
      console.log("Error ", err);
    }
  };

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
