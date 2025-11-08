import React from 'react';

const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={e => handleScroll(e, 'home')}
              className="text-white text-2xl font-bold tracking-tight font-serif"
            >
              StorybyWriter
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              onClick={e => handleScroll(e, 'home')}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={e => handleScroll(e, 'about')}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              About us
            </a>
            <a
              href="#authors"
              onClick={e => handleScroll(e, 'authors')}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              Authors
            </a>
            <a
              href="#testimonials"
              onClick={e => handleScroll(e, 'testimonials')}
              className="text-white hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
            >
              Testimonials
            </a>
          </div>

          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
