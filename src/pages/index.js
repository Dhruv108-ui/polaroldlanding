// src/App.js
import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  Card,
  Stack,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import ContactModal from "@/components/Modal";
import ContactModalNew from "@/components/ModalNew";
import ContactForm from "@/components/contact/contactForm";

// --- Services Data ---
const services = [
  {
    icon: "Icons/mail.png",
    title: "Sales Workforce:",
    description:
      "Convert leads 30% faster with a virtual sales team engaging prospects on platforms like WhatsApp, LinkedIn, Email etc.",
  },
  {
    icon: "Icons/send.png",
    title: "Customer Retention Workforce:",
    description: "Cut support tickets by 75% and reduce service costs by up to 40%.",
  },
  {
    icon: "Icons/ai.png",
    title: "C-Suite Workforce:",
    description:
      "Gain real-time insights and make data-driven decisions faster with integrated analytics. ",
  },
];

// --- Service Card Component ---
const ServiceCard = ({ icon, title, description, showBorder }) => (
  <div
    className={`flex flex-col items-start p-6 mt-5  ${
      showBorder ? "border-b sm:border-b-0 sm:border-r border-gray-300" : ""
    }`}
  >
    <img
      src={icon}
      className="h-[45px] w-[45px] sm:h-[60px] sm:w-[60px] text-left"
    />
    <h3 className="mt-4 text-[#220964] font-semibold text-[22px] sm:text-[25px] text-left">
      {title}
    </h3>
    <p className="mt-2  text-[#220964] text-[14px] sm:text-[18px] text-left">
      {description}
    </p>
  </div>
);

// --- Main App Component ---
function App() {
  // --- State for opening standard contact modal (by a button click) ---
  const [open, setOpen] = useState(false);

  // --- Scroll-based modal states ---
  const [scrollModalOpen, setScrollModalOpen] = useState(false);
  const hasReachedBottom = useRef(false);
  const prevScrollPos = useRef(0);

  // --- Handlers for the normal contact modal ---
  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  // --- Sticky Modal Handlers (scroll-based) ---
  const handleCloseScrollModal = () => setScrollModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // Check if user scrolled to bottom
      if (currentScrollPos + windowHeight >= totalHeight - 2) {
        hasReachedBottom.current = true;
      }

      // If user reached bottom, then scrolls up => open modal
      if (
        hasReachedBottom.current &&
        currentScrollPos < prevScrollPos.current
      ) {
        setScrollModalOpen(true);
        // Reset so it doesn't keep opening the modal
        hasReachedBottom.current = false;
      }

      // Update previous scroll position
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Polar AI - Home</title>
        <meta
          name="description"
          content="Polar is the AI Infrastructure for generating and nurturing leads on Whatsapp and LinkedIn for Financial Services"
        />
        <meta property="og:title" content="Polar AI - Home" />
        <meta
          property="og:description"
          content="Polar is the AI Infrastructure for generating and nurturing leads on Whatsapp and LinkedIn for Financial Services"
        />
        <meta property="og:image" content="/logo-white.png" />
        <meta name="twitter:title" content="Polar AI - Home" />
        <meta
          name="twitter:description"
          content="Polar is the AI Infrastructure for generating and nurturing leads on Whatsapp and LinkedIn for Financial Services"
        />
        <meta name="twitter:image" content="/logo-white.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/** 
       * 1) Existing Modal (Opened by normal button click).
       */}
      <ContactModal open={open} handleClose={handleCloseModal} />

      {/**
       * 2) Scroll-based Contact Modal
       */}
      <ContactModalNew open={scrollModalOpen} handleClose={handleCloseScrollModal} />

      {/**
       * 3) Sticky "Book a Call" Button on the right
       */}
      <Box
        sx={{
          position: "fixed",
          top: "42%",
          right:{ xs: "3%", sm: "1.5%", md: "1%" },
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center right",
          zIndex: 2000, // Make sure it is above other elements
          
        }}
      >
        <Button
          variant="contained"
          className="button"
          href="https://calendly.com/vidisha-gopolar/30min"
          target="_blank"
        >
          Book a Call
        </Button>
      </Box>

      {/** 
       * 4) Page Content
       */}
      <div className="bg-white text-black">
        <Box
          component="img"
          src="Landingpage/bg.png"
          alt="AI Agent"
          className="w-full"
          sx={{ position: "absolute", height: "72svh", zIndex: "0" }}
        />
        <Box className="bg-white text-black py-4 sm:py-5 px-5 sm:px-24 mt-0 sm:mt-12 md:h-[72vh]">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
          >
            <Box flex={1} className="ml-4 mr-4">
  <Typography
    variant="h3"
    className="gradient text-[24px] sm:text-[48px] relative z-10"
  >
    Supercharge Your Sales
  </Typography>
  <Typography
    variant="h3"
    className="font-bold text-[#18181B] text-[24px] sm:text-[48px] relative z-10"
  >
    Retention, and <br /> Decision-Making with AI
  </Typography>
  <Typography
    variant="subtitle1"
    className="mt-4 text-[14px] sm:text-[20px] relative z-10"
  >
    <span className="font-bold">Introducing Polar </span>
    Your Agentic AI Infrastructure for WhatsApp, Email, and Call
  </Typography>
  <Stack spacing={4} className="mt-6">
    {/* First stack for "Book a Call" */}
    {/* <Button
      variant="contained"
      className="button"
      href="https://calendly.com/vidisha-gopolar/30min"
      target="blank"
    >
      Book a Call
    </Button> */}
    {/* Second stack for two buttons in a horizontal line */}
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        className="button"
        href="https://ecommerce.gopolar.io/"
        target="_blank"
      >
        Polar for Ecommerce
      </Button>
      <Button
        variant="contained"
        className="button"
        href="https://realestate.gopolar.io/"
        target="_blank"
      >
        Polar for Real Estate
      </Button>
      <Button
      variant="contained"
      className="button"
      href="https://calendly.com/vidisha-gopolar/30min"
      target="blank"
    >
      Book a Call
    </Button>
    </Stack>
  </Stack>
