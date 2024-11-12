/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Hero from "./components/Hero";
import Test from "./components/Test";

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
			{/* <Hero /> */}
			<Test />
		</div>
	);
}

export default App;
