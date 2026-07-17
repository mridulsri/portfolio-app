import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'

// TODO: replace placeholder contact details with real values
const EMAIL = 'mridul_gzp@yahoo.com'
const LINKEDIN_URL = 'https://linkedin.com/in/mridulsri'
const GITHUB_URL = 'https://github.com/mridulsri'

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24 px-4 sm:px-6 bg-gradient-to-br from-sunset-200 via-sunset-400 to-dusk-600 dark:from-midnight-950 dark:via-midnight-900 dark:to-dusk-700"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold text-midnight-950 dark:text-sunset-50 mb-4">
          Let&apos;s Connect
        </h2>
        <p className="text-midnight-900/80 dark:text-sunset-100/80 mb-8">
          Have a project in mind or just want to say hello? My inbox is always open.
        </p>
        <a
          href={`mailto:${EMAIL}`}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-midnight-950 dark:bg-sunset-500 text-white font-medium hover:opacity-90 transition-opacity mb-8"
        >
          <FaEnvelope size={16} />
          Say Hello
        </a>
        <div className="flex items-center justify-center gap-6 text-midnight-950 dark:text-sunset-100">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-sunset-800 dark:hover:text-sunset-300"
          >
            <FaLinkedin size={26} />
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-sunset-800 dark:hover:text-sunset-300"
          >
            <FaGithub size={26} />
          </a>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
