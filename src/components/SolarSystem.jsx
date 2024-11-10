import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import mercuryImg from '../assets/Mercury.png';
import venusImg from '../assets/Venus.png';
import earthImg from '../assets/Earth.png';
import marsImg from '../assets/Mars.png';
import jupiterImg from '../assets/Jupiter.png';
import saturnImg from '../assets/Saturn.png';
import uranusImg from '../assets/Uranus.png';
import neptuneImg from '../assets/Neptune.png';

const planetImages = {
  Mercury: mercuryImg,
  Venus: venusImg,
  Earth: earthImg,
  Mars: marsImg,
  Jupiter: jupiterImg,
  Saturn: saturnImg,
  Uranus: uranusImg,
  Neptune: neptuneImg
};

function SolarSystem() {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies/')
      .then(response => response.json())
      .then(data => {
        const planetData = data.bodies.filter(body => body.isPlanet);
        setPlanets(planetData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching planet data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading planet data...</div>;
  }

  return (
    <div className="solar-system">
      <h1>Solar System Explorer</h1>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} className="planet-carousel">
        {planets.map((planet) => (
          <div key={planet.id} className="planet-slide">
            <img src={planetImages[planet.englishName]} alt={planet.englishName} />
            <div className="planet-info">
              <h2>{planet.englishName}</h2>
              <p>Mass: {planet.mass ? `${planet.mass.massValue} x 10^${planet.mass.massExponent} kg` : 'Unknown'}</p>
              <p>Radius: {planet.meanRadius} km</p>
              <p>Gravity: {planet.gravity} m/s²</p>
              <p>Moons: {planet.moons ? planet.moons.length : 0}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SolarSystem;