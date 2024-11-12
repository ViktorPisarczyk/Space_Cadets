/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";

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
		<div className="flex flex-col w-full justify-center">
			{init && <Particles options={particlesOptions} />}
			<Hero />
			<Testimonials />
		</div>
	);
}

export default App;
