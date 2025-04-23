import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl flex md:flex-row flex-col">
        {/* Left section - Logo and description */}
        <div className="py-4 md:w-1/2 w-full px-10">
          <img
            src="./src/assets/images/XV-Logo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Web XV Logo"
          />
          <p className="">
            A SocialIT platform for Web3.0 projects to connect with users.
          </p>
          <p className="">
            WebXV is a decentralized social platform for Web3.0 users to meet
            and connect with one another
          </p>
        </div>
        <div className="py-4 md:w-1/2 flex flex-row w-full px-10">
          {/* Middle section - Company links */}
          <div className="space-y-4 w-1/2">
            <h3 className="text-lg text-white font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-gray-900">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Social links */}
          <div className="space-y-4 w-1/2">
            <h3 className="text-lg text-white font-semibold">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className=" hover:text-gray-900">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-gray-900">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright section */}
      <div className="max-w-7xl mx-auto mt-12 pt-6 text-center md:text-right text-gray-500 md:px-50">
        <p>© Copyright 2023 XY | All Rights Reserved | Intrichapter</p>
      </div>
    </footer>
  );
};

export default Footer;
