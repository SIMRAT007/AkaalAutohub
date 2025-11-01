import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="home" className="min-h-screen bg-white relative overflow-hidden pt-16 md:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #5B051F 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/30 to-white" />

      <div className="container mx-auto px-4 py-8 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <motion.div
            ref={ref}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#5B051F]/10 rounded-full text-[#5B051F] text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              ✨ Premium Car Care Services
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-[#5B051F] block">
                Your Car
              </span>
              <span className="text-gray-800 block">
                Deserves the
              </span>
              <span className="bg-gradient-to-r from-[#5B051F] to-red-600 bg-clip-text text-transparent block">
                Best Care
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience professional car washing, detailing, and maintenance services with cutting-edge technology and eco-friendly solutions.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a
                href="#contact"
                className="bg-[#5B051F] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5B051F]/90 transition-all shadow-lg hover:shadow-xl group cursor-pointer inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Book Service Now
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </motion.a>
              <motion.a
                href="#services"
                className="border-2 border-[#5B051F] text-[#5B051F] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#5B051F] hover:text-white transition-all cursor-pointer inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 md:gap-8 pt-8 md:pt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-[#5B051F]">1000+</div>
                <div className="text-gray-600 text-xs md:text-sm font-medium">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-[#5B051F]">5+</div>
                <div className="text-gray-600 text-xs md:text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/50 rounded-xl backdrop-blur-sm border border-gray-100">
                <div className="text-2xl md:text-3xl font-bold text-[#5B051F]">24/7</div>
                <div className="text-gray-600 text-xs md:text-sm font-medium">Service Available</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Car */}
          <motion.div
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] relative"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#5B051F]/5 to-red-500/5 rounded-3xl transform rotate-3" />
            <div className="absolute inset-0 bg-gradient-to-tl from-[#5B051F]/5 to-red-500/5 rounded-3xl transform -rotate-2" />
            
            <div className="relative z-10 w-full h-full">
              <div className="sketchfab-embed-wrapper w-full h-full">
                <iframe 
                  title="Akaal Autohub" 
                  frameBorder="0" 
                  allowFullScreen 
                  allow="autoplay; fullscreen; xr-spatial-tracking" 
                  src="https://sketchfab.com/models/91b5815c64eb43b0a88f6fdb9df774e4/embed?autospin=1&autostart=1&transparent=1&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&ui_theme=dark&ui_color=ffffff&dnt=1"
                  className="w-[100%] h-full rounded-2xl"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 md:w-20 md:h-20 bg-[#5B051F]/10 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-12 h-12 md:w-16 md:h-16 bg-red-500/10 rounded-full"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -180, -360],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-8 h-8 md:w-12 md:h-12 bg-[#5B051F]/15 rounded-full"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -15, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Additional decorative elements for larger screens */}
        <motion.div
          className="hidden lg:block absolute top-1/3 right-10 w-24 h-24 border-2 border-[#5B051F]/20 rounded-full"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="hidden xl:block absolute bottom-1/3 left-20 w-32 h-32 border border-red-500/10 rounded-full"
          animate={{ 
            rotate: [360, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-[#5B051F]/30 rounded-full flex justify-center"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-[#5B051F] rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;