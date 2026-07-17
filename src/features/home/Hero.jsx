import { motion } from 'framer-motion'
import resume from '../../data/resume.json'
import experiences from '../../data/experiences.json'

const scrollTo = (id) => (e) => {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Hero() {
  const currentRole = experiences[0]?.title ?? 'Software Engineer'

  return (
    <section
      id="hero"
      className="scroll-mt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-sunset-100 via-sunset-300 to-dusk-600 dark:from-midnight-950 dark:via-midnight-900 dark:to-dusk-700"
    >
      <div className="max-w-3xl text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sunset-800 dark:text-sunset-200 font-medium mb-3"
        >
          Hi, I&apos;m
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-midnight-950 dark:text-sunset-50 mb-4"
        >
          {resume.name}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-sunset-900 dark:text-sunset-300 mb-6"
        >
          {currentRole}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-midnight-900/80 dark:text-sunset-100/80 mb-10 max-w-xl mx-auto"
        >
          Full-stack developer building scalable, business-focused web applications.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#portfolio"
            onClick={scrollTo('portfolio')}
            className="px-6 py-3 rounded-full bg-sunset-600 text-white font-medium hover:bg-sunset-700 transition-colors shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            onClick={scrollTo('contact')}
            className="px-6 py-3 rounded-full border-2 border-sunset-600 text-sunset-900 dark:text-sunset-100 dark:border-sunset-300 font-medium hover:bg-sunset-600/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
