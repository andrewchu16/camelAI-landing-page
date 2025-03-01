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
          <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-0">
            {/* Left side - Newsletter */}
            <FooterNewsletter />

            {/* Right side - Navigation - Hidden on mobile */}
            <div className="hidden lg:block">
              <FooterNav />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - Social links and mobile nav */}
      <div className="w-full bg-black">
        <div className="max-w-[1340px] mx-auto px-5 py-8">
          <div className="flex flex-col gap-12">
            <SocialLinks />
            {/* Navigation - Shown only on mobile */}
            <div className="lg:hidden pb-6">
              <FooterNav />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
