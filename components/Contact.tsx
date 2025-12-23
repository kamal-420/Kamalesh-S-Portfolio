
import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/kamal-420", icon: "github" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kamalesh-s-56aa60330/", icon: "linkedin" },
    { name: "LeetCode", href: "https://leetcode.com/u/kamal-2005/", icon: "code" },
    { name: "Instagram", href: "https://www.instagram.com/_.alone_kdboy._?igsh=Z2tsNTNyM2FwbDA2", icon: "instagram" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = "919677643687";
    const text = `*New Royal Summons from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'github': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
      case 'linkedin': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
      case 'instagram': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
      case 'code': return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
      default: return null;
    }
  };

  return (
    <div className="pb-24 relative isolate">
      {/* Royal Section Background - Subtle floating gradients */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden rounded-[3rem]">
        <div className="absolute top-1/4 -left-1/4 w-full h-full bg-gradient-radial from-[#D4AF37]/5 to-transparent blur-[120px] animate-royal-slow-rotate opacity-60"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-full h-full bg-gradient-radial from-[#4B0082]/10 to-transparent blur-[140px] animate-royal-slow-rotate-reverse opacity-40"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)] animate-pulse"></div>
      </div>

      <SectionHeader title="Royal Summons" />
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 relative">
        <div className="lg:col-span-2 space-y-10">
          <div className="relative">
            <h3 className="royal-text text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-zinc-400 text-lg leading-relaxed italic">
              "Feel free to reach out for internships, collaborations, or project discussions. I respond promptly to every envoy."
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-[#D4AF37]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-zinc-500 mb-0.5">Location</p>
                <p className="text-white font-bold text-base">Kallakurichi, Tamil Nadu</p>
              </div>
            </div>

            <a href="tel:9677643687" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a2e] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-zinc-500 mb-0.5">Tele-Comm</p>
                <p className="text-white font-bold text-base">9677643687</p>
              </div>
            </a>
            
            <a href="mailto:kamalesh.s.it.2023@snsct.org" className="flex items-center gap-6 group">
              <div className="w-12 h-12 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-xl flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a2e] transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest font-black text-zinc-500 mb-0.5">Electronic Mail</p>
                <p className="text-white font-bold text-base">kamalesh.s.it.2023@snsct.org</p>
              </div>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            {socialLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#0a0a2e] border border-[#D4AF37]/40 rounded-xl flex items-center justify-center text-zinc-400 transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:text-[#D4AF37] hover:border-[#D4AF37] hover:scale-125 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(212,175,55,0.8)] active:scale-90"
                title={link.name}
              >
                <span className="transition-transform duration-500 group-hover:rotate-12">
                  {getIcon(link.icon)}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <form 
            onSubmit={handleSubmit} 
            className="royal-card relative p-10 md:p-14 rounded-[3rem] bg-zinc-950/60 backdrop-blur-md border border-[#D4AF37]/20 space-y-8 overflow-hidden group shadow-2xl"
          >
            {/* Inner Animated Card Background Layer */}
            <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden opacity-30 group-hover:opacity-50 transition-opacity duration-700">
              <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-gradient-to-br from-[#D4AF37]/15 to-transparent rounded-full blur-[100px] animate-royal-drift"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-[#4B0082]/20 to-transparent rounded-full blur-[120px] animate-royal-drift-reverse"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#D4AF37]">The Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#D4AF37] focus:outline-none focus:bg-white/10 transition-all placeholder:text-zinc-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#D4AF37]">The Email</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#D4AF37] focus:outline-none focus:bg-white/10 transition-all placeholder:text-zinc-600"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="space-y-3 relative z-10">
              <label className="text-[10px] uppercase tracking-[0.2em] font-black text-[#D4AF37]">The Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-[#D4AF37] focus:outline-none focus:bg-white/10 transition-all resize-none placeholder:text-zinc-600"
                placeholder="What is your quest?"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="relative z-10 w-full py-5 bg-[#D4AF37] text-[#0a0a2e] font-black uppercase tracking-[0.2em] rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)] hover:shadow-[0_15px_40px_-10px_rgba(212,175,55,0.8)] overflow-hidden group/btn"
            >
              <span className="relative z-10">Dispatch Message</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
            </button>
          </form>
        </div>
      </div>

      <style>{`
        @keyframes royal-drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15%, 10%) scale(1.1); }
        }
        @keyframes royal-drift-reverse {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, -15%) scale(1.05); }
        }
        @keyframes royal-slow-rotate {
          0% { transform: rotate(0deg) translate(0, 0); }
          50% { transform: rotate(180deg) translate(50px, 20px); }
          100% { transform: rotate(360deg) translate(0, 0); }
        }
        @keyframes royal-slow-rotate-reverse {
          0% { transform: rotate(360deg) translate(0, 0); }
          50% { transform: rotate(180deg) translate(-50px, -20px); }
          100% { transform: rotate(0deg) translate(0, 0); }
        }
        .animate-royal-drift {
          animation: royal-drift 15s ease-in-out infinite;
        }
        .animate-royal-drift-reverse {
          animation: royal-drift-reverse 18s ease-in-out infinite;
        }
        .animate-royal-slow-rotate {
          animation: royal-slow-rotate 40s linear infinite;
        }
        .animate-royal-slow-rotate-reverse {
          animation: royal-slow-rotate-reverse 50s linear infinite;
        }
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
      `}</style>
    </div>
  );
};

export default Contact;
