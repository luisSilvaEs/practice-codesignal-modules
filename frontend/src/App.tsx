import "./App.css";
import Ping from "./Ping";
import ProblemPage from "./pages/ProblemPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <ProblemPage />
      </ThemeProvider>
    </>
  );
}

export default App;
