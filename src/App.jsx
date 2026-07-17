import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
      <div className="min-h-screen bg-white dark:bg-midnight-950 text-midnight-950 dark:text-sunset-50 transition-colors duration-300">
        <AppRoutes />
      </div>
  );
}

export default App;
