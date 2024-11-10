import React from 'react';

function PlanetDetails({ planet }) {
  if (!planet) {
    return <div className="planet-details">Select a planet to view details</div>;
  }

  return (
    <div className="planet-details">
      <h2>{planet.englishName}</h2>
      <p>Mass: {planet.mass ? planet.mass.massValue + ' x 10^' + planet.mass.massExponent + ' kg' : 'Unknown'}</p>
      <p>Radius: {planet.meanRadius} km</p>
      <p>Gravity: {planet.gravity} m/s²</p>
      <p>Moons: {planet.moons ? planet.moons.length : 0}</p>
    </div>
  );
}

export default PlanetDetails;