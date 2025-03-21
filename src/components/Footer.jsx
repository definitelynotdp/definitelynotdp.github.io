import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
      <footer className='footer font-lora'>
          <hr className='border-[#4B006E] border-t-2' />
          <div className='footer-container py-4'>
              <p className="text-center text-[#B2F7EF] text-sm italic">
                  "May our paths cross again, wanderer."
              </p>
              <div className='flex gap-3 justify-center items-center mt-3'>
                  {socialLinks.map((link) => (
                      <Link key={link.name} to={link.link} target='_blank'>
                          <img
                              src={link.iconUrl}
                              alt={link.name}
                              className='w-6 h-6 object-contain transition-transform hover:scale-110'
                          />
                      </Link>
                  ))}
              </div>
          </div>
      </footer>
  );
};

export default Footer;
