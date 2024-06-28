import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Section = ({ title, children }) => (
  <div className="flex flex-col capitalize gap-4">
    <div className="text-3xl text-main-text">{title}</div>
    <div className="flex flex-col gap-4 text-[#FFFFFF80]">{children}</div>
  </div>
);

const Footer = () => {
  return (
    <div className="bg-[#103741] grid grid-cols-4 p-4 ">
      <Section title="get in touch">
        <div className="hover:text-primary">123 Street, New York, USA</div>
        <div className="hover:text-primary">+012 345 67890</div>
        <div className="hover:text-primary">info@example.com</div>
      </Section>
      <Section title="quick links">
        <div className="hover:text-primary hover:scale-105 transform transition-all duration-300 flex items-center gap-2">
          <FaChevronRight />
          about us
        </div>
        <div className="hover:text-primary hover:scale-105 transform transition-all duration-300 flex items-center gap-2">
          <FaChevronRight />
          our services
        </div>
        <div className="hover:text-primary hover:scale-105 transform transition-all duration-300 flex items-center gap-2">
          <FaChevronRight />
          contact us
        </div>
        <div className="hover:text-primary hover:scale-105 transform transition-all duration-300 flex items-center gap-2">
          <FaChevronRight />
          privacy policy
        </div>
      </Section>
      <Section title="Photo gallery">
        <div>123 Street, New York, USA</div>
        <div>+012 345 67890</div>
        <div>info@example.com</div>
      </Section>
      <Section title="newsletter">
        <div>123 Street, New York, USA</div>
        <div>+012 345 67890</div>
        <div>info@example.com</div>
      </Section>
    </div>
  );
};

export default Footer;
