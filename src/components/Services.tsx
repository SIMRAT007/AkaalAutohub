import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
}

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [flippedCard, setFlippedCard] = useState<number | null>(2);

  const services: Service[] = [
    {
      icon: "🔧",
      title: "Basic Services",
      description: "Essential automotive maintenance and repair services to keep your vehicle running smoothly and safely. ",
      features: [
        "Tires and Installation", 
        "Fluid Change", 
        "Brake Change", 
        "HVAC Systems", 
        "Suspension Work", 
        "Remote Starter Installation"
      ],
      price: "Starting from $99"
    },
    {
      icon: "✨",
      title: "Aesthetic Services",
      description: "Transform your vehicle's appearance with premium aesthetic modifications and enhancements.",
      features: [
        "Exhaust Replace", 
        "Lift Kit & Leveling Kits", 
        "Spacers Installation", 
        "Alloy Wheels"
      ],
      price: "Starting from $299"
    },
    {
      icon: "⚙️",
      title: "Mechanical Services",
      description: "Professional mechanical repairs and installations for optimal vehicle performance and reliability.",
      features: [
        "Tire Installation & Wheel Balance", 
        "Brake Change", 
        "Suspension Repair", 
        "Radiator Service", 
        "Starter Replacement", 
        "Alternator Change & Repair"
      ],
      price: "Starting from $149"
    },
    {
      icon: "🧽",
      title: "Professional Detailing",
      description: "Comprehensive detailing services for all vehicle types, restoring your vehicle to showroom condition.",
      features: [
        "Interior/Exterior Detailing", 
        "Semi Truck Detailing", 
        "RV Detailing & Wheel Polish", 
        "Engine Bay Detailing", 
        "Headlight Restoration", 
        "Paint Correction and Sealant",
        "Tim Dressing and HVAC",
        "Undercarriage Cleaning | Odor Removal",
        "Headliner Cleaning | Stain Removal | Pet Hair Removal",
        "2 Step Polishing | Undercoating | Rust Proofing"
      ],
      price: "Starting from $199"
    }
  ];

  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <style dangerouslySetInnerHTML={{
        __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `
      }} />
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#5B051F]/10 rounded-full text-[#5B051F] text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            🔧 Professional Services
          </motion.div>

            <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Car <span className="bg-gradient-to-r from-[#5B051F] to-red-600 bg-clip-text text-transparent imperial">Services</span>
          </h2>
            </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block md:hidden">Swipe left to explore more services</span>
            <span className="hidden md:block">Click on any service card to discover detailed features and pricing</span>
          </motion.p>
        </motion.div>

        {/* Services Grid with Flip Cards - Horizontal Scroll on Mobile */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          <div className="flex md:contents gap-6 md:gap-0 overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory md:snap-none scrollbar-hide px-4 md:px-0 -mx-4 md:mx-0">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="relative h-115 cursor-pointer flex-shrink-0 w-80 md:w-auto snap-start"
                style={{ perspective: '1000px' }}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                onClick={() => handleCardClick(index)}
              >
              <div 
                className={`relative w-full h-full transition-transform duration-700`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCard === index ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden relative"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Decorative Background Elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    {/* Top right circle */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#5B051F]/5 rounded-full"></div>
                    {/* Bottom left circle */}
                    <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-red-500/5 rounded-full"></div>
                    {/* Small accent circles */}
                    <div className="absolute top-8 right-8 w-3 h-3 bg-[#5B051F]/10 rounded-full"></div>
                    <div className="absolute bottom-16 left-8 w-2 h-2 bg-red-500/15 rounded-full"></div>
                    {/* Subtle grid pattern */}
                    <div className="absolute inset-0 opacity-5" style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #5B051F 1px, transparent 0)`,
                      backgroundSize: '24px 24px'
                    }}></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 h-full flex flex-col justify-between relative z-0">
                    <div className="flex-grow">
                      {/* Icon with background */}
                      <div className="relative mb-4 mt-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-2">
                          <div className="text-4xl">{service.icon}</div>
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#5B051F]/10 rounded-full"></div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 overflow-hidden mt-2" style={{ 
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical' as const
                      }}>{service.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed overflow-hidden mt-3" style={{ 
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical' as const
                      }}>{service.description}</p>
                    </div>
                    
                    <div className="mt-4 relative">
                      {/* Decorative line */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#5B051F]/20 to-transparent"></div>
                      
                      {/* Click to see details with enhanced styling */}
                      <div className="text-xs text-gray-500 flex items-center justify-center gap-1 mt-4 rounded-full py-2 px-4 border border-red-100 backdrop-blur-sm bg-white/30">
                        <div className="w-2 h-2 bg-[#5B051F]/20 rounded-full animate-pulse"></div>
                        <span>Click to see details</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                      
                      {/* Bottom decorative elements */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-[#5B051F]/20 rounded-full"></div>
                          <div className="w-1 h-1 bg-red-500/20 rounded-full"></div>
                          <div className="w-1 h-1 bg-[#5B051F]/20 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div 
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#5B051F] to-red-600 rounded-2xl shadow-xl overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="p-6 h-full flex flex-col text-white">
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-1">{service.icon}</div>
                      <h3 className="text-base font-bold overflow-hidden" style={{ 
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical' as const
                      }}>{service.title}</h3>
                    </div>
                    
                    <div className="flex-grow overflow-y-auto">
                      <h4 className="font-semibold mb-3 text-xs">Services Include:</h4>
                      <ul className="space-y-1.5">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-xs leading-tight">
                            <div className="w-1 h-1 bg-white rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/20 z-40">
                      {/* <div className="text-white/90 font-bold text-sm mb-2">{service.price}</div> */}
                      <a
                        href="tel:+16396370009"
                        className="block w-full bg-white text-[#5B051F] py-3 px-4 rounded-lg font-bold text-center hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-200 text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl z-40 relative"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Force the call to work
                          window.location.href = "tel:+16396370009";
                        }}
                      >
                        <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Call Now - (639) 637-0009</span>
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
            <p className="text-gray-600 mb-6">Contact our experts for personalized service recommendations</p>
            <a
              href="tel:+16396370009"
              className="inline-flex items-center gap-2 bg-[#5B051F] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#5B051F]/90 transition-all"
              onClick={() => {
                // Force the call to work
                window.location.href = "tel:+16396370009";
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (639) 637-0009
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;