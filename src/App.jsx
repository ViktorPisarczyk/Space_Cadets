import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import PlanetDetails from "./components/PlanetDetails";
import PlanetHome from "./components/planetHome";

import Header from "./components/Header";
import Placeholder from "./components/Placeholder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  {
    /*Do not alter this code*/
  }
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    if (init) {
      return;
    }

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="App">
      {init && <Particles options={particlesOptions} />}
      <Header />
      <div className="flex flex-col w-full justify-center h-screen">
        <Routes>
          <Route path="/" element={<PlanetHome />} />
          <Route path="/planet/:name" element={<PlanetDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
