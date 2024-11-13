import mercuryImg from '../assets/Mercury.png';
import venusImg from '../assets/Venus.png';
import earthImg from '../assets/Earth.png';
import marsImg from '../assets/Mars.png';
import jupiterImg from '../assets/Jupiter.png';
import saturnImg from '../assets/Saturn.png';
import uranusImg from '../assets/Uranus.png';
import neptuneImg from '../assets/Neptune.png';

import mercuryImg2 from '../assets/Mercury2.jpg';
import venusImg2 from '../assets/Venus2.jpg';
import earthImg2 from '../assets/Earth2.jpg';
import marsImg2 from '../assets/Mars2.jpg';
import jupiterImg2 from '../assets/Jupiter2.jpeg';
import saturnImg2 from '../assets/Saturn2.jpg';
import uranusImg2 from '../assets/Uranus2.jpg';
import neptuneImg2 from '../assets/Neptune2.jpg';

const planetImages = {
  Mercury: [
    { src: mercuryImg, alt: 'Image of Mercury' },
    { src: mercuryImg2, alt: 'Second image of Mercury' }
  ],
  Venus: [
    { src: venusImg, alt: 'Image of Venus' },
    { src: venusImg2, alt: 'Second image of Venus' }
  ],
  Earth: [
    { src: earthImg, alt: 'Image of Earth' },
    { src: earthImg2, alt: 'Second image of Earth' }
  ],
  Mars: [
    { src: marsImg, alt: 'Image of Mars' },
    { src: marsImg2, alt: 'Second image of Mars' }
  ],
  Jupiter: [
    { src: jupiterImg, alt: 'Image of Jupiter' },
    { src: jupiterImg2, alt: 'Second image of Jupiter' }
  ],
  Saturn: [
    { src: saturnImg, alt: 'Image of Saturn' },
    { src: saturnImg2, alt: 'Second image of Saturn' }
  ],
  Uranus: [
    { src: uranusImg, alt: 'Image of Uranus' },
    { src: uranusImg2, alt: 'Second image of Uranus' }
  ],
  Neptune: [
    { src: neptuneImg, alt: 'Image of Neptune' },
    { src: neptuneImg2, alt: 'Second image of Neptune' }
  ]
};

const planetDescriptions = {
  Mercury: "THE SWIFT PLANET",
  Venus: "THE MORNING STAR",
  Earth: "THE BLUE PLANET",
  Mars: "THE RED PLANET",
  Jupiter: "THE GIANT PLANET",
  Saturn: "THE RINGED PLANET",
  Uranus: "THE ICE GIANT",
  Neptune: "THE WINDY PLANET"
};

const additionalInfo = {
  Mercury: "Mercury is the smallest planet in our solar system and closest to the Sun. It has a very thin atmosphere, which means it cannot retain heat. As a result, temperatures on Mercury can vary drastically, from extremely hot during the day to freezing at night. Despite its proximity to the Sun, it is not the hottest planet. Its surface is covered with craters, similar to our Moon.",
  Venus: "Venus is the second planet from the Sun and has a thick, toxic atmosphere composed mainly of carbon dioxide, with clouds of sulfuric acid. It is the hottest planet in our solar system due to its runaway greenhouse effect. The surface pressure on Venus is 92 times that of Earth, making it a very hostile environment. It rotates very slowly and in the opposite direction to most planets.",
  Earth: "Earth is the third planet from the Sun and the only known planet to support life. It has a diverse climate and a protective atmosphere that shields it from harmful solar radiation. Earth's surface is 71% water, and it has a dynamic system of tectonic plates. It supports a wide variety of ecosystems and life forms, making it unique in the solar system.",
  Mars: "Mars is the fourth planet from the Sun and is known as the Red Planet due to its reddish appearance. It has the largest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that dwarfs the Grand Canyon. Mars has polar ice caps made of water and dry ice, and evidence suggests it once had liquid water on its surface.",
  Jupiter: "Jupiter is the largest planet in our solar system and has a Great Red Spot, which is a giant storm that has been raging for centuries. It has a strong magnetic field and dozens of moons, including the largest moon in the solar system, Ganymede. Jupiter's atmosphere is composed mainly of hydrogen and helium, and it has faint rings around it.",
  Saturn: "Saturn is the sixth planet from the Sun and is famous for its stunning rings, which are made up of ice and rock particles. It has over 80 moons, with Titan being the largest and having a thick atmosphere. Saturn's low density means it would float if placed in water. Its rings are divided into several sections, each with its own characteristics.",
  Uranus: "Uranus is the seventh planet from the Sun and has a unique sideways rotation. It has a faint ring system and is known for its blue-green color due to the presence of methane in its atmosphere. Uranus has 27 known moons, and its axial tilt causes extreme seasonal variations. It was the first planet discovered with a telescope.",
  Neptune: "Neptune is the eighth planet from the Sun and is known for its deep blue color. It has strong winds and storms, including the Great Dark Spot, which is similar to Jupiter's Great Red Spot. Neptune has 14 known moons, with Triton being the largest. Triton has geysers that spew nitrogen gas, and Neptune's atmosphere is composed mainly of hydrogen, helium, and methane."
};

const fetchPlanetData = async () => {
  try {
    const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
    const data = await response.json();
    const planetData = data.bodies.filter(body => body.isPlanet);
    return planetData;
  } catch (error) {
    console.error('Error fetching planet data:', error);
    return [];
  }
};

export { planetImages, planetDescriptions, additionalInfo, fetchPlanetData };