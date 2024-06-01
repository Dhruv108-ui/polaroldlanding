// src/App.js
import React from 'react';
import { Button, Card, Stack, CardContent, Typography, Box } from '@mui/material';
import { useState } from 'react';
import ContactModal from '@/components/Modal';
import Link from 'next/link';

const services = [
  {
    icon: "Icons/mail.png",
    title: 'Find the Right Leads:',
    description: 'Polar identifies and targets high-quality leads on WhatsApp and LinkedIn.',
  },
  {
    icon: "Icons/send.png",
    title: 'Reach Out Automatically:',
    description: 'Polar sends personalized messages on WhatsApp and LinkedIn, saving you time.',
  },
  {
    icon: "Icons/ai.png",
    title: 'Nurture with AI:',
    description: 'Polar engages and nurtures your leads with smart, ongoing conversations.',
  },
  {
    icon: "Icons/call.png",
    title: 'Book Qualified Calls:',
    description: 'Schedule calls only with pre-qualified leads, ensuring you focus on the best prospects.',
  },
];

const ServiceCard = ({ icon, title, description, showBorder }) => (
  <div className={`flex flex-col items-start p-6 mt-5  ${showBorder ? 'border-b sm:border-b-0 sm:border-r border-gray-300' : ''}`}>
    <img src={icon} className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] text-left" />
    <h3 className="mt-4 text-[#220964] font-semibold text-[22px] sm:text-[25px] text-left">{title}</h3>
    <p className="mt-2  text-[#220964] text-[14px] sm:text-[18px] text-left">{description}</p>
  </div>
);
function App() {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);
  return (
    <>
      <ContactModal open={open} handleClose={handleCloseModal} />
      <div className="bg-white text-black">
        <Box component="img" src="Landingpage/bg.png" alt="AI Agent" className="w-full" sx={{ position: "absolute", height: "72svh", zIndex: "0" }} />
        <Box className="bg-white text-black py-4 sm:py-5 px-5 sm:px-24 mt-0 sm:mt-12 h-[72vh]">
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} alignItems="center">
            <Box flex={1}>
              <Typography variant="h3" className="gradient text-[24px] sm:text-[48px] relative z-10">
                Capture & Convert
              </Typography>
              <Typography variant="h3" className="font-bold text-[#18181B] text-[24px] sm:text-[48px] relative z-10">
                leads on Whatsapp &<br /> Linkedin Seamlessly
              </Typography>
              <Typography variant="subtitle1" className="mt-4 text-[14px] sm:text-[20px] relative z-10">
                <span className="font-bold">Polar</span> is the AI Infrastructure for generating and nurturing leads on Whatsapp and LinkedIn for Financial Services
              </Typography>
              <Button variant="contained" className="mt-6 button" onClick={handleOpenModal}>
                Join the Waitlist
              </Button>
            </Box>
            <Box flex={1} display="flex" justifyContent="center ">
              <Box component="img" src="Landingpage/ai.png" alt="AI Agent" className="w-[80%] sm:w-full max-w-md rounded-lg shadow-lg relative z-10" />
            </Box>
          </Stack>
        </Box>
        <Box className="bg-gradient-to-br bg-white py-10 pt-16 sm:py-16  text-center px-5 sm:px-24">
          <Stack spacing={4} alignItems="center" className="bg-gradient-to-br from-[#f8fbff] to-[#faf1fd]" sx={{  padding: {xs:"30px 20px", md: "60px 0px" }, borderRadius: "15px" }}>
            <Typography variant="h4" className=" sm:w-[60%] text-[24px] sm:text-[48px] font-[500]">
              Are you a <span className="gradient">Loan Agent</span>, Financial Advisor, Insurance Agent, or Mutual Fund Distributor?
            </Typography>
            <Typography variant="subtitle1" className="mt-4 max-w-2xl mx-auto text-[14px] sm:text-[20px]">
              <span className="gradient">Meet Polar</span>, your dedicated AI Sales Agent designed to revolutionize how you connect with potential clients. <span className="gradient">Polar</span> empowers you to create personalized agents that generate, and nurture leads on WhatsApp and LinkedIn, ensuring you never miss an opportunity in the financial services sector.
            </Typography>
            <Button variant="contained" className="mt-6 button" onClick={handleOpenModal}>
              Join the Waitlist Now!
            </Button>
          </Stack>
        </Box>
        <Box className=" p-8 rounded-md  mx-auto text-center">

          <Typography variant="h4" className="font-[500] mb-12 text-[24px] sm:text-[48px]">
            Why <span className="gradient">Polar</span> Outperforms?
          </Typography>
          <Box flex={1} display="flex" justifyContent="center">
            <Box component="img" src="Landingpage/feature.png" alt="AI Agent" className="w-[110%] sm:w-full max-w-4xl mt-4" />
          </Box>
        </Box>

        <section className="bg-white py-10 sm:py-16 mt-5 px-5 sm:px-24">
          <Stack className="mx-auto text-center bg-gradient-to-br from-[#f8fbff] to-[#faf1fd]" sx={{  padding: {xs:"30px 20px", md: "60px 0px" }, borderRadius: "15px" }}>
            <h2 className="text-3xl sm:mb-12 text-[24px] sm:text-[48px] font-[500]">
              What Does <span className="gradient">Polar</span> Actually Do?
            </h2>
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 sm:px-12 py-5">
                {services.map((service, index) => (
                  <ServiceCard
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    showBorder={index !== services.length - 1}
                  />
                ))}
              </div>
            </div>
          </Stack>
        </section>
        <section className="py-10 sm:py-16 text-center flex flex-col justify-center">
          <Box component="img" src="Landingpage/ellipse.png" alt="AI Agent" className="w-full" sx={{ position: "absolute", height: {xs:"50svh",sm:"70svh"}, width: "fit-content", zIndex: "0" }} />
          <Typography variant="h4" className="font-bold text-[24px] sm:text-[48px] relative z-1 px-4">
            Don&apos;t Believe Us? Try talking to<br /><span className='gradient text-[26px] sm:text-56px]'>Polar Yourself!</span>
          </Typography>
          <Box flex={1} display="flex" justifyContent="center " onClick={handleOpenModal}>
            <Box component="img" src="Icons/wp.png" alt="AI Agent" className="w-[50%] sm:w-full max-w-[15rem] mt-[20px] relative z-1 cursor-pointer" />
          </Box>
        </section>
        <section className="bg-white  py-10 sm:py-16 mt-5 px-5 sm:px-24">
          <Stack className="container mx-auto text-center bg-gradient-to-br from-[#f8fbff] to-[#faf1fd]" sx={{ padding: {xs:"30px 0px", md: "60px 0px" }, borderRadius: "15px" }}>
            <h2 className="text-3xl sm:mb-12 text-[24px] sm:text-[48px]  text-[#391383] font-bold">
              3 Major Case Studies
            </h2>

            <Box className="mt-8 flex flex-wrap justify-around px-4">
              {[
                { image: 'Landingpage/comp1.png', link:"/blog/frnG3tir838Uukptm3pi", title: 'Midson Advisors’ Transformation with Polar AI', description: 'Midson Advisors is a financial services firm that specializes in wealth management and investment consulting. With a significant client base and a comprehensive suite of services, Midson Advisors had established itself as a reliable player in the financial sector.' },
                { image: 'Landingpage/comp2.jpg', link:"/blog/AKVNHEKgdx9uMwqtmSOE", title: 'Investales’ Transformation with Polar AI', description: 'Investales is a premier financial advisory firm specializing in mutual funds and investment planning. Despite a robust client base and a strong reputation, Investales faced significant challenges in lead management and client communication.' },
                { image: 'Landingpage/comp3.png', link:"/blog/ypdItGtRxlr6jeMcB3Ka", title: 'LexComply’s Efficiency Boost with Polar AI', description: 'LexComply is a legal compliance and consulting firm known for its comprehensive support and client-centric services. Despite their expertise, LexComply faced operational challenges that affected their client service levels.' }
              ].map((item, index) => (
                <Card key={index} className="m-4 flex" sx={{ borderRadius: "8px" }}>
                  <CardContent className='flex flex-col justify-start items-start sm:min-w-[370px] sm:max-w-[370px] pb-4'>
                    <img src={item.image} alt="blog banner" className="max-h-[175px] w-full text-left mb-2" style={{ objectFit: "cover", borderRadius: "8px" }} />
                    <Typography variant="h6" className="font-semibold text-left text-[18px] sm:text-[22px]">
                      {item.title}
                    </Typography>
                    <p className='text-left text-[14px]'>{item.description}</p>
                    <Link href={item.link} className="mt-4 gradient text-left items-start text-[14px] sm:text-[18px]" sx={{ textTransform: "none" }}>
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
        </section>

        <Stack sx={{ justifyContent: "center", alignItems: "center", mb:{xs:"130px",sm:"200px"} }}>
          <Box component="img" src="Landingpage/bg2.png" alt="AI Agent" className="w-full" sx={{ position: "absolute", height: {xs:"30svh",sm:"40svh"}, zIndex: "0", mt:{xs:"30px",sm:"100px"} }} />
          <h2 className="text-3xl mb-5 text-[24px] sm:text-[48px] font-[600] relative z-1 mt-[30px] sm:mt-[100px]">
            Want <span className="gradient">Polar </span>to Take Over?
          </h2>
          <h2 className="text-3xl mb-12 text-[20px] sm:text-[35px] font-[600] relative z-1">
            Join the Waitlist Today!
          </h2>
        </Stack>
      </div>
    </>
  );
}

export default App;
