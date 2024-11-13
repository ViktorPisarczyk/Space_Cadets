/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Placeholder from "./components/Placeholder";
import Contact from "./components/Contact";


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
<<<<<<< HEAD
      <h1>Build me</h1>
     
=======
      <Header />
      <Routes>
        <Route path="/home" element={<Placeholder name="Home" />} />
        <Route path="/mercury" element={<Placeholder name="Mercury" />} />
        <Route path="/venus" element={<Placeholder name="Venus" />} />
        <Route path="/earth" element={<Placeholder name="Earth" />} />
        <Route path="/mars" element={<Placeholder name="Mars" />} />
        <Route path="/jupiter" element={<Placeholder name="Jupiter" />} />
        <Route path="/saturn" element={<Placeholder name="Saturn" />} />
        <Route path="/uranus" element={<Placeholder name="Uranus" />} />
        <Route path="/neptune" element={<Placeholder name="Neptune" />} />
        <Route path="/team" element={<Placeholder name="Team" />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
>>>>>>> development
    </div>
  );
}

export default App;
