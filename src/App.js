import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Realisations from "./components/Realisations";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Realisations />
      <Contact />
      <ToastContainer />
    </div>
  );
}

export default App;