</Box>

            <Box flex={1} sx={{ maxWidth: "100%", m: 2 }}>
              <span className="ms-5 font-bold text-[20px] gradient">
                Request a Demo
              </span>
              {/* 
              // If you are using ReactPlayer, you can re-enable it:
              // <Box
              //   position="relative"
              //   width="80%"
              //   height="350px"
              //   maxWidth="md"
              //   className="sm:w-full max-w-md rounded-lg shadow-lg"
              // >
              //   <ReactPlayer
              //     url="https://youtu.be/aRaneA2Sw10?si=yzIMxZwA4m41Alr6"
              //     light="Landingpage/ai.png"
              //     playing
              //     width="100%"
              //     height="100%"
              //     className="relative z-10"
              //   />
              // </Box> 
              */}
              {/* Contact Form  */}
              <ContactForm />
            </Box>
          </Stack>
        </Box>

        <Box className="bg-gradient-to-br bg-white py-10 pt-16 sm:py-16 text-center px-5 sm:px-24">
  <Stack
    spacing={4}
    alignItems="center"
    className="bg-gradient-to-br from-[#f8fbff] to-[#faf1fd]"
    sx={{
      padding: { xs: "30px 20px", md: "60px 0px" },
      borderRadius: "15px",
    }}
  >
    <Typography
      variant="h4"
      className="sm:w-[60%] text-[24px] sm:text-[48px] font-[500]"
    >
      <span className="gradient">Polar AI</span> is the all-in-one solution for transforming your business operations
    </Typography>
    <Typography
      variant="subtitle1"
      className="mt-4 max-w-2xl mx-auto text-[14px] sm:text-[20px]"
    >
      Whether you are driving sales, retaining customers, or making smarter decisions, our{" "}
      <span className="gradient">
      AI Sales Agent
      </span>
      , and <span className="gradient">AI Customer Service Agent</span> are here to help you scale effortlessly.<br />With{" "}
      <span className="gradient">multi-language and multi-channel support</span> ,including {" "}
      <span className="gradient">WhatsApp, email, and calls,</span> Polar ensures seamless and personalized connections with your customers—anytime, anywhere{" "}
      {/* <span className="gradient">email automation</span> */}
    </Typography>
    <Stack direction="row" spacing={2} className="mt-6">
      {/* <Button
        variant="contained"
        className="button"
        href="https://ecommerce.gopolar.io/"
        target="blank"
      >
        Polar for Ecommerce
      </Button> */}
      <Button
        variant="contained"
        className="button"
        href="https://calendly.com/vidisha-gopolar/30min"
        target="blank"
      >
        Book a Call
      </Button>
      {/* <Button
        variant="contained"
        className="button"
        href="https://realestate.gopolar.io/"
        target="blank"
      >
        Polar for Real Estate
      </Button> */}
    </Stack>
  </Stack>
