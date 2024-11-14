import Testimonials from "./Testimonials";
import { Link } from "react-router-dom";

export default function Hero() {
	return (
		<section className="md:w-3/4 m-auto mt-64 mb-40 h-full">
			<div className="p-12 md:p-12 lg:px-16 lg:py-24">
				<div className="text-left ltr:sm:text-left rtl:sm:text-right">
					<h2 className="flex gap-5 flex-col text-2xl font-bold text-white sm:text-3xl md:text-5xl">
						<span>Start exploring Planets</span>
						<span>with Us</span>
					</h2>
					<p className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Inventore officia corporis quasi doloribus iure
						architecto quae voluptatum beatae excepturi dolores.
					</p>
					<div className="mt-8 flex flex-wrap gap-4 text-center">
						<Link
							to={"/planets"}
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
								Explore{" "}
							</span>
						</Link>
					</div>
				</div>
			</div>
			<Testimonials />
		</section>
	);
}
