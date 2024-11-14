import { useState } from "react";
import "./Contact.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		interest: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Thank you for writing us a message!");
		setFormData({
			name: "",
			email: "",
			interest: "",
		});
	};

	return (
		<div className="h-screen mx-auto my-48">
			<div className="intro">
				<h1>Contact Mission Control</h1>

				<p>
					Have a question, or ready to embark on your journey with us?
					Send your message directly to our crew, and we’ll get back
					to you at warp speed. Whether you're exploring new
					possibilities or need guidance, we're here to help your
					ideas reach for the stars!
				</p>
			</div>
			<form
				className="signup-form"
				onSubmit={handleSubmit}>
				<h2>Please leave us a message</h2>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						placeholder="Please enter your full name ..."
						required
					/>
				</label>

				<label>
					E-Mail:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						placeholder="Please enter your email address ..."
						required
					/>
				</label>

				<label>
					Your message:
					<textarea
						name="interest"
						value={formData.interest}
						onChange={handleChange}
						placeholder="Please enter your message to us ..."
						rows="4"
					/>
				</label>
				<div className="flex flex-col items-center justify-center">
					<button
						type="submit"
						className="mt-8 flex flex-wrap gap-4 text-center">
						<a
							className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-indigo-500"
							href="#">
							<span className="absolute -end-full transition-all group-hover:end-4">
								<svg
									className="size-5 rtl:rotate-180"
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
							<span className="text-lg font-medium transition-all group-hover:me-4">
								{" "}
								Submit{" "}
							</span>
						</a>
					</button>
				</div>
			</form>
		</div>
	);
}

export default Contact;
