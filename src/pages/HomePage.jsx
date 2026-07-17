import Navbar from '../components/Navbar';
import { Hero, About, Skills, Portfolio, Experience, Contact } from '../features/home';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-midnight-800/70 dark:text-sunset-100/60 bg-white dark:bg-midnight-950">
        © {new Date().getFullYear()} Mridul Srivastava. All rights reserved.
      </footer>
    </>
  );
}
export default HomePage;