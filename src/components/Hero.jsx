export default function Hero() {
  return (
    <section
      className="relative  bg-cover bg-no-repeat w-full"
      style={{
        background: `url("./src/assets/earth4k.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "bottom",
        zIndex: -1,
      }}
    >
      <div className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="line absolute w-0.5 h-[550px] bg-white mr-20 left-0 bottom-0"></div>
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold text-start text-white sm:text-5xl">
            Explore the Planets and Find Your{" "}
            <strong className="block font-extrabold"> Next Adventure</strong>
          </h1>
          <p className="mt-4 max-w-lg text-white text-start sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
}
