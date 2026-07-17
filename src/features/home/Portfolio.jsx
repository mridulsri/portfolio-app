import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projects from '../../data/projects.json'

function Portfolio() {
  return (
    <section
      id="portfolio"
      className="scroll-mt-20 py-24 px-4 sm:px-6 bg-white dark:bg-midnight-950"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-midnight-950 dark:text-sunset-50 mb-12">
          Portfolio / Projects
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl overflow-hidden border border-sunset-200/60 dark:border-midnight-800 bg-sunset-50 dark:bg-midnight-900 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="h-32 bg-gradient-to-br from-sunset-400 via-sunset-600 to-dusk-600" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-midnight-950 dark:text-sunset-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-midnight-800/80 dark:text-sunset-100/80 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-sunset-100 dark:bg-midnight-800 text-midnight-900 dark:text-sunset-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-midnight-800 dark:text-sunset-200">
                  <a
                    href={project.repoUrl || '#'}
                    aria-label={`${project.title} repository`}
                    className="hover:text-sunset-600 dark:hover:text-sunset-400"
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.liveUrl || '#'}
                    aria-label={`${project.title} live site`}
                    className="hover:text-sunset-600 dark:hover:text-sunset-400"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
