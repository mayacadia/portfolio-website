import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import LazyImage from './LazyImage'

const Projects = ({ data }) => {
  const { projects } = data
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const categories = [...new Set(projects.map(p => p.category))].filter(cat => cat.toLowerCase() !== 'web')
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute bottom-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  )}
                  {project.sourceUrl && project.sourceUrl !== '#' && (
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full capitalize">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1 }}
                        className="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                )}

                {project.detailedDescription && (
                  <p className="text-sm text-gray-500 dark:text-gray-500 border-t dark:border-gray-700 pt-4">
                    {project.detailedDescription}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 py-12"
          >
            No projects found in this category.
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default Projects
