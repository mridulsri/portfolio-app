import { motion } from 'framer-motion'
import experiences from '../../data/experiences.json'

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-24 px-4 sm:px-6 bg-sunset-50 dark:bg-midnight-900"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-midnight-950 dark:text-sunset-50 mb-12">
          Experience
        </h2>
        <div className="relative border-l-2 border-sunset-300 dark:border-midnight-800 pl-8 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.startDate}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-sunset-500 border-4 border-sunset-50 dark:border-midnight-900" />
              <p className="text-xs font-medium text-sunset-700 dark:text-sunset-400 mb-1">
                {exp.startDate} — {exp.endDate}
              </p>
              <h3 className="text-lg font-semibold text-midnight-950 dark:text-sunset-50">
                {exp.title}
              </h3>
              <p className="text-sm font-medium text-midnight-800/80 dark:text-sunset-200/80 mb-2">
                {exp.company} · {exp.location}
              </p>
              <p className="text-sm text-midnight-800/80 dark:text-sunset-100/80 mb-2">
                {exp.description}
              </p>
              <ul className="list-disc list-inside text-sm text-midnight-800/80 dark:text-sunset-100/70 space-y-1">
                {exp.responsibilities?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
