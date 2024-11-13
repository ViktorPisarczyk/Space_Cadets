/* eslint-disable react/prop-types */
export default function Card({ person }) {
	return (
		<div className="card">
			<div className="picture">
				<img
					src={person.img}
					alt="alien"
					width={200}
				/>
			</div>
			<div className="paragraph">
				<h3>{person.name}</h3>
				<p>{person.description}</p>
			</div>
		</div>
	);
}
