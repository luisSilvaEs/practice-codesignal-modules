import "./App.css";
import Ping from "./Ping";
import ProblemPage from "./pages/ProblemPage";
import { ThemeProvider } from "./context/ThemeContext";
import { NavigationProvider } from "./context/NavigationContext";

function App() {
  return (
    <>
      <NavigationProvider>
        <ThemeProvider>
          <ProblemPage />
        </ThemeProvider>
      </NavigationProvider>
    </>
  );
}

export default App;
