
import React, { useState, useEffect } from 'react';

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    
    // Default to dark mode for royal theme, respect explicit light choice
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, []);

  const toggleTheme = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nextDark = !isDark;
    setIsDark(nextDark);

    if (nextDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        type="button"
        onClick={toggleTheme}
        className="group relative flex items-center justify-center min-w-[44px] min-h-[44px] p-1.5 focus:outline-none cursor-pointer"
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      >
        <div className={`relative w-12 h-6 rounded-full border transition-all duration-300 flex items-center px-0.5 ${
          isDark 
            ? 'bg-zinc-900 border-[#D4AF37]/50 shadow-inner' 
            : 'bg-zinc-200 border-[#D4AF37] shadow-sm'
        }`}>
          {/* Sliding indicator knob */}
          <div className={`w-5 h-5 rounded-full bg-[#D4AF37] text-[#0B0B0F] shadow-md flex items-center justify-center transform transition-transform duration-300 ease-out ${
            isDark ? 'translate-x-6' : 'translate-x-0'
          }`}>
            {isDark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M22 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </svg>
            )}
          </div>
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;
