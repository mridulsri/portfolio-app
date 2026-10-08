import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import ThemeToggle from './features/theme/ThemeToggle';

function App() {
  return (
     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 p-8">
      <header className="flex justify-between items-center max-w-4xl mx-auto mb-12">
        {/* <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Portfolio</h1> */}
        <ThemeToggle />
      </header>
      <main className="max-w-4xl mx-auto">
         <AppRoutes />
      </main>
    </div>
  );
}

export default App;
