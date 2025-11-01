import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

interface Service {
  icon: string;
  title: string;
  description: string;
  features: string[];
  popular: boolean;
}

interface ServiceDetail {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = (service: Service) => {
    const detailedService = serviceDetails[service.title as keyof typeof serviceDetails];
    setSelectedService(detailedService);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const services = [
    {
      icon: "🔧",
      title: "Basic Services",
      description: "Essential automotive maintenance and repair services to keep your vehicle running smoothly and safely.",
      features: [
        "Tires and Installation", 
        "Fluid Change", 
        "Brake Change", 
        "HVAC Systems", 
        "Suspension Work", 
        "Remote Starter Installation"
      ],
      popular: false
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
      popular: false
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
      popular: false
    },
    {
      icon: "🧽",
      title: "Professional Detailing",
      description: "Comprehensive detailing services for all vehicle types, restoring your vehicle to showroom condition.",
      features: [
        "Interior/Exterior Detailing", 
        "Semi Truck Detailing", 
        "RV Detailing", 
        "Engine Bay Detailing", 
        "Headlight Restoration", 
        "Wheel Polish"
      ],
      popular: false
    }
  ];

  // Detailed service information for dialog
  const serviceDetails = {
    "Basic Services": {
      icon: "🔧",
      title: "Basic Automotive Services",
      description: "Comprehensive maintenance services to ensure your vehicle operates safely and efficiently. Our certified technicians use premium parts and follow manufacturer specifications for all basic automotive needs.",
      features: [
        "Professional Tire Installation & Balancing",
        "Complete Fluid System Changes (Oil, Brake, Transmission)",
        "Advanced Brake System Service & Repair", 
        "HVAC System Diagnosis & Repair",
        "Suspension Component Inspection & Service",
        "Remote Starter Installation & Programming",
      ]
    },
    "Aesthetic Services": {
      icon: "✨",
      title: "Vehicle Aesthetic Enhancement",
      description: "Transform your vehicle's appearance with our premium aesthetic modification services. From performance upgrades to visual enhancements, we help you create the perfect look for your ride.",
      features: [
        "Custom Exhaust System Installation",
        "Professional Lift Kit Installation",
        "Leveling Kit Setup & Alignment", 
        "Wheel Spacer Installation",
        "Premium Alloy Wheel Mounting",
      ]
    },
    "Mechanical Services": {
      icon: "⚙️",
      title: "Advanced Mechanical Repairs",
      description: "Expert mechanical repair services using state-of-the-art diagnostic equipment and genuine parts. Our experienced technicians handle complex repairs to keep your vehicle running at peak performance.",
      features: [
        "Tire Installation",
        "Precision Wheel Balancing & Alignment",
        "Complete Brake System Overhaul", 
        "Advanced Suspension Diagnostics & Repair",
        "Radiator Service & Cooling System Repair",
        "Starter Motor Replacement & Testing",
        "Alternator Repair & Replacement",
        "Engine Diagnostics & Repair",
      ]
    },
    "Professional Detailing": {
      icon: "🧽",
      title: "Premium Detailing Services",
      description: "Restore your vehicle to showroom condition with our comprehensive detailing services. We use professional-grade products and techniques to deliver exceptional results for all vehicle types.",
      features: [
        "Complete Interior & Exterior Detailing",
        "Commercial Semi-Truck Detailing", 
        "RV & Motorhome Detailing",
        "Thorough Engine Bay Cleaning",
        "Professional Headlight Restoration",
        "Premium Wheel Polish & Protection",
        "Paint Correction & Scratch Removal",
        "Paint Sealant Application",
        "Trim Restoration Dressing",
        "Ceramic Coating Application",
        "Undercarriage Detailing",
        "Odour Removal",
        "Headliner Professional Cleaning",
        "Stain Removal & Fabric Protection",
        "Pet Hair Removal"
      ]
    }
  };

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #5B051F 1px, transparent 0)`,
          backgroundSize: '80px 80px'
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
            Premium Car Care Services
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Services <span className="text-[#5B051F]">Offered</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive automotive care solutions from basic maintenance to premium detailing. 
            Professional service with quality guaranteed for every vehicle type.
          </p>
        </motion.div>

