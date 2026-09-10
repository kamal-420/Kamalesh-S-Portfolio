import React from 'react';

interface FooterProps {
  onNavigate: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Education', id: 'education' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Certifications', id: 'certifications' },
    { name: 'Experience', id: 'experience' },
    { name: 'Workshops', id: 'workshops' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { 
      name: "GitHub", 
      href: "https://github.com/kamal-420", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/kamalesh-sekar-56aa60330", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    { 
      name: "LeetCode", 
      href: "https://leetcode.com/u/kamal-2005/", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      href: "https://www.instagram.com/_.alone_kdboy._?igsh=Z2tsNTNyM2FwbDA2", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative border-t border-white/5 bg-[#08080C] pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); onNavigate('hero'); }}
              className="royal-text text-2xl font-bold tracking-[0.2em] inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span className="text-white tracking-widest group-hover:text-[#D4AF37] transition-colors">KAMALESH</span>
              <span className="text-[#D4AF37] font-extrabold">S.</span>
            </a>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              B.Tech Information Technology Graduate | Aspiring Control Room Specialist &amp; IT Systems Support. Focused on high-availability operations, cloud telemetry, and rapid diagnostics.
            </p>
            <div className="pt-2 flex items-center gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-xl bg-white/3 border border-white/10 hover:border-[#D4AF37]/50 flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">Quick Navigation</h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(link.id)}
                    className="text-xs uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#D4AF37]">Direct Contact</h4>
            <div className="space-y-2 text-xs text-zinc-400">
              <p>
                <a 
                  href="mailto:kamalesh.s.it.2023@snsct.org" 
                  className="hover:text-[#D4AF37] transition-colors break-all"
                >
                  kamalesh.s.it.2023@snsct.org
                </a>
              </p>
              <p>
                <a 
                  href="mailto:kamaleshsekar9487@gmail.com" 
                  className="hover:text-[#D4AF37] transition-colors break-all"
                >
                  kamaleshsekar9487@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+919677643687" 
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  +91 96776 43687
                </a>
              </p>
              <p className="text-zinc-500 pt-1">
                Kallakurichi / Coimbatore, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Ascend */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            &copy; {currentYear} Kamalesh S. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => onNavigate('hero')}
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-[#D4AF37] transition-colors cursor-pointer group"
          >
            <span className="uppercase tracking-widest text-[10px] font-bold">Back to Top</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="14" 
              height="14" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="group-hover:-translate-y-1 transition-transform"
            >
              <path d="m18 15-6-6-6 6"></path>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
