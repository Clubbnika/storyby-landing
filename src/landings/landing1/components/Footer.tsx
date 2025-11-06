import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#000000] py-8 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} StorybyWriter. All rights reserved.
        </p>
        <div className="mt-3 flex justify-center gap-6 text-xs text-white/50">
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
      </div>
    </footer>
  );
};

export default Footer;
