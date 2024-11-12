export default function Test() {
  return (
    <section className="flex justify-center overflow-hidden md:w-3/4 h-[600px]">
      <div className="p-12 md:p-12 lg:px-16 lg:py-24">
        <div className="text-left ltr:sm:text-left rtl:sm:text-right">
          <h2 className="flex gap-5 flex-col text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            <span>Start exploring Planets</span>
            <span>with Us</span>
          </h2>
          <p className="max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Learning the planets in our solar system helps us understand
            Earth&apos;s place in the universe and the wonders of space
            exploration.
          </p>
          <button className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              className="group relative inline-flex items-center overflow-hidden rounded border border-current px-8 py-3 text-white focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <span className="absolute -end-full transition-all group-hover:end-4">
                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
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
          </button>
        </div>
      </div>
    </section>
  );
}