</Box>


        <Box className="p-8 rounded-md mx-auto text-center">
          <Typography
            variant="h4"
            className="font-[500] mb-12 text-[24px] sm:text-[48px]"
          >
            Why <span className="gradient">Polar</span> Outperforms?
          </Typography>
          <Box flex={1} display="flex" justifyContent="center">
            <Box
              component="img"
              src="Landingpage/main.png"
              alt="AI Agent"
              className="w-[110%] sm:w-full max-w-4xl mt-4"
            />
          </Box>
        </Box>

        <section className="bg-white py-10 sm:py-16 mt-5 px-5 sm:px-24">
          <Stack
            className="mx-auto text-center bg-gradient-to-br from-[#f8fbff] to-[#faf1fd]"
            sx={{
              padding: { xs: "30px 20px", md: "60px 0px" },
              borderRadius: "15px",
            }}
          >
            <h2 className="text-3xl sm:mb-12 text-[24px] sm:text-[48px] font-[500]">
              What Does <span className="gradient">Polar</span> Actually Do?
            </h2>
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 sm:px-12 py-5">
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
          <Box
            component="img"
            src="Landingpage/ellipse.png"
            alt="AI Agent"
            className="w-full"
            sx={{
              position: "absolute",
              height: { xs: "50svh", sm: "70svh" },
              width: "fit-content",
              zIndex: "0",
            }}
          />
          <Typography
            variant="h4"
            className="font-bold text-[24px] sm:text-[48px] relative z-1 px-4"
          >
            Still not convinced? Experience the power of AI by interacting with
            one of our clients AI-powered agents!
            <br />
            <span className="gradient text-[26px] sm:text-56px]">
              What can it do? You can ask it anything, perform calculations, or
              simply have a conversation to see how our AI sales tools and AI
              customer tools work in real-time
            </span>
          </Typography>
          <Box
            flex={1}
            component="a"
            display="flex"
            justifyContent="center "
            // href="https://wa.link/d48oih"
            target="blank"
          >
            {/* <Box
              component="img"
              src="Icons/wp.png"
              alt="AI Agent"
              className="w-[50%] sm:w-full max-w-[15rem] mt-[20px] relative z-1 cursor-pointer"
            /> */}
            
            <Stack direction="row" spacing={2} className="mt-6">
      <Button
        variant="contained"
        className="button"
        href="https://ecommerce.gopolar.io/"
        target="blank"
      >
        Polar for Ecommerce
      </Button>
      <Button
        variant="contained"
        className="button"
        href="https://calendly.com/vidisha-gopolar/30min"
        target="blank"
      >
        Book a Call
      </Button>
      <Button
        variant="contained"
        className="button"
        href="https://realestate.gopolar.io/"
        target="blank"
      >
        Polar for Real Estate
      </Button>
    </Stack>
          </Box>
        </section>

        <section className="bg-white py-10 sm:py-16 mt-5 px-5 sm:px-24">
          <Stack
            className="container mx-auto text-center bg-gradient-to-br from-[#f8fbff] to-[#faf1fd]"
            sx={{
              padding: { xs: "30px 0px", md: "60px 0px" },
              borderRadius: "15px",
            }}
          >
            <h2 className="text-3xl sm:mb-12 text-[24px] sm:text-[48px] text-[#391383] font-bold">
              3 Major Case Studies
            </h2>
            <Box className="mt-8 flex flex-wrap justify-around px-4">
              {[
                {
                  image: "Landingpage/comp1.png",
                  link: "/blog/frnG3tir838Uukptm3pi",
                  title: "Enhanced client engagement and growth",
                  description:
                    "Midson Advisors is a financial services firm that specializes in wealth management and investment consulting. With a significant client base and a comprehensive suite of services, Midson Advisors had established itself as a reliable player in the financial sector.",
                },
                {
                  image: "Landingpage/comp2.jpg",
                  link: "/blog/AKVNHEKgdx9uMwqtmSOE",
                  title: "Overcame lead management challenges",
                  description:
                    "Investales is a premier financial advisory firm specializing in mutual funds and investment planning. Despite a robust client base and a strong reputation, Investales faced significant challenges in lead management and client communication.",
                },
                {
                  image: "Landingpage/comp3.png",
                  link: "/blog/ypdItGtRxlr6jeMcB3Ka",
                  title: "Streamlined decision-making and reduced costs.",
                  description:
                    "Zephyer Venture Partners is a prominent venture capital firm that manages a diverse portfolio of investments across multiple industries. The firm’s top management team faced challenges in accessing real-time business insights and making data-driven decisions efficiently. They relied heavily on external consultants to gather and analyze data, which resulted in increased costs and delayed decision-making processes.",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="m-4 flex"
                  sx={{ borderRadius: "8px" }}
                >
                  <CardContent className="flex flex-col justify-start items-start sm:min-w-[370px] sm:max-w-[370px] pb-4">
                    <img
                      src={item.image}
                      alt="blog banner"
                      className="h-[175px] w-full text-left mb-2 object-contain"
                      style={{ borderRadius: "8px" }}
                    />
                    <Typography
                      variant="h6"
                      className="font-semibold text-left text-[18px] sm:text-[22px]"
                    >
                      {item.title}
                    </Typography>
                    <p className="text-left text-[14px]">{item.description}</p>
                    <Link
                      href={item.link}
                      className="mt-4 gradient text-left items-start text-[14px] sm:text-[18px]"
                      style={{ textTransform: "none" }}
                    >
                      Read More
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
        </section>

        <Stack
          sx={{
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: "130px", sm: "200px" },
          }}
        >
          <Box
            component="img"
            src="Landingpage/bg2.png"
            alt="AI Agent"
            className="w-full"
            sx={{
              position: "absolute",
              height: { xs: "30svh", sm: "40svh" },
              zIndex: "0",
              mt: { xs: "30px", sm: "100px" },
            }}
          />
          <h2 className="text-3xl mb-5 text-[24px] sm:text-[48px] font-[600] relative z-1 mt-[30px] sm:mt-[100px]">
            Want <span className="gradient">Polar </span>to Take Over?
          </h2>
          <h2 className="text-3xl mb-5 text-[20px] sm:text-[35px] font-[600] relative z-1">
          Explore Polar AI potential for your business
          </h2>
          <Button
            variant="contained"
            className="button"
            href="https://calendly.com/vidisha-gopolar/30min"
            target="blank"
          >
            Book a Call
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default App;
