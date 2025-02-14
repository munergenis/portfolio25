import { useState } from "react";
import RevealOnScroll from "../RevealOnScroll";
import emailjs from "emailjs-com";
import LoaderIcon from "../LoaderIcon";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    setIsLoading(true);

    e.preventDefault();
    const form = e.target;

    try {
      const res = await emailjs.sendForm(
        "service_wtj5jfc",
        "template_qex4opo",
        form,
        "zLcUmbnvdXUb8nyzx"
      );
      if (res.status === 200) {
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-xs sm:w-sm md:w-md">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to bg-cyan-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 disabled:opacity-60"
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                aria-label="Your name"
                disabled={isLoading}
                required
              />
            </div>
            <div className="relative">
              <input
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 disabled:opacity-60"
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                aria-label="Your email"
                disabled={isLoading}
                required
              />
            </div>
            <div className="relative">
              <textarea
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 disabled:opacity-60"
                id="message"
                name="message"
                placeholder="Your message"
                aria-label="Your message"
                rows={5}
                disabled={isLoading}
                required
              />
            </div>
            <button
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-md font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] cursor-pointer disabled:bg-blue-500/60 disabled:pointer-events-none"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-full flex justify-center">
                  <LoaderIcon />
                </div>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
export default Contact;
