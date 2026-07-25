import React, { useState } from 'react';
import SectionHeader from './SectionHeader.tsx';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("kamaleshsekar9487@gmail.com");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

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
    const text = `*New Professional Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  const getIcon = (name: string) => {
    switch(name) {
      case 'github': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>;
      case 'linkedin': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>;
      case 'instagram': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
      case 'code': return <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>;
      default: return null;
    }
  };

  return (
    <div className="relative">
      <SectionHeader title="Get in Touch" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-6">
        {/* Left Column: Contact details & Call to action */}
        <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
          <div className="space-y-6">
            <h3 className="royal-text text-2xl font-bold text-white">Let's Connect</h3>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed italic">
              "Whether you're looking to discuss full-time software engineering roles, technical internships, or innovative product design collaborations, I'm always ready to connect."
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl flex items-center justify-center text-[#D4AF37]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-500">Location</p>
                  <p className="text-white text-sm font-bold">Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 p-1 rounded-2xl hover:bg-white/3 transition-all group max-w-sm">
                <a 
                  href="mailto:kamaleshsekar9487@gmail.com" 
                  className="flex items-center gap-4 cursor-pointer"
                  title="Send Email"
                >
                  <div className="w-10 h-10 bg-[#D4AF37]/5 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 rounded-xl flex items-center justify-center text-[#D4AF37] transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-500">Direct Email</p>
                    <p className="text-white text-sm font-bold group-hover:text-[#D4AF37] transition-colors">kamaleshsekar9487@gmail.com</p>
                  </div>
                </a>
                <button 
                  onClick={handleCopyEmail}
                  className="w-8 h-8 bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 rounded-lg flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] transition-all ml-2"
                  title="Copy Email"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[10px] uppercase tracking-wider font-extrabold text-zinc-500">Find Me On</p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/3 border border-white/10 hover:border-[#D4AF37]/50 rounded-xl flex items-center justify-center text-zinc-400 hover:text-[#D4AF37] hover:bg-[#D4AF37]/5 transition-all social-icon-pulse"
                  title={link.name}
                >
                  {getIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <form 
            onSubmit={handleSubmit} 
            className="royal-card p-6 md:p-8 rounded-3xl bg-[#121217] border border-white/5 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37]">Name</label>
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-zinc-600"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37]">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors placeholder:text-zinc-600"
                  placeholder="name@company.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-wider font-bold text-[#D4AF37]">Message</label>
              <textarea 
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full bg-[#0B0B0F] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:border-[#D4AF37] focus:outline-none transition-colors resize-none placeholder:text-zinc-600"
                placeholder="Hi Kamalesh, I'd like to discuss an opportunity..."
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-[#D4AF37] text-black font-extrabold uppercase text-xs tracking-widest rounded-xl hover:bg-[#e4c04f] transition-all"
            >
              Send Message via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#121217] border border-[#D4AF37]/30 text-white px-4 py-3 rounded-xl shadow-2xl animate-toast backdrop-blur-md">
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></div>
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-200">Copied to Clipboard!</span>
        </div>
      )}

      <style>{`
        @keyframes gold-pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
            border-color: rgba(255, 255, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 10px 1.5px rgba(212, 175, 55, 0.2);
            border-color: rgba(212, 175, 55, 0.35);
          }
        }
        @keyframes slide-in-toast {
          0% {
            transform: translateY(1rem);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-toast {
          animation: slide-in-toast 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .social-icon-pulse {
          animation: gold-pulse 3s infinite ease-in-out;
        }
        .social-icon-pulse:nth-child(1) { animation-delay: 0s; }
        .social-icon-pulse:nth-child(2) { animation-delay: 0.6s; }
        .social-icon-pulse:nth-child(3) { animation-delay: 1.2s; }
        .social-icon-pulse:nth-child(4) { animation-delay: 1.8s; }
      `}</style>
    </div>
  );
};

export default Contact;