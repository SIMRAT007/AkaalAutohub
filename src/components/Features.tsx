import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Features = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const features = [
    {
      icon: "🏆",
      title: "Professional Excellence",
      description: "Our certified technicians use industry-leading techniques and premium products to deliver exceptional results every time.",
      benefits: ["Certified professionals", "Premium products", "Quality guarantee"]
    },
    {
      icon: "⚡",
      title: "Quick Turnaround",
      description: "Efficient service without compromising quality. Most services completed within 2-4 hours with express options available.",
      benefits: ["Express service options", "Same-day completion", "Flexible scheduling"]
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description: "Committed to environmental responsibility with biodegradable products, water recycling, and sustainable practices.",
      benefits: ["Biodegradable products", "Water recycling system", "Carbon-neutral operations"]
    },
    {
      icon: "💎",
      title: "Premium Results",
      description: "Achieve showroom-quality results that protect your investment and maintain your vehicle's value and appearance.",
      benefits: ["Showroom finish", "Paint protection", "Value preservation"]
    },
    {
      icon: "📱",
      title: "Convenient Booking",
      description: "Easy online booking, mobile app, and flexible scheduling options to fit your busy lifestyle.",
      benefits: ["Online booking", "Mobile app", "Flexible scheduling"]
    },
    {
      icon: "🛡️",
      title: "Satisfaction Guarantee",
      description: "100% satisfaction guarantee with comprehensive insurance coverage and warranty on all services.",
      benefits: ["100% satisfaction", "Fully insured", "Service warranty"]
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #5B051F 1px, transparent 0)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 max-w-7xl">
        <motion.div
          ref={ref}
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-6 py-3 bg-[#5B051F]/8 rounded-full text-[#5B051F] text-sm font-semibold mb-8 border border-[#5B051F]/10"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="w-2 h-2 bg-[#5B051F] rounded-full mr-3 animate-pulse"></span>
            Why Choose Us
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Why Choose <span className="text-[#5B051F]">Akaal Autohub</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're committed to providing exceptional car care services that exceed expectations 
            while maintaining the highest standards of quality and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 xl:gap-10 mb-16 md:mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 md:p-10 rounded-3xl bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:scale-105"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="text-4xl md:text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#5B051F] transition-colors leading-tight">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-700">
                    <div className="w-6 h-6 bg-[#5B051F]/10 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <div className="w-2 h-2 bg-[#5B051F] rounded-full"></div>
                    </div>
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <motion.div
          className="bg-gradient-to-br from-[#5B051F] via-[#5B051F] to-red-600 rounded-3xl md:rounded-[2rem] p-8 md:p-16 text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Background decorations */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Success in Numbers</h3>
              <p className="text-white/80 text-lg">Trusted by thousands of satisfied customers</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">1000+</div>
                <div className="text-white/80 text-sm md:text-base">Satisfied Customers</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">5+</div>
                <div className="text-white/80 text-sm md:text-base">Years of Excellence</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">50+</div>
                <div className="text-white/80 text-sm md:text-base">Services Daily</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="space-y-2"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold">99%</div>
                <div className="text-white/80 text-sm md:text-base">Customer Satisfaction</div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Process Section */}
        <motion.div
          className="mt-20 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Simple <span className="text-[#5B051F]">3-Step Process</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Get your car serviced in three simple steps with our streamlined process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Book Online",
                description: "Choose your service and schedule a convenient time through our easy online booking system or mobile app."
              },
              {
                step: "02", 
                title: "Professional Service",
                description: "Our certified technicians provide exceptional service using premium products and advanced techniques."
              },
              {
                step: "03",
                title: "Enjoy Results",
                description: "Drive away with a pristine vehicle that looks and feels like new, guaranteed to exceed your expectations."
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center relative bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#5B051F] to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl md:text-2xl mx-auto mb-6 shadow-lg">
                  {process.step}
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{process.title}</h4>
                <p className="text-gray-600 leading-relaxed text-base md:text-lg">{process.description}</p>
                
                {/* Connection arrow for desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 md:top-12 left-full w-full z-10">
                    <div className="w-8 h-8 bg-[#5B051F]/10 rounded-full flex items-center justify-center transform -translate-x-1/2">
                      <svg className="w-4 h-4 text-[#5B051F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-[#5B051F]/5 rounded-full"
          animate={{ 
            y: [0, -25, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-8 h-8 bg-red-500/10 rounded-full"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -12, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </section>
  );
};

export default Features;