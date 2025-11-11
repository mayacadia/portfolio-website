import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar } from 'react-icons/fi'

const Experience = ({ data }) => {
  const { experience } = data
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="section-container bg-gray-50 dark:bg-dark-lighter/50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary-500 to-purple-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative grid md:grid-cols-2 gap-8 ${
                    index % 2 === 0 ? '' : 'md:text-right'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 top-6 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark z-10">
                    <div className="absolute inset-0 bg-primary-500 rounded-full animate-ping opacity-75"></div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-2'}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="card p-6 h-full"
                    >
                      <div className="flex items-center space-x-2 text-primary-500 mb-3">
                        <FiCalendar />
                        <span className="font-semibold">{exp.duration}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-2">{exp.position}</h3>
                      
                      <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mb-4">
                        <FiBriefcase size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {exp.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience
