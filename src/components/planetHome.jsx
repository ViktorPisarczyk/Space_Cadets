import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
	planetImages,
	planetDescriptions,
	fetchPlanetData,
} from "./planetData";

function PlanetHome() {
	const navigate = useNavigate();
	const [planets, setPlanets] = useState([]);
	const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(2); // Start with Earth
	const [hover, setHover] = useState(false);

	useEffect(() => {
		fetchPlanetData().then(setPlanets);
	}, []);

	const handleNextPlanet = () => {
		setSelectedPlanetIndex((prevIndex) => (prevIndex + 1) % planets.length);
	};

	const handlePrevPlanet = () => {
		setSelectedPlanetIndex(
			(prevIndex) => (prevIndex - 1 + planets.length) % planets.length
		);
	};

	const handlePlanetClick = () => {
		const selectedPlanet = planets[selectedPlanetIndex];
		navigate(`${selectedPlanet.englishName}`);
	};

	if (planets.length === 0) {
		return (
			<div className="planet-details-content h-screen flex justify-center align-middle">
				<h1 className="text-4xl m-auto"> Loading...</h1>;
			</div>
		);
	}

	const selectedPlanet = planets[selectedPlanetIndex];
	const nextPlanet = planets[(selectedPlanetIndex + 1) % planets.length];
	const prevPlanet =
		planets[(selectedPlanetIndex - 1 + planets.length) % planets.length];

	return (
		<div className="planet-home">
			<div className="planet-container h-screen flex justify-center align-middle">
				<Link
					to={`${selectedPlanet.englishName}`}
					className={`planet-display ${hover ? "hover" : ""}`}
					onMouseEnter={() => setHover(true)}
					onMouseLeave={() => setHover(false)}
					onClick={handlePlanetClick}>
					<h2>{selectedPlanet.englishName.toUpperCase()}</h2>
					<p className="short-description">
						{planetDescriptions[selectedPlanet.englishName]}
					</p>
					<img
						src={planetImages[selectedPlanet.englishName][0].src}
						alt={planetImages[selectedPlanet.englishName][0].alt}
						className="planet-image"
					/>
				</Link>
				<div className="planet-info top-left">
					<p className="info-title">Mass</p>
					<p className="info-value">
						{selectedPlanet.mass
							? `${selectedPlanet.mass.massValue} x 10^${selectedPlanet.mass.massExponent} kg`
							: "Unknown"}
					</p>
				</div>
				<div className="planet-info top-right">
					<p className="info-title">Radius</p>
					<p className="info-value">{selectedPlanet.meanRadius} km</p>
				</div>
				<div className="planet-info bottom-left">
					<p className="info-title">Gravity</p>
					<p className="info-value">{selectedPlanet.gravity} m/s²</p>
				</div>
				<div className="planet-info bottom-right">
					<p className="info-title">Moons</p>
					<p className="info-value">
						{selectedPlanet.moons ? selectedPlanet.moons.length : 0}
					</p>
				</div>
			</div>
			<div className="planet-navigation">
				<button
					onClick={handlePrevPlanet}
					className="nav-button">
					<i className="fas fa-arrow-left"></i>
					<img
						src={planetImages[prevPlanet.englishName][0].src}
						alt={planetImages[prevPlanet.englishName][0].alt}
						className="nav-planet-image"
					/>
					<span>{prevPlanet.englishName.toUpperCase()}</span>
				</button>
				<button
					onClick={handleNextPlanet}
					className="nav-button">
					<span>{nextPlanet.englishName.toUpperCase()}</span>
					<img
						src={planetImages[nextPlanet.englishName][0].src}
						alt={planetImages[nextPlanet.englishName][0].alt}
						className="nav-planet-image"
					/>
					<i className="fas fa-arrow-right"></i>
				</button>
			</div>
		</div>
	);
}

export default PlanetHome;
