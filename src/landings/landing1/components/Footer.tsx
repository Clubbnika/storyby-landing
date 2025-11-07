import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] py-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-white/60 mb-4">
          © {currentYear} StorybyWriter. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-xs text-white/50 mb-5">
          <a href="#" className="hover:text-white/80 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white/80 transition">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white/80 transition">
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/40 hover:text-white transition"
          >
            <Facebook size={20} strokeWidth={1.5} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-white/40 hover:text-white transition"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-white/40 hover:text-white transition"
          >
            <Youtube size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
