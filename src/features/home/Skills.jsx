import { motion } from 'framer-motion'
import skills from '../../data/skills.json'

function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 py-24 px-4 sm:px-6 bg-sunset-50 dark:bg-midnight-900"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-midnight-950 dark:text-sunset-50 mb-12">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, index) => (
            <motion.div
              key={group.type}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-xl bg-white dark:bg-midnight-950 shadow-sm border border-sunset-200/60 dark:border-midnight-800 p-6"
            >
              <h3 className="font-semibold text-sunset-700 dark:text-sunset-300 mb-3">
                {group.type}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-sunset-100 dark:bg-midnight-800 text-midnight-900 dark:text-sunset-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