        {/* Mobile Scrollable View */}
        <div className="md:hidden mb-8">
          <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 -mx-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer flex-shrink-0 w-80 flex flex-col ${
                  service.popular ? 'ring-2 ring-[#5B051F]/20 shadow-xl' : ''
                }`}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.15 }}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-[#5B051F] to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ Most Popular
                    </div>
                  </div>
                )}

                {/* Service Header */}
                <div className={`${
                  service.popular 
                    ? 'bg-gradient-to-br from-[#5B051F] via-[#5B051F] to-red-600' 
                    : 'bg-gradient-to-br from-[#5B051F] to-red-600'
                } p-6 text-white relative overflow-hidden`}>
                  
                  {/* Background Decorations */}
                  <div className="absolute inset-0 bg-black/5"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-bold leading-tight">{service.title}</h3>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-4 flex-grow flex flex-col">
                  <p className="text-gray-600 leading-relaxed text-sm text-center">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                          <div className="w-4 h-4 bg-[#5B051F]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-1 h-1 bg-[#5B051F] rounded-full"></div>
                          </div>
                          <span className="text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-gray-500 ml-6">
                          +{service.features.length - 4} more services
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* Book Button */}
                  <motion.button
                    onClick={() => openDialog(service)}
                    className={`w-full mt-auto cursor-pointer ${
                      service.popular 
                        ? 'bg-[#5B051F] hover:bg-[#5B051F]/90 shadow-lg' 
                        : 'bg-gradient-to-r from-[#5B051F] to-red-600 hover:from-[#5B051F]/90 hover:to-red-600/90'
                    } text-white py-3 rounded-2xl font-bold text-sm hover:shadow-xl transition-all duration-300`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Book This Service
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              Swipe to see more services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </p>
          </div>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer h-full flex flex-col ${
                service.popular ? 'ring-2 ring-[#5B051F]/20 scale-105 md:scale-100 xl:scale-105 shadow-xl' : 'hover:scale-105'
              }`}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-[#5B051F] to-red-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⭐ Most Popular
                  </div>
                </div>
              )}

              {/* Service Header */}
              <div className={`${
                service.popular 
                  ? 'bg-gradient-to-br from-[#5B051F] via-[#5B051F] to-red-600' 
                  : 'bg-gradient-to-br from-[#5B051F] to-red-600'
              } p-6 md:p-8 text-white relative overflow-hidden`}>
                
                {/* Background Decorations */}
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-3xl md:text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold leading-tight">{service.title}</h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 md:p-8 space-y-6 flex-grow flex flex-col">
                <p className="text-gray-600 leading-relaxed text-sm md:text-base text-center">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 flex-grow">
                  <h4 className="text-base font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-gray-700">
                        <div className="w-5 h-5 bg-[#5B051F]/10 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 bg-[#5B051F] rounded-full"></div>
                        </div>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Book Button */}
                <motion.button
                  onClick={() => openDialog(service)}
                  className={`w-full mt-auto cursor-pointer ${
                    service.popular 
                      ? 'bg-[#5B051F] hover:bg-[#5B051F]/90 shadow-lg' 
                      : 'bg-gradient-to-r from-[#5B051F] to-red-600 hover:from-[#5B051F]/90 hover:to-red-600/90'
                  } text-white py-3 md:py-4 rounded-2xl font-bold text-sm md:text-base hover:shadow-xl transition-all duration-300 group-hover:scale-105`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center gap-2">
                    Book This Service
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

       

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20 md:mt-24"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#5B051F]/5 rounded-full"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-500/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-5xl md:text-6xl mb-6">🎯</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Need Something <span className="text-[#5B051F]">Custom</span>?
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Every vehicle is unique, and so are your needs. Let us create a personalized service package 
                that perfectly matches your requirements and budget.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                  className="bg-[#5B051F] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-[#5B051F]/90 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-2">
                    Get Custom Quote
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </motion.button>
                
                <motion.a
                  href="tel:(639) 637-0009"
                  className="border-2 border-[#5B051F] text-[#5B051F] px-8 md:px-10 py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg hover:bg-[#5B051F] hover:text-white transition-all cursor-pointer inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: (639) 637-0009
                </motion.a>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  ⚡ Quick response within 2 hours • 📋 Free consultation • 💯 Satisfaction guaranteed
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-32 right-10 w-16 h-16 bg-[#5B051F]/5 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-12 h-12 bg-red-500/10 rounded-full"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-[#5B051F]/8 rounded-full"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Service Details Dialog */}
      <AnimatePresence>
        {isDialogOpen && selectedService && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDialog}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[95vh] relative flex flex-col overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeDialog();
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 z-50 cursor-pointer shadow-lg hover:shadow-xl"
                style={{ zIndex: 9999 }}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Dialog Header */}
              <div className="bg-gradient-to-br from-[#5B051F] to-red-600 p-6 md:p-8 text-white relative overflow-hidden flex-shrink-0">
                {/* Background Decorations */}
                <div className="absolute inset-0 bg-black/5"></div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full"></div>
                
                <div className="relative z-10 text-center">
                  <div className="text-4xl md:text-5xl mb-4">
                    {selectedService.icon}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              {/* Dialog Content - Scrollable */}
              <div className="flex-grow overflow-y-auto">
                <div className="p-4 md:p-6 lg:p-8">
                  {/* Features List */}
                  <div className="mb-6">
                    <h4 className="text-base md:text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-5 h-5 md:w-6 md:h-6 bg-[#5B051F]/10 rounded-lg flex items-center justify-center">✨</span>
                      What's Included:
                    </h4>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center gap-2 p-2 md:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="w-3 h-3 md:w-4 md:h-4 bg-[#5B051F]/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-[#5B051F] rounded-full"></div>
                          </div>
                          <span className="text-gray-700 text-xs md:text-sm font-medium leading-relaxed">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center bg-gradient-to-br from-[#5B051F]/5 to-red-500/5 rounded-2xl p-4 md:p-6">
                    <div className="text-xl md:text-2xl lg:text-3xl mb-3">📞</div>
                    <h4 className="text-base md:text-lg lg:text-xl font-bold text-gray-900 mb-2">
                      Ready to Book This Service?
                    </h4>
                    <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
                      Call us now to schedule your appointment and get a free quote.
                    </p>
                    
                    <motion.a
                      href="tel:(639) 637-0009"
                      className="inline-flex items-center justify-center gap-2 bg-[#5B051F] text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl font-bold text-sm md:text-base hover:bg-[#5B051F]/90 transition-all shadow-lg hover:shadow-xl cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="hidden sm:inline">Call Now: </span>(639) 637-0009
                    </motion.a>
                    
                    <div className="mt-3 text-xs text-gray-500">
                      ⚡ Quick response guaranteed
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;