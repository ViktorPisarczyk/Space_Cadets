export default function Test() {
	return (
		<div className="font-sans max-w-6xl max-md:max-w-md mx-auto p-5">
			<div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
				<div className="max-md:order-1 max-md:text-center z-50 relative">
					<h2 className="text-white lg:text-6xl md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[56px]">
						<span className="text-blue-600">Learn</span> the <br />
						<span className="text-blue-600">Planets</span>
					</h2>
					<p className="text-white mt-6 text-base leading-relaxed">
						Laboris qui Lorem ad tempor ut reprehenderit. Nostrud
						anim nulla officia ea sit deserunt. Eu eu quis anim aute
						Laboris qui Lorem ad tempor ut reprehenderit.
					</p>
					<div className="mt-8 flex flex-wrap gap-4 text-center">
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
								Explore{" "}
							</span>
						</a>
					</div>
					{/* <div className="mt-12">
					</div> */}
				</div>
				<div className="lg:h-[550px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-[#DEE2E5] before:h-[120%] before:w-[120%] before:right-0 before:z-0">
					<img
						src="https://fakeimg.pl/1280x720"
						className="rounded-md lg:w-4/5 z-50 relative"
						alt="Dining Experience"
					/>
				</div>
			</div>
			<div className="grid md:grid-cols-3 gap-4 z-50 relative md:px-4 max-md:mt-12 mb-12"></div>
		</div>
	);
}
