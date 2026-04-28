"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const mailtoBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0A${formData.message}`;
      window.location.href = `mailto:chsudip28@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${mailtoBody}`;
      setStatus("success");
      setMsg("Opening your email client...");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setMsg("Error opening email client");
    }
  };

  return (
    <section id="contact" className="bg-[#eaf4ff] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-slate-900 md:text-5xl">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="glass-card space-y-6 border border-sky-200 p-6 md:p-8">
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <textarea name="message" placeholder="Message" rows={6} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <button type="submit" className="w-full border border-sky-800 bg-sky-800 py-3 font-semibold text-white transition-colors duration-200 hover:bg-sky-900">{status === "loading" ? "Sending..." : "Send Message"}</button>
          {msg && <div className={status === "success" ? "bg-green-100 text-green-800 p-4 rounded-lg text-center font-inter" : "bg-red-100 text-red-800 p-4 rounded-lg text-center font-inter"}>{msg}</div>}
        </form>
      </div>
    </section>
  );
}