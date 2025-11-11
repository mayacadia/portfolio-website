import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiJavascript, SiTypescript, SiPython, SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiPostgresql, SiTailwindcss, SiGit, SiGithub, SiWordpress, SiDocker, SiAmazonaws, SiGraphql } from 'react-icons/si'
import { FiCode, FiServer, FiTool } from 'react-icons/fi'

const Skills = ({ data }) => {
  const { skills, techStack, currentlyLearning } = data
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Icon mapping for tech stack
  const techIcons = {
    'JavaScript': SiJavascript,
    'TypeScript': SiTypescript,
    'Python': SiPython,
    'React': SiReact,
    'Next.js': SiNextdotjs,
    'Node.js': SiNodedotjs,
    'Express': SiExpress,
    'PostgreSQL': SiPostgresql,
    'Tailwind CSS': SiTailwindcss,
    'Git': SiGit,
    'GitHub': SiGithub,
    'WordPress': SiWordpress,
  }

  const getIcon = (techName) => {
    for (const [key, icon] of Object.entries(techIcons)) {
      if (techName.toLowerCase().includes(key.toLowerCase())) {
        return icon
      }
    }
    return FiCode
  }

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

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tech Stack</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiCode className="text-primary-500 text-xl" />
                <h4 className="font-bold">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.languages.map((tech, index) => {
                  const Icon = getIcon(tech)
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="p-3 bg-gray-100 dark:bg-dark-light rounded-lg">
                        <Icon className="text-2xl text-primary-500" />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{tech}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Frontend */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiCode className="text-primary-500 text-xl" />
                <h4 className="font-bold">Frontend</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.frontend.map((tech, index) => {
                  const Icon = getIcon(tech)
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="p-3 bg-gray-100 dark:bg-dark-light rounded-lg">
                        <Icon className="text-2xl text-primary-500" />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{tech}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Backend */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiServer className="text-primary-500 text-xl" />
                <h4 className="font-bold">Backend</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.backend.map((tech, index) => {
                  const Icon = getIcon(tech)
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="p-3 bg-gray-100 dark:bg-dark-light rounded-lg">
                        <Icon className="text-2xl text-primary-500" />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{tech}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Tools & Automation Row */}
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {/* Tools */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiTool className="text-primary-500 text-xl" />
                <h4 className="font-bold">Tools</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.tools.map((tech, index) => {
                  const Icon = getIcon(tech)
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="p-3 bg-gray-100 dark:bg-dark-light rounded-lg">
                        <Icon className="text-2xl text-primary-500" />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{tech}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Automation */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiTool className="text-primary-500 text-xl" />
                <h4 className="font-bold">Automation</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.automation.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="flex flex-col items-center gap-1"
                  >
                    <div className="p-3 bg-gray-100 dark:bg-dark-light rounded-lg">
                      <FiTool className="text-2xl text-primary-500" />
                    </div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{tech}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CMS */}
            <div className="card p-6">
              <div className="flex items-center gap-2 mb-4">
                <FiTool className="text-primary-500 text-xl" />
                <h4 className="font-bold">CMS</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {techStack.cms.map((tech, index) => {
                  const Icon = getIcon(tech)
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="flex flex-col items-center gap-1"
                    >
                      <div className="p-3 bg-gray-100 dark:bg-dark-light rounded-lg">
                        <Icon className="text-2xl text-primary-500" />
                      </div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{tech}</span>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 card p-8 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20"
        >
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">
              📚 Currently Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Always expanding my knowledge and staying up-to-date
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {currentlyLearning.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="px-4 py-2 bg-white dark:bg-dark-lighter rounded-full border-2 border-primary-200 dark:border-primary-800 shadow-sm hover:shadow-md transition-all cursor-default"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills
