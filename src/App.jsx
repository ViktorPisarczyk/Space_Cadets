/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Button from "./component/Button";

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
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Button/>

    </div>
  );
}

export default App;
