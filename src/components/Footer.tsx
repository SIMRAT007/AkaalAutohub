import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Basic Services", href: "#services" },
        { name: "Aesthetic Services", href: "#services" }, 
        { name: "Mechanical Services", href: "#services" },
        { name: "Professional Detailing", href: "#services" }
      ]
    },
    {
      title: "Navigation",
      links: [
        { name: "Home", href: "#home" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-[#5B051F] to-gray-900 text-white relative overflow-hidden rounded-t-3xl md:rounded-t-[3rem]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '150px 150px'
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-28">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1">
                <img 
                  src="/src/assets/logo.png" 
                  alt="Akaal Autohub Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                Akaal Autohub
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              Your trusted partner for premium car care solutions. We're committed to keeping your vehicle looking its best with professional services and exceptional customer care.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 text-sm md:text-base">
              <div className="flex items-start space-x-3">
                <span className="text-[#5B051F] text-lg mt-0.5">📍</span>
                <span className="text-gray-300">Unit 10, 331 60th St E, Saskatoon, SK S7K 8C8</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#5B051F] text-lg">📞</span>
                <a href="tel:(639) 637-0009" className="text-gray-300 hover:text-[#5B051F] transition-colors">(639) 637-0009</a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[#5B051F] text-lg">✉️</span>
                <a href="mailto:info@akaalautohub.ca" className="text-gray-300 hover:text-[#5B051F] transition-colors">info@akaalautohub.ca</a>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg md:text-xl font-bold mb-6 text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-[#5B051F] transition-colors text-sm md:text-base leading-relaxed"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        {/* Copyright */}
        <motion.div
          className="mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-700"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-sm md:text-base text-gray-300 mb-2">
              © {currentYear} Akaal Autohub. All rights reserved.
            </p>
            <p className="text-xs md:text-sm text-gray-400">
              Professional Car Care & Detailing Services in Saskatoon, SK
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;