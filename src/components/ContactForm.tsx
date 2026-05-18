export default function ContactForm() {
  // Static mailto form so the site can be deployed as a static export without client JS.
  return (
    <section id="contact" className="bg-[#eaf4ff] py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-slate-900 md:text-5xl">Get In Touch</h2>
        <form action="mailto:chsudip28@gmail.com" method="get" encType="text/plain" className="glass-card space-y-6 border border-sky-200 p-6 md:p-8">
          <input type="text" name="Name" placeholder="Name" required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <input type="email" name="Email" placeholder="Email" className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <input type="text" name="Phone" placeholder="Phone" required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <input type="text" name="Website" placeholder="Website (your URL)" required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <input type="text" name="Subject" placeholder="Subject" className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <textarea name="Message" placeholder="Problem / Message" rows={6} required className="w-full border border-sky-300 bg-white px-4 py-3 text-slate-800 placeholder-slate-400 focus:border-sky-500 focus:outline-none transition-colors" />
          <button type="submit" className="w-full border border-sky-800 bg-sky-800 py-3 font-semibold text-white transition-colors duration-200 hover:bg-sky-900">Send Message</button>
        </form>
      </div>
    </section>
  );
}