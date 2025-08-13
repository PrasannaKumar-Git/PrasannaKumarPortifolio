import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    icon: FaGithub,
    url: "https://github.com/PrasannaKumar-Git",
    color: "#333",
    label: "GitHub"
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/prasannakumar02",
    color: "#0A66C2",
    label: "LinkedIn"
  },
  {
    icon: FaTwitter,
    url: "https://twitter.com/comrade_xo",
    color: "#1DA1F2",
    label: "Twitter"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-zinc-900">Get in Touch</h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-zinc-900">Let's Connect</h3>
              <p className="text-zinc-600 mb-6">
                I'm always excited to collaborate on interesting projects and discuss new opportunities.
                Feel free to reach out!
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ y: -3 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <social.icon 
                      className="w-7 h-7 transition-colors duration-300" 
                      style={{ color: social.color }}
                    />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 text-xs text-zinc-600 transition-opacity duration-300">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
            <div>
              <a
                href="mailto:your.email@example.com"
                className="group inline-flex items-center space-x-2 text-zinc-700 hover:text-zinc-900"
              >
                <FaEnvelope className="w-5 h-5 text-purple-500" />
                <span className="text-lg group-hover:underline">prasannakumar.mail02@gmail.com</span>
              </a>
              <p className="mt-4 text-zinc-600">
                Based in [Hyderabad]<br />
                Open to global collaborations
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;