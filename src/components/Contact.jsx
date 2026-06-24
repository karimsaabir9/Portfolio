import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xnjwjajb", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        toast.success('Message sent successfully!');
        form.reset();
      } else {
        setStatus('error');
        toast.error('Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto min-h-screen px-6 py-20 flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-[#555555] dark:text-gray-400 text-lg mb-2">
          Get in Touch
        </p>
        <h1 className="text-4xl md:text-[3.5rem] mb-12 font-bold dark:text-white">
          Contact Me
        </h1>
      </motion.div>

      {/* Contact Info Links */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-6 md:gap-12 mb-12 p-6 border border-gray-300 dark:border-gray-700 rounded-[2rem] bg-white dark:bg-[#1e293b] shadow-sm w-fit"
      >
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-envelope text-2xl dark:text-gray-300"></i>
          <a
            href="mailto:karimsapir9@gmail.com"
            className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            karimsapir9@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <i className="fa-brands fa-linkedin text-2xl dark:text-gray-300"></i>
          <a
            href="https://www.linkedin.com/in/sabir-salad-hassan-36260819a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>

      {/* Contact Form Container */}
      <div className="w-full relative min-h-[500px]">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="flex flex-col items-center justify-center bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-[2.5rem] border border-green-500 shadow-xl text-center w-full min-h-[500px]"
            >
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                <i className="fa-solid fa-check text-4xl text-green-600"></i>
              </div>
              <h2 className="text-3xl font-bold mb-4 dark:text-white">Thank You!</h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                Your message has been sent successfully. I will get back to you soon.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
              >
                Send another
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              onSubmit={handleFormSubmit}
              className="w-full bg-white dark:bg-[#1e293b] p-8 md:p-12 rounded-[2.5rem] border border-gray-300 dark:border-gray-700 shadow-xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700 dark:text-gray-300 ml-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-gray-700 dark:text-gray-300 ml-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    className="p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mb-8">
                <label className="font-semibold text-gray-700 dark:text-gray-300 ml-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  className="p-4 rounded-2xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-[#0f172a] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full bg-black dark:bg-white text-white dark:text-black font-bold py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-xl flex items-center justify-center gap-3 ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'submitting' ? (
                  <>
                    <i className="fa-solid fa-spinner animate-spin"></i>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </motion.button>
              {status === 'error' && (
                <p className="text-red-500 text-center mt-4">Something went wrong! Please try again.</p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
