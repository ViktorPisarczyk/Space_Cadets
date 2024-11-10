import React from 'react';

function PlanetList({ planets, onSelectPlanet }) {
  return (
    <div className="planet-list">
      <h2>Planets</h2>
      <ul>
        {planets.map(planet => (
          <li key={planet.id} onClick={() => onSelectPlanet(planet)}>
            {planet.englishName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanetList;