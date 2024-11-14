import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { planetImages, additionalInfo, fetchPlanetData } from "./planetData";
import { Link } from "react-router-dom";

function PlanetDetails() {
	const { name } = useParams();
	const [planetData, setPlanetData] = useState(null);
	const [planets, setPlanets] = useState([]);
	const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);

	useEffect(() => {
		fetchPlanetData().then((data) => {
			setPlanets(data);
			const index = data.findIndex(
				(planet) =>
					planet.englishName.toLowerCase() === name.toLowerCase()
			);
			setSelectedPlanetIndex(index);
		});
	}, [name]);

	useEffect(() => {
		if (planets.length >= 0) {
			setPlanetData(planets[selectedPlanetIndex]);
		}
	}, [planets, selectedPlanetIndex]);

	if (!planetData) {
		return (
			<div className="h-screen flex justify-center items-center">
				<h1 className="text-4xl"> Loading...</h1>
			</div>
		);
	}

	return (
		<div className="planet-details min-h-screen flex flex-col pt-24 md:pt-28">
			<div className="planet-details-content flex-grow flex flex-col md:flex-row justify-center items-start px-4 sm:px-6 md:px-8 w-full max-w-6xl mx-auto">
				<div className="planet-details-left w-full md:w-1/2 mb-8 md:mb-0 md:pr-4">
					<img
						src={planetImages[planetData.englishName][0].src}
						alt={planetImages[planetData.englishName][0].alt}
						className="planet-details-image w-full max-w-md mx-auto mb-6"
					/>
					<div className="planet-details-info space-y-3 text-left">
						<h2 className="text-2xl font-bold mb-4">Planet Details</h2>
						<p><strong>Mass:</strong> {planetData.mass ? `${planetData.mass.massValue} x 10^${planetData.mass.massExponent} kg` : "Unknown"}</p>
						<p><strong>Radius:</strong> {planetData.meanRadius} km</p>
						<p><strong>Gravity:</strong> {planetData.gravity} m/s²</p>
						<p><strong>Moons:</strong> {planetData.moons ? planetData.moons.length : 0}</p>
						<p><strong>Orbital Period:</strong> {planetData.sideralOrbit} days</p>
						<p><strong>Rotation Period:</strong> {planetData.sideralRotation} hours</p>
					</div>
				</div>
				<div className="planet-details-right w-full md:w-1/2 md:pl-4">
					<h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">{planetData.englishName}</h1>
					<div className="additional-info mb-6 text-lg">
						<p>{additionalInfo[planetData.englishName]}</p>
					</div>
					<div className="planet-media mb-8">
						<img
							src={planetImages[planetData.englishName][1].src}
							alt={planetImages[planetData.englishName][1].alt}
							className="planet-photo w-full max-w-md mx-auto"
						/>
					</div>
				</div>
			</div>
			<div className="planet-footer mt-auto p-4">
				<div className="flex justify-center  max-w-6xl mx-auto">
					<Link
						to={"/planets"}
						className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
						href="#">
						<span className="absolute -end-full transition-all group-hover:end-4">
							<svg
								className="size-5"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</span>

						<span className="text-sm font-medium transition-all group-hover:me-4">
							Back to Planets
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default PlanetDetails;