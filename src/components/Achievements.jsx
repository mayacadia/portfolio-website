import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiTrophy, FiStar } from 'react-icons/fi'

const Achievements = ({ data }) => {
  const { achievements } = data
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const icons = [FiTrophy, FiAward, FiStar]

  return (
    <section id="achievements" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">
            Achievements & <span className="gradient-text">Awards</span>
          </h2>
          <p className="section-subtitle">Recognition and accomplishments</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="card p-6 text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-4 p-4 bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-full"
                >
                  <Icon className="text-primary-500 text-4xl" />
                </motion.div>
                
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                
                <p className="text-primary-500 font-semibold mb-2">
                  {achievement.organization}
                </p>
                
                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-dark-light text-sm rounded-full mb-3">
                  {achievement.year}
                </span>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Achievements
