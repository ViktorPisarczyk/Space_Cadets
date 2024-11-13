import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { planetImages, additionalInfo, fetchPlanetData } from "./planetData";

function PlanetDetails() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [planetData, setPlanetData] = useState(null);
  const [planets, setPlanets] = useState([]);
  const [selectedPlanetIndex, setSelectedPlanetIndex] = useState(0);

  useEffect(() => {
    fetchPlanetData().then(data => {
      setPlanets(data);
      const index = data.findIndex(planet => planet.englishName.toLowerCase() === name.toLowerCase());
      setSelectedPlanetIndex(index);
    });
  }, [name]);

  useEffect(() => {
    if (planets.length > 0) {
      setPlanetData(planets[selectedPlanetIndex]);
    }
  }, [planets, selectedPlanetIndex]);

  const handleNextPlanet = () => {
    const nextIndex = (selectedPlanetIndex + 1) % planets.length;
    setSelectedPlanetIndex(nextIndex);
    navigate(`/planet/${planets[nextIndex].englishName}`);
  };

  const handlePrevPlanet = () => {
    const prevIndex = (selectedPlanetIndex - 1 + planets.length) % planets.length;
    setSelectedPlanetIndex(prevIndex);
    navigate(`/planet/${planets[prevIndex].englishName}`);
  };

  if (!planetData) {
    return <div>Loading...</div>;
  }

  const nextPlanet = planets[(selectedPlanetIndex + 1) % planets.length];
  const prevPlanet = planets[(selectedPlanetIndex - 1 + planets.length) % planets.length];

  return (
    <div className="planet-details">
      <div className="planet-details-content">
        <div className="planet-details-left">
          <img src={planetImages[planetData.englishName][0].src} alt={planetImages[planetData.englishName][0].alt} className="planet-details-image" />
          <div className="planet-details-info">
            <p><strong>Mass:</strong> {planetData.mass ? `${planetData.mass.massValue} x 10^${planetData.mass.massExponent} kg` : 'Unknown'}</p>
            <p><strong>Radius:</strong> {planetData.meanRadius} km</p>
            <p><strong>Gravity:</strong> {planetData.gravity} m/s²</p>
            <p><strong>Moons:</strong> {planetData.moons ? planetData.moons.length : 0}</p>
            <p><strong>Orbital Period:</strong> {planetData.sideralOrbit} days</p>
            <p><strong>Rotation Period:</strong> {planetData.sideralRotation} hours</p>
          </div>
        </div>
        <div className="planet-details-right">
          <h1>{planetData.englishName}</h1>
          <div className="additional-info">
            <p>{additionalInfo[planetData.englishName]}</p>
          </div>
          <div className="planet-media">
            <img src={planetImages[planetData.englishName][1].src} alt={planetImages[planetData.englishName][1].alt} className="planet-photo" />
          </div>
        </div>
      </div>
      <div className="planet-navigation">
        <button onClick={handlePrevPlanet} className="nav-button">
          <i className="fas fa-arrow-left arrow"></i>
          <img src={planetImages[prevPlanet.englishName][0].src} alt={planetImages[prevPlanet.englishName][0].alt} className="nav-planet-image" />
          <span>{prevPlanet.englishName}</span>
        </button>
        <button onClick={handleNextPlanet} className="nav-button">
          <span>{nextPlanet.englishName}</span>
          <img src={planetImages[nextPlanet.englishName][0].src} alt={planetImages[nextPlanet.englishName][0].alt} className="nav-planet-image" />
          <i className="fas fa-arrow-right arrow"></i>
        </button>
      </div>
    </div>
  );
}

export default PlanetDetails;