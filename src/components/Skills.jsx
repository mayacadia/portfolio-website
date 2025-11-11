import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = ({ data }) => {
  const { skills } = data
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="space-y-2 p-4 rounded-lg bg-white dark:bg-dark-lighter border border-transparent hover:border-primary-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <motion.span 
                  className="font-semibold text-gray-800 dark:text-gray-200"
                  whileHover={{ scale: 1.1, color: '#0ea5e9' }}
                >
                  {skill.name}
                </motion.span>
                <motion.span 
                  className="text-primary-500 font-bold"
                  whileHover={{ scale: 1.2 }}
                >
                  {skill.level}%
                </motion.span>
              </div>
              
              <div className="h-3 bg-gray-200 dark:bg-dark-light rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 rounded-full relative"
                >
                  <motion.div
                    animate={{ x: [0, 20, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">💻</div>
            <h3 className="font-bold text-lg mb-2">Frontend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              React, Next.js, TypeScript, Tailwind CSS
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">⚙️</div>
            <h3 className="font-bold text-lg mb-2">Backend</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Node.js, Express, Python, PostgreSQL
            </p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-4xl mb-3">🔧</div>
            <h3 className="font-bold text-lg mb-2">Tools & Others</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Git, n8n, Zapier, WordPress, GoHighLevel
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
