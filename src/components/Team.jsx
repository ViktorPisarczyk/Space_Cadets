import "./Team.css";
import Card from "./Card";
import nikapic from "../assets/profile-pictures/nika.png";
import viktorpic from "../assets/profile-pictures/viktor.png";
import brianpic from "../assets/profile-pictures/brian.png";
import darlypic from "../assets/profile-pictures/darly.png";
import simonpic from "../assets/profile-pictures/simon.png";
import reactlogo from "../assets/logos/react.png";
import jslogo from "../assets/logos/javascript.png";
import vitelogo from "../assets/logos/vite.png";
import tailwindlogo from "../assets/logos/tailwind.png";

const team = [
	{
		name: "Brian",
		img: brianpic,
		description:
			"The team´s brainiac, Brian is bursting with electrifying ideas. Always in motion, he’s a comet of knowledge and solutions, ready to illuminate even the darkest corners of the cosmos",
	},
	{
		name: "Viktor",
		img: viktorpic,
		description:
			"With a strong character and regal elegance, Viktor brings decisiveness and style to every mission. A true cosmic commander who always knows the way.",
	},
	{
		name: "Simon",
		img: simonpic,
		description:
			"Quiet like the space around him, Simon works tirelessly behind the scenes, bringing order and precision. His steady dedication is a guiding path through the vast universe.",
	},

	{
		name: "Darly",
		img: darlypic,
		description:
			"Darly is the determined and brilliant alien who leads the team on intergalactic missions. No horizon is too far for her; she's always ready to tackle any cosmic puzzle with fierce resolve.",
	},
	{
		name: "Nika",
		img: nikapic,
		description:
			"Curious and laid-back like a planet in orbit, Nausica dreams big and always has fresh ideas. No one explores the universe with her blend of creativity and cosmic dynimism.",
	},
];
export default function Team() {
	return (
		<div className="big-div flex flex-col justify-center  my-52 h-full">
			<div className="flex flex-col intro">
				<h1>
					Meet the <b>TEAM</b>
				</h1>
				<p id="para">
					Welcome to the Space Cadets! We are a group of interstellar
					explorers, each with our unique skills and quirks, united by
					a passion for discovery. From the far reaches of our galaxy,
					we bring curiosity, resilience, and creativity to every
					cosmic challenge. Whether navigating the vast unknown or
					crafting innovative solutions, we’re on a mission to make
					our mark among the stars. Join us on our journey as we
					boldly go where few have ventured before!
				</p>
			</div>
			<div className="card-section flex mx-auto w-2/3">
				{team.map((x, i) => (
					<Card
						person={x}
						key={i}
					/>
				))}
			</div>
			<div className="tech">
				Technologies used for this project:
				<br />
				<img
					src={jslogo}
					alt="javascript logo"
				/>
				<img
					src={reactlogo}
					alt="react logo"
				/>
				<img
					src={tailwindlogo}
					alt="tailwind logo"
				/>
				<img
					src={vitelogo}
					alt="vite logo"
				/>
			</div>
		</div>
	);
}
