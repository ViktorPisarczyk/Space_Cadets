import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import PlanetDetails from "./components/PlanetDetails";
import PlanetHome from "./components/planetHome";


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
    <Router>
      <div className="App">
      {init && <Particles options={particlesOptions} />}
        <Routes>
        <Route path="/" element={<PlanetHome />} />
          <Route path="/planet/:name" element={<PlanetDetails />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;