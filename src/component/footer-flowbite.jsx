"use client";

import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { NavLink } from "react-router";

export function FooterFlowbite() {
  return (
    <Footer container className="bg-black text-gray-400">
      <div className="w-full">
        <div className="flex md:flex-row flex-col w-full   md:justify-between md:ps-30">
          <div className="md:w-1/2 w-full lg:pe-50 md:pe-30">
            <FooterBrand
              href="https://webxv.com"
              src="../public/images/xv-logo.png"
              alt="XV Logo"
            />
            <span className="text-gray-400">
              <p>
                A SocialFi platform for Web3.0 projects to connect with users.
              </p>
              <p>
                WebXV is a decentralized social platform for Web3.0 users to
                meet and connect with one another
              </p>
            </span>
          </div>
          <div className="flex flex-row md:w-1/2 w-full">
            <div className="w-1/2">
              <FooterTitle title="Company" className="text-white" />
              <FooterLinkGroup col>
                <NavLink to="/AboutUs">About us</NavLink>
                <NavLink to="AllProjects">Projects</NavLink>
                <NavLink to="Community">Community</NavLink>
                <NavLink to="PrivacyPolicy">Privacy Policy</NavLink>
                <NavLink to="TermsNConditions">Terms & Conditions</NavLink>
              </FooterLinkGroup>
            </div>
            <div className="w-1/2">
              <FooterTitle title="Social" className="text-white" />
              <FooterLinkGroup col>
                <FooterLink href="#">TikTok</FooterLink>
                <FooterLink href="#">Twitter</FooterLink>
                <FooterLink href="#">YouTube</FooterLink>
                <FooterLink href="#">Telegram</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <FooterCopyright
            href="#"
            by="XV | All Rights Reserved | WhitePaper"
            year={2023}
          />
        </div>
      </div>
    </Footer>
  );
}
