import React from "react";
import FooterNav from "./components/FooterNav";
import SocialLinks from "./components/SocialLinks";
import FooterNewsletter from "./components/FooterNewsletter";

export const Footer = () => {
  return (
    <footer className="w-full">
      {/* Main footer content */}
      <div className="w-full bg-dark-background">
        <div className="max-w-[1340px] mx-auto px-5">
          <div className="flex justify-between">
            {/* Left side - Newsletter */}
            <FooterNewsletter />

            {/* Right side - Navigation */}
            <FooterNav />
          </div>
        </div>
      </div>

      {/* Bottom section - Social links and copyright */}
      <div className="w-full bg-black">
        <div className="max-w-[1340px] mx-auto px-5 py-8">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
