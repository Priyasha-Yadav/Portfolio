import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const form = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    useEffect(() => {
        const onScroll = () => {
            const contactSection = document.getElementById('contact');
            if (contactSection && window.scrollY + window.innerHeight >= contactSection.offsetTop) {
                setIsVisible(true);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setSubmitStatus(null);

        emailjs
            .sendForm(
                "service_32b5lsh",
                "template_320mzaj",
                form.current,
                "jD0YSS1N5xYf-ycvy"
            )
            .then(
                (result) => {
                    console.log("Email sent successfully:", result.text);
                    setSubmitStatus({
                        success: true,
                        message: "Message sent successfully! I'll get back to you soon."
                    });
                    form.current?.reset();
                },
                (error) => {
                    console.log("Email failed to send:", error.text);
                    setSubmitStatus({
                        success: false,
                        message: "Failed to send message. Please try again or contact me directly."
                    });
                }
            )
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent shadow-lg"
            >
                Get In Touch
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-purple-400">Contact Information</h3>
                    <div className="space-y-6">
                        <div>
                            <p className="text-gray-400 mb-1">Email</p>
                            <a href="mailto:priyasha.yadav.cg@gmail.com" className="text-white hover:text-purple-300 transition-colors">
                                priyasha.yadav.cg@gmail.com
                            </a>
                        </div>

                        <div>
                            <p className="text-gray-400 mb-1">Location</p>
                            <p className="text-white">Gujarat, India</p>
                        </div>

                        <div>
                            <p className="text-gray-400 mb-3">Social Profiles</p>
                            <div className="flex space-x-4">
                                <a href="https://github.com/Priyasha-Yadav" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    {/* GitHub Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                                </a>
                                <a href="https://www.linkedin.com/in/priyasha-yadav/" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    {/* LinkedIn Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
                                <a href="https://x.com/YadavPriyasha" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-600 transition-colors">
                                    {/* X (Twitter) Icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
                    id="contact-form"
                >
                    <h3 className="text-2xl font-semibold mb-6 text-purple-400">Send a Message</h3>

                    {submitStatus ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`p-4 rounded-lg mb-6 ${submitStatus.success ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}
                        >
                            {submitStatus.message}
                        </motion.div>
                    ) : null}

                    <form ref={form} onSubmit={sendEmail} className="space-y-4">
                        {/* Form Fields (Name, Email, Message) */}
                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Your Email"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="w-full px-4 py-2 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                                placeholder="Write your message here..."
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center justify-center"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : null}
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </motion.button>
                    </form>

                    {/* Download Resume Button */}
                    <div className="mt-6">
                        <a
                            href="https://drive.google.com/drive/folders/1tkjzl52oPiK3DNTzhKB1c4vpwY9t-Seh"
                            download="Priyasha_Yadav_Resume.pdf"
                            target="_blank"
                            className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 flex items-center justify-center"
                        >
                            View Resume on Google Drive
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ContactForm;
