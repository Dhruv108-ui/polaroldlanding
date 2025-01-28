// src/components/Footer.js
import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
import Link from 'next/link';

const Footer = ({ openContact }) => {
    return (
        <>
            <footer className="text-white px-8 pt-10 sm:pt-12 pb-14 sm:pb-20" style={{ background: "var(--Linear, linear-gradient(270deg, #211AEB 0%, #7C36FE 100%))" }}>
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    {/* Logo and Call to Action */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <img src="/logo-white.png" alt="Polarr Logo" className="h-[60px]" />
                        </div>
                        <div>
                            <h2 className="text-lg">Ready to get started?</h2>
                            <Button className="mt-6 bg-white text-black py-2 px-8 rounded-md hover:bg-gray-200 font-[500]" href='https://calendly.com/vidisha-gopolar/30min' target='blank' sx={{ textTransform: "none" }}>
                                Book a call
                            </Button>
                        </div>
                    </div>

                    {/* Links and Contact */}
                    <div className="flex flex-col sm:flex-row sm:space-x-16 mt-8 sm:mt-0 gap-6 sm:gap-0">
                        <div className="flex flex-col space-y-2">
                            <Link href="/terms-and-conditions" className="hover:underline font-bold">Terms & Conditions</Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <Link href="/privacy-policy" className="hover:underline font-bold">Privacy Policy</Link>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold sm:mb-2">Company</h3>
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Blog</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            {/* <h3 className="font-bold sm:mb-2">Contact</h3>
                            <div className="flex items-center space-x-2">
                                <span><CallIcon /></span>
                                <a href="tel:+919911924895" className="hover:underline">+91 9911924895</a>
                            </div> */}
                            <div className="flex items-center space-x-2">
                                <span><EmailIcon /></span>
                                <a href="mailto:hello@gobolar.io" className="hover:underline">hello@gopolar.io</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span><LocationOnIcon /></span>
                                <span>India</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Copyright Line */}
                <div className="text-center text-white mt-6 pt-4 border-t border-gray-300">
                    <p>© Skitch Technologies Pvt Ltd 2025</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
