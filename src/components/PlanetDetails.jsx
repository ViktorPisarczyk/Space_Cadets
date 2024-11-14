import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { planetImages, additionalInfo, fetchPlanetData } from "./planetData";
import { Link } from "react-router-dom";

function PlanetDetails() {
	const { name } = useParams();
	// const navigate = useNavigate();
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

	// const handleNextPlanet = () => {
	// 	const nextIndex = (selectedPlanetIndex + 1) % planets.length;
	// 	setSelectedPlanetIndex(nextIndex);
	// 	navigate(`${planets[nextIndex].englishName}`);
	// };

	// const handlePrevPlanet = () => {
	// 	const prevIndex =
	// 		(selectedPlanetIndex - 1 + planets.length) % planets.length;
	// 	setSelectedPlanetIndex(prevIndex);
	// 	navigate(`${planets[prevIndex].englishName}`);
	// };

	if (!planetData) {
		return (
			<div className="planet-details-content h-screen flex justify-center align-middle">
				<h1 className="text-4xl m-auto"> Loading...</h1>;
			</div>
		);
	}

	// const nextPlanet = planets[(selectedPlanetIndex + 1) % planets.length];
	// const prevPlanet =
	// 	planets[(selectedPlanetIndex - 1 + planets.length) % planets.length];

	return (
		<div className="">
			<div className="planet-details-content justify-center align-middle">
				<div className="planet-details-left">
					<img
						src={planetImages[planetData.englishName][0].src}
						alt={planetImages[planetData.englishName][0].alt}
						className="planet-details-image"
					/>
					<div className="planet-details-info">
						<h1>
							<strong>Mass:</strong>{" "}
							{planetData.mass
								? `${planetData.mass.massValue} x 10^${planetData.mass.massExponent} kg`
								: "Unknown"}
						</h1>
						<p>
							<strong>Radius:</strong> {planetData.meanRadius} km
						</p>
						<p>
							<strong>Gravity:</strong> {planetData.gravity} m/s²
						</p>
						<p>
							<strong>Moons:</strong>{" "}
							{planetData.moons ? planetData.moons.length : 0}
						</p>
						<p>
							<strong>Orbital Period:</strong>{" "}
							{planetData.sideralOrbit} days
						</p>
						<p>
							<strong>Rotation Period:</strong>{" "}
							{planetData.sideralRotation} hours
						</p>
					</div>
				</div>
				<div className="planet-details-right">
					<h1>{planetData.englishName}</h1>
					<div className="additional-info">
						<p>{additionalInfo[planetData.englishName]}</p>
					</div>
					<div className="planet-media">
						<img
							src={planetImages[planetData.englishName][1].src}
							alt={planetImages[planetData.englishName][1].alt}
							className="planet-photo"
						/>
					</div>
					<div>
						<div className="mt-8 flex gap-4 text-center">
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
									{" "}
									Back to Planets{" "}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlanetDetails;
