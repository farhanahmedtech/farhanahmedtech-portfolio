'use client'
import { Send, Mail, MapPin } from 'lucide-react';
import emailjs from "@emailjs/browser"
import { useRef, useState } from 'react';
import { message } from "antd"

const ContactSection = () => {

  const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: ""
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceid = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
    const templateid = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
    const publicid = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

    if (!formData.name || !formData.email || !formData.message) {
    return message.error("Please fill all fields");
  }
    
    emailjs.send(
    serviceid,
    templateid,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    {
      publicKey: publicid,
    }
  )
      .then(
        () => {
          message.success("Message Sent Successfully")
          setFormData({
        name: "",
        email: "",
        message: ""
      });
        },
        (error:unknown) => {
          if (error instanceof Error) {
          message.error(error.message || "Failed to Send")
          } else {
            message.error("Failed to Send")
        }
        },
      );
  };
  return (
    <section className="min-h-screen bg-black text-white font-['Space_Grotesk'] selection:bg-[#8A2BE2] selection:text-black relative overflow-hidden flex flex-col items-center justify-center py-20 px-8">
      
      {/* Header */}
      <div className="text-center mt-20 mb-16 relative z-10">
        <h2 className="text-2xl font-['Space_Grotesk'] font-black tracking-[0.2em] uppercase mb-4 text-[#faf8fe]">
          Contact Me
        </h2>
        <p className="text-slate-400 font-['Space_Grotesk'] text-sm max-w-2xl mx-auto leading-relaxed opacity-80 uppercase tracking-widest">
          Have a project in mind? Let’s create something amazing together.
        </p>
      </div>

      {/* Contact Form Card */}
      <div className="w-full max-w-2xl bg-[#121318]/60 backdrop-blur-2xl border border-white/5 p-12 md:p-16 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.05)] relative group z-10">
        
        {/* Floating Icon Decor */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#1a1b23] border border-white/10 rounded-3xl flex items-center justify-center shadow-2xl rotate-12 group-hover:rotate-0 transition-transform duration-500">
          <Send className="text-[#52f9fc]" size={32} />
        </div>

        <form ref={form} className="space-y-10"  onSubmit={sendEmail} >
          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#8A2BE2] uppercase tracking-[0.3em] ml-2">Name</label>
            <input 
              type="text"
              name='name'
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#8A2BE2]/50 focus:bg-white/10 transition-all text-sm font-bold tracking-widest"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#8A2BE2] uppercase tracking-[0.3em] ml-2">Email</label>
            <input 
              type="email" 
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#8A2BE2]/50 focus:bg-white/10 transition-all text-sm font-bold tracking-widest"
            />
          </div>

          <div className="space-y-3">
            <label className="text-[10px] font-black text-[#8A2BE2] uppercase tracking-[0.3em] ml-2">Project Brief</label>
            <textarea 
              name='message'
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Describe About Project or other"
              className="w-full bg-white/5 border border-white/10 px-8 py-6 rounded-3xl text-white placeholder:text-slate-700 focus:outline-none focus:border-[#8A2BE2]/50 focus:bg-white/10 transition-all text-sm font-bold resize-none tracking-widest"
            ></textarea>
          </div>

          <button 
          type="submit"
            className="w-full relative group/btn overflow-hidden bg-[#8A2BE2] text-white py-5 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(138,43,226,0.4)] hover:shadow-[0_25px_50px_rgba(138,43,226,0.6)] transition-all active:scale-95 duration-300 flex items-center justify-center gap-3"
          >
            <span className="relative z-10">Submit</span>
            <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
          </button>
        </form>
      </div>

      {/* Info Badges */}
      <div className="mt-20 flex flex-col md:flex-row items-center gap-6 relative z-10">
        <div className="flex items-center gap-4 bg-[#121318] border border-[#8A2BE2]/30 px-6 py-4 rounded-xl shadow-lg group cursor-pointer hover:bg-white/5 transition-colors">
          <div className="w-10 h-10 rounded-full bg-[#8A2BE2]/10 flex items-center justify-center border border-[#8A2BE2]/20">
            <Mail className="text-[#8A2BE2]" size={18} />
          </div>
          <span className="text-xs font-bold text-white uppercase tracking-widest">farhanahmedmirali@gmail.com</span>
        </div>
        
        <div className="flex items-center gap-4 bg-[#121318] border border-[#52f9fc]/30 px-6 py-4 rounded-xl shadow-lg group">
          <div className="w-10 h-10 rounded-full bg-[#52f9fc]/10 flex items-center justify-center border border-[#52f9fc]/20">
            <MapPin className="text-[#52f9fc]" size={18} />
          </div>
          <span className="text-xs font-bold text-white uppercase tracking-widest">Karachi / Pakistan</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;