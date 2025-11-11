import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiMapPin, FiDownload } from 'react-icons/fi'

const Hero = ({ data }) => {
  const { personal, social, stats } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  const socialIcons = {
    GitHub: FiGithub,
    LinkedIn: FiLinkedin,
    Twitter: FiTwitter,
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="space-y-2">
            <p className="text-primary-500 font-semibold text-lg">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display">
              {personal.name}
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-text">
              {personal.title}
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-xl"
          >
            {personal.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <FiMapPin className="text-primary-500" />
            <span>{personal.location}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary inline-flex items-center space-x-2">
              <FiMail />
              <span>Get In Touch</span>
            </a>
            <a href={personal.resume} className="btn-secondary inline-flex items-center space-x-2">
              <FiDownload />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex space-x-4">
            {social.map((link) => {
              const Icon = socialIcons[link.name]
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-gray-100 dark:bg-dark-lighter rounded-lg hover:bg-primary-500 hover:text-white transition-colors"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stats.yearsExperience}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stats.projectsCompleted}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">{stats.clientsServed}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          variants={itemVariants}
          className="relative lg:justify-self-end"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-80 h-80 md:w-96 md:h-96 mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-dark-lighter shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center p-2"
        >
          <motion.div className="w-1 h-3 bg-primary-500 rounded-full"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
