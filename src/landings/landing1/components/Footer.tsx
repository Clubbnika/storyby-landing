import React from 'react';
import { Github, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#000000] py-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-white/60 mb-4">
          © {currentYear} StorybyWriter. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 text-xs text-white/50 mb-5 flex-wrap">
          <a href="#" className="hover:text-white/80 transition">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white/80 transition">
            Terms of Service
          </a>
          <a
            href="tel:+380506258262"
            className="hover:text-white/80 transition font-medium"
            aria-label="Contact us by phone"
          >
            Contact
          </a>
        </div>

        <div className="flex justify-center gap-5">
          <a
            href="https://www.linkedin.com/in/veronika-okhten-a75098300/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white/40 hover:text-white transition"
          >
            <Linkedin size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://www.instagram.com/clubbnika/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/40 hover:text-white transition"
          >
            <Instagram size={20} strokeWidth={1.5} />
          </a>

          <a
            href="https://github.com/Clubbnika"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white/40 hover:text-white transition"
          >
            <Github size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
