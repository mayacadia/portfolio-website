import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBook } from 'react-icons/fi'

const About = ({ data }) => {
  const { about, education } = data
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-container bg-gray-50 dark:bg-dark-lighter/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {about.bio.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3 mb-6">
              <FiBook className="text-primary-500 text-2xl" />
              <h3 className="text-2xl font-bold font-display">Education</h3>
            </div>
            
            {education.map((edu, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="card p-6"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-xl font-bold text-primary-500">{edu.degree}</h4>
                  <span className="text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-full">
                    {edu.years}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 font-medium">
                  {edu.institution}
                </p>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="card p-6 bg-gradient-to-br from-primary-500/10 to-purple-500/10"
            >
              <h4 className="text-lg font-bold mb-3">What I Bring</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Strong problem-solving and analytical skills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Excellent communication and teamwork</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Passion for continuous learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">✓</span>
                  <span>Attention to detail and code quality</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About
