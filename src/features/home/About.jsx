import { motion } from 'framer-motion'

function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-24 px-4 sm:px-6 bg-white dark:bg-midnight-950"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-[200px_1fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto bg-gradient-to-br from-sunset-400 via-sunset-600 to-dusk-600 flex items-center justify-center text-white text-5xl font-bold shadow-xl"
        >
          MS
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-midnight-950 dark:text-sunset-50 mb-4">
            About Me
          </h2>
          <p className="text-midnight-800/90 dark:text-sunset-100/80 leading-relaxed">
            Full-stack developer with 14+ years of experience in .NET, JavaScript, and
            open-source ecosystems, delivering scalable, innovative solutions with real
            business impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default About
