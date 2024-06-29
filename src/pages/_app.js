import "@/styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "@/theme";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import ContactModal from "@/components/Modal";
import GoogleAnalytics from '@/components/GoogleAnalytics';

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <GoogleAnalytics />
      <Header openContact={handleOpenModal} />
      <Component {...pageProps} />
      <Footer openContact={handleOpenModal} />
      <ContactModal open={open} handleClose={handleCloseModal} />
    </ThemeProvider>
  );
}

export default MyApp;
