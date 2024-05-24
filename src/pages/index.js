// src/App.js
import React from 'react';
import { Button, Card, Stack, CardContent, Typography, Box } from '@mui/material';
import { useState } from 'react';
import ContactModal from '@/components/Modal';
function App() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <>
      <ContactModal open={open} handleClose={handleCloseModal} />
      <div className="bg-white text-black">
      <Box component="img" src="Landingpage/bg.png" alt="AI Agent" className="w-full" sx={{position:"absolute",height:"90svh",zIndex:"0"}} />
        <Box className="bg-white text-black py-16 px-5 sm:px-24 mt-12 h-[90vh]">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
            <Box flex={1}>
              <Typography variant="h3" className="gradient text-[24px] sm:text-[48px] relative z-10">
                Capture & Convert
              </Typography>
              <Typography variant="h3" className="font-bold text-[#18181B] text-[24px] sm:text-[48px] relative z-10">
                leads on Whatsapp &<br/> Linkedin Seamlessly
              </Typography>
              <Typography variant="subtitle1" className="mt-4 text-[14px] sm:text-[20px] relative z-10">
                <span className="font-bold">Polarr</span> is the AI Infrastructure for generating and nurturing leads on Whatsapp and LinkedIn for Financial Services
              </Typography>
              <Button variant="contained" className="mt-6 button" onClick={handleOpenModal}>
                Join the Waitlist
              </Button>
            </Box>
            <Box flex={1} display="flex" justifyContent="center ">
              <Box component="img" src="Landingpage/ai.png" alt="AI Agent" className="w-full max-w-md rounded-lg shadow-lg relative z-10" />
            </Box>
          </Stack>
        </Box>
        <Box className="bg-gradient-to-br bg-white py-16 text-center px-5 sm:px-24">
          <Stack spacing={4} alignItems="center" sx={{backgroundImage:'url(Landingpage/gradient.png)',padding:{md:"40px"},borderRadius:"15px"}}>
            <Typography variant="h4" className="w-[60%] text-[24px] sm:text-[48px]">
              Are you a <span className="gradient">Loan Agent</span>, Financial Advisor, Insurance Agent, or Mutual Fund Distributor?
            </Typography>
            <Typography variant="subtitle1" className="mt-4 max-w-2xl mx-auto text-[14px] sm:text-[20px]">
              <span className="gradient">Meet PRIYA</span>, your dedicated AI Sales Agent designed to revolutionize how you connect with potential clients. <span className="gradient">PRIYA</span> empowers you to create personalized agents that generate, and nurture leads on WhatsApp and LinkedIn, ensuring you never miss an opportunity in the financial services sector.
            </Typography>
            <Button variant="contained" className="mt-6 button">
              Join the Waitlist Now!
            </Button>
          </Stack>
        </Box>
        <Box className="bg-gray-50 p-8 rounded-md  mx-auto text-center">
          <Typography variant="h4" className="font-bold mb-6">
            Why <span className="text-purple-600">Priya</span> Outperforms?
          </Typography>
          <Box flex={1} display="flex" justifyContent="center">
            <Box component="img" src="Landingpage/feature.png" alt="AI Agent" className="w-full max-w-4xl rounded-lg shadow-lg" />
          </Box>
        </Box>

        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">
              What Does <span className="text-purple-600">Priya</span> Actually Do?
            </h2>
            <div className="flex flex-wrap justify-center items-center space-x-4">
              <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
                <div className="text-purple-600 mb-4">
                  {/* Replace with an appropriate icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm1 9c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Find the Right Leads:</h3>
                <p>Priya identifies and targets high-quality leads on WhatsApp and LinkedIn.</p>
              </div>

              <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
                <div className="text-purple-600 mb-4">
                  {/* Replace with an appropriate icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm1 9c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Reach Out Automatically:</h3>
                <p>Priya sends personalized messages on WhatsApp and LinkedIn, saving you time.</p>
              </div>

              <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
                <div className="text-purple-600 mb-4">
                  {/* Replace with an appropriate icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm1 9c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Nurture with AI:</h3>
                <p>Priya engages and nurtures your leads with smart, ongoing conversations.</p>
              </div>

              <div className="max-w-xs bg-white shadow-lg rounded-lg p-6 m-4">
                <div className="text-purple-600 mb-4">
                  {/* Replace with an appropriate icon */}
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.372 0 0 5.372 0 12c0 6.627 5.372 12 12 12 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm-1-15h2v6h-2zm1 9c-.553 0-1 .448-1 1s.447 1 1 1 1-.448 1-1-.447-1-1-1z" /></svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Book Qualified Calls:</h3>
                <p>Schedule calls only with pre-qualified leads, ensuring you focus on the best prospects.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 text-center">
          <Typography variant="h4" className="font-bold">
            Don't Believe Us? Try talking to Priya Yourself!
          </Typography>
          <Button variant="contained" color="success" className="mt-4">
            WhatsApp
          </Button>
        </section>
        <section className="py-16 bg-gray-100 text-center">
          <Typography variant="h4" className="font-bold">
            3 Major Case Studies
          </Typography>
          <Box className="mt-8 flex flex-wrap justify-center">
            {[
              { title: 'Midson Advisors', description: 'Transformation with Polar AI.' },
              { title: 'Investales', description: 'Transformation with Polar AI.' },
              { title: 'LexComply', description: 'Efficiency Boost with Polar AI.' }
            ].map((item, index) => (
              <Card key={index} className="m-4 w-64">
                <CardContent>
                  <Typography variant="h6" className="font-bold">
                    {item.title}
                  </Typography>
                  <p>{item.description}</p>
                  <Button variant="outlined" color="primary" className="mt-4">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </section>
        <footer className="py-8 bg-black text-white text-center">
          <p className="mb-4">Want Priya to Take Over?</p>
          <Button variant="contained" color="primary">
            Join the Waitlist Today!
          </Button>
        </footer>
      </div>
    </>
  );
}

export default App;
