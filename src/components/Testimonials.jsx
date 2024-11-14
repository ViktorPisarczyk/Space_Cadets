import { PiArticleLight } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function Testimonials() {
	return (
		<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 font-bold">
			<div className="mx-auto max-w-lg text-center">
				<h2 className="text-3xl font-bold sm:text-4xl">
					Kickstart the planets
				</h2>

				<p className="mt-4 text-gray-300 ">
					&ldquo;Explore the Planets online to dive into interactive
					guides making learning about the solar system fun and
					engaging!&ldquo;
				</p>
			</div>

			<div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
				<a
					className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-white hover:shadow-zinc-600"
					href="#">
					<PiArticleLight className="size-10 text-[#004887]" />
					<h2 className="mt-4 text-xl font-bold text-white">
						A Journey Around Our Sun
					</h2>

					<p className="mt-1 text-sm text-gray-300">
						This title delves into the harmonious movements of
						planets as they orbit the sun, highlighting their unique
						paths and interactions. It explains why each planet
						moves at a different speed and how gravitational forces
						create the beautiful and intricate &quot;dance&quot; we
						observe in the night sky.
					</p>
				</a>

				<a
					className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-white hover:shadow-zinc-600"
					href="#">
					<PiArticleLight className="size-10 text-[#004887]" />
					<h2 className="mt-4 text-xl font-bold text-white">
						Mysteries of the Solar System
					</h2>

					<p className="mt-1 text-sm text-gray-300">
						This book uncovers the fascinating mysteries surrounding
						each planet in the solar system, from Mercury’s
						scorching surface to Neptune’s icy winds. It explores
						the unanswered questions scientists are still
						investigating and the potential for future discoveries
						on other worlds.
					</p>
				</a>

				<a
					className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-white hover:shadow-zinc-600"
					href="#">
					<PiArticleLight className="size-10 text-[#004887]" />
					<h2 className="mt-4 text-xl font-bold text-white">
						From Mercury to Neptune
					</h2>

					<p className="mt-1 text-sm text-gray-300">
						A comprehensive guide to each planet, this title offers
						readers insights into planetary characteristics like
						atmosphere, composition, and size. It presents an
						overview of the solar system, with detailed descriptions
						of each planet&apos;s unique qualities and place in the
						cosmic neighborhood.
					</p>
				</a>

				<a
					className="block rounded-xl border  border-gray-800 p-8 shadow-xl transition  hover:border-white hover:shadow-zinc-600"
					href="#">
					<PiArticleLight className="size-10 text-[#004887]" />

					<h2 className="mt-4 text-xl font-bold text-white">
						Planetary Adventures
					</h2>

					<p className="mt-1 text-sm text-gray-300">
						This engaging title takes readers on an imaginative
						journey to each planet, offering vivid descriptions and
						hypothetical experiences for visitors. From the intense
						heat on Venus to the storms of Jupiter, readers
						experience what life might be like if they could step
						onto each of these distant worlds.
					</p>
				</a>

				<a
					className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-white hover:shadow-zinc-600"
					href="#">
					<PiArticleLight className="size-10 text-[#004887]" />
					<h2 className="mt-4 text-xl font-bold text-white">
						The Sun and Its Planetary Family
					</h2>

					<p className="mt-1 text-sm text-gray-300">
						An in-depth exploration of the sun and its influence on
						the planets, this title examines how the sun&apos;s
						energy shapes the solar system&apos;s environment. Each
						chapter covers the relationship between the sun and a
						specific planet, highlighting how the solar family forms
						an interconnected system.
					</p>
				</a>

				<a
					className="block rounded-xl border border-gray-800 p-8 shadow-xl transition  hover:border-white hover:shadow-zinc-600"
					href="#">
					<PiArticleLight className="size-10 text-[#004887]" />
					<h2 className="mt-4 text-xl font-bold text-white">
						The Planets Orbiting the Sun
					</h2>

					<p className="mt-1 text-sm text-gray-300">
						Aimed at beginners, this title provides an accessible
						introduction to the solar system. Readers learn about
						the basic characteristics of each planet, their
						distances from the sun, and how they compare in size and
						makeup. It’s a perfect starting point for anyone
						interested in astronomy.
					</p>
				</a>
			</div>

			<Link to={"articles"}>
				<div className="mt-12 text-center">
					<a
						className="group relative inline-block overflow-hidden border border-white px-8 py-3 focus:outline-none focus:ring"
						href="#">
						<span className="absolute inset-y-0 left-0 w-[2px] bg-[#004887] transition-all group-hover:w-full group-active:bg-indigo-500"></span>

						<span className="relative text-md font-medium text-white transition-colors group-hover:text-white">
							Read More
						</span>
					</a>
				</div>
			</Link>
		</div>
	);
}
