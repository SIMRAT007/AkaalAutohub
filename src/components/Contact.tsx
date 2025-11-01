import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    vehicle: '',
    date: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.service.trim()) {
      newErrors.service = 'Please select a service type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('idle');
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE', // Replace with your Web3Forms access key
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          vehicle: formData.vehicle,
          date: formData.date,
          message: formData.message,
          subject: `New Service Booking Request from ${formData.name}`,
          from_name: 'Akaal Autohub Website',
          to_name: 'Akaal Autohub Team'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          vehicle: '',
          date: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    'Basic Services',
    'Aesthetic Services',
    'Mechanical Services',
    'Professional Detailing',
    'Custom Package'
  ];

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      details: ["Unit 10, 331 60th St E", "Saskatoon, SK S7K 8C8"]
    },
    {
      icon: "📞",
      title: "Phone",
      details: ["(639) 637-0009","Quick response guaranteed"]
    },
    {
      icon: "✉️",
      title: "Email",
      details: ["info@akaalautohub.ca",  "Professional service team"]
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #5B051F 1px, transparent 0)`,
          backgroundSize: '140px 140px'
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
            Book Your Service
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to <span className="text-[#5B051F]">Transform</span> Your Car?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Schedule your appointment today and experience the Akaal Autohub difference. 
            Professional service, premium results, guaranteed satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Enhanced Contact Form */}
          <motion.div
            className="bg-white rounded-3xl md:rounded-[2rem] shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden border border-gray-100"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#5B051F]/5 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-red-500/5 rounded-full"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="text-4xl md:text-5xl mb-4">📋</div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Schedule Your Appointment</h3>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 2 hours</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* General Validation Error */}
                {Object.keys(errors).length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border border-red-200 rounded-2xl"
                  >
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-800 font-medium text-sm">
                        Please fix the errors below to submit your booking request.
                      </p>
                    </div>
                  </motion.div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white ${
                        errors.name 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#5B051F]'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white ${
                        errors.email 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#5B051F]'
                      }`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white ${
                        errors.phone 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#5B051F]'
                      }`}
                      placeholder="(639) 637-0009"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5B051F] focus:border-transparent transition-all bg-gray-50/50 hover:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Service Type *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-4 border rounded-2xl focus:ring-2 focus:border-transparent transition-all bg-gray-50/50 hover:bg-white ${
                        errors.service 
                          ? 'border-red-300 focus:ring-red-500' 
                          : 'border-gray-200 focus:ring-[#5B051F]'
                      }`}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs font-medium flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.service}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-gray-700 text-sm font-semibold">
                      Vehicle Type
                    </label>
                    <input
                      type="text"
                      name="vehicle"
                      required
                      value={formData.vehicle}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5B051F] focus:border-transparent transition-all bg-gray-50/50 hover:bg-white"
                      placeholder="e.g., 2020 Honda Civic"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-[#5B051F] focus:border-transparent transition-all bg-gray-50/50 hover:bg-white resize-none"
                    placeholder="Any special requests, questions, or additional details..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : submitStatus === 'success'
                      ? 'bg-green-600 hover:bg-green-700'
                      : submitStatus === 'error'
                      ? 'bg-red-600 hover:bg-red-700'
                      : 'bg-gradient-to-r from-[#5B051F] to-red-600 hover:shadow-xl'
                  } text-white py-4 md:py-5 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 group`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Request...
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Request Sent Successfully!
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        Try Again
                      </>
                    ) : (
                      <>
                        Book My Service Now
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-green-50 border border-green-200 rounded-2xl"
                  >
                    <p className="text-green-800 font-medium">
                      ✅ Thank you! We've received your booking request and will contact you within 2 hours.
                    </p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-4 bg-red-50 border border-red-200 rounded-2xl"
                  >
                    <p className="text-red-800 font-medium">
                      ❌ Something went wrong. Please try again or call us directly at (639) 637-0009.
                    </p>
                  </motion.div>
                )}

                <div className="text-center pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    🔒 Your information is secure • ⚡ Quick response within 2 hours • 📞 Free consultation
                  </p>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Enhanced Contact Information */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <div className="flex items-start space-x-4 md:space-x-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#5B051F]/10 rounded-2xl flex items-center justify-center text-2xl md:text-3xl group-hover:bg-[#5B051F]/20 transition-colors">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5B051F] transition-colors">{info.title}</h4>
                      <div className="space-y-2">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-base leading-relaxed">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Map Section */}
            <motion.div
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 bg-[#5B051F]/10 rounded-lg flex items-center justify-center">🗺️</span>
                Find Our Location
              </h4>
              <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.374726935577!2d-106.66850410677742!3d52.187039199717645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f7a09d1278a1%3A0x7ae0057d0f51338b!2sAKAAL%20AUTOHUB!5e1!3m2!1sen!2sin!4v1762004019725!5m2!1sen!2sin" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 md:h-60"
                />
              </div>
            </motion.div>

            {/* Enhanced Benefits Section */}
          
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 bg-[#5B051F]/5 rounded-full"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{ 
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-16 w-8 h-8 bg-red-500/10 rounded-full"
          animate={{ 
            x: [0, 25, 0],
            y: [0, -15, 0]
          }}
          transition={{ 
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-6 h-6 bg-[#5B051F]/8 rounded-full"
          animate={{ 
            scale: [1, 1.6, 1],
            opacity: [0.3, 0.8, 0.3]
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

export default Contact;