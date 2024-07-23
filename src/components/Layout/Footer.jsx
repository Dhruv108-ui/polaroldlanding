// src/components/Footer.js
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
const Footer = ({openContact}) => {
    
    return (
        <>
            <footer className=" text-white px-8 pt-10 sm:pt-12 pb-14 sm:pb-20" style={{background: "var(--Linear, linear-gradient(270deg, #211AEB 0%, #7C36FE 100%))"}}>
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    {/* Logo and Call to Action */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            {/* Replace with your logo */}
                            <img src="/logo-white.png" alt="Polarr Logo" className="h-[60px]" />
                       
                        </div>
                        <div>
                            <h2 className="text-lg">Ready to get started?</h2>
                            <Button className="mt-6 bg-white text-black py-2 px-8 rounded-md hover:bg-gray-200 font-[500]" href='https://teams.microsoft.com/l/meetup-join/19:meeting_YWI0MGU3YTYtNDczYy00YmJkLThiZWEtYzcwMzYzYWNiNTc3@thread.v2/0?context=%7B%22Tid%22:%227bad2f1c-3042-45ee-831d-d77ee748fc8c%22,%22Oid%22:%22d2a858af-fe8f-4a11-87f4-230ad82724f1%22%7D' target='blank' sx={{textTransform:"none"}}>
                                Book a call
                            </Button>
                        </div>
                    </div>

                    {/* Links and Contact */}
                    <div className="flex flex-col sm:flex-row sm:space-x-16 mt-8 sm:mt-0 gap-6 sm:gap-0">
                        <div className="flex flex-col space-y-2">
                            <a href="/terms-and-conditions" className="hover:underline font-bold">Terms & Conditions</a>
                            
                           

                        </div>
                        <div className="flex flex-col space-y-2">
                        <a href="/privacy-policy" className="hover:underline font-bold">Privacy Policy</a>
                            
                           

                        </div>
                        
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold sm:mb-2">Company</h3>
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Blog</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold sm:mb-2">Contact</h3>
                            <div className="flex items-center space-x-2">
                                <span><CallIcon/></span>
                                <a href="tel:+919911924895" className="hover:underline">+91 9911924895</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span><EmailIcon/> </span>
                                <a href="mailto:hello@gobolar.io" className="hover:underline">hello@gopolar.io</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span><LocationOnIcon/></span>
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
