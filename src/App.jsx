import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMap from "./components/AboutMap";
import About from "./components/About";
import Video from "./components/Video";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App" id="app">
      <div>
        <Navbar />
        <Hero />
        <About />
        <Video />
        <AboutMap />
        <Footer />
      </div>
    </div>
  );
}

export default App;
