/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
import PlanetHome from "./components/planetHome";
import PlanetDetails from "./components/PlanetDetails";
import Team from "./components/Team";
import Articles from "./components/Articles";

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
		<React.Fragment>
			{init && <Particles options={particlesOptions} />}
			<Routes>
				<Route
					path="/"
					element={<Layout />}>
					<Route
						index
						element={<Hero />}
					/>
					<Route
						path="/planets"
						element={<PlanetHome />}
					/>
					<Route
						path="/articles"
						element={<Articles />}
					/>
					<Route
						path="/team"
						element={<Team />}
					/>
					<Route
						path="/planets/:name"
						element={<PlanetDetails />}
					/>
					<Route
						path="contact"
						element={<Contact />}
					/>
				</Route>
			</Routes>
		</React.Fragment>
	);
}

export default App;
