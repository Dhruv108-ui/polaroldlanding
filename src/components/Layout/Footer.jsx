// src/components/Footer.js
import React from 'react';

const Footer = () => {
    
    return (
        <>
            <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    {/* Logo and Call to Action */}
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            {/* Replace with your logo */}
                            <img src="https://via.placeholder.com/40" alt="Polarr Logo" className="w-10 h-10" />
                            <span className="text-xl font-bold">POLARR</span>
                        </div>
                        <div>
                            <h2 className="text-lg">Ready to get started?</h2>
                            <button className="mt-2 bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200">
                                Join the waitlist now
                            </button>
                        </div>
                    </div>

                    {/* Links and Contact */}
                    <div className="flex space-x-16 mt-8 sm:mt-0">
                        <div className="flex flex-col space-y-2">
                            <a href="#" className="hover:underline">Terms & Conditions</a>
                            <a href="#" className="hover:underline">Privacy Policy</a>
                           

                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold">Company</h3>
                            <a href="#" className="hover:underline">Home</a>
                            <a href="#" className="hover:underline">Blog</a>
                        </div>
                        <div className="flex flex-col space-y-2">
                            <h3 className="font-bold">Contact</h3>
                            <div className="flex items-center space-x-2">
                                <span>📞</span>
                                <a href="tel:+919911924895" className="hover:underline">+91 99119 24895</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📧</span>
                                <a href="mailto:hello@gobolar.io" className="hover:underline">hello@gobolar.io</a>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>📍</span>
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
