function Hero() {
  return (
    <div className="flex justify-center">
      <div className="max-w-[85rem] mx-auto px-6 lg:px-8 lg:pt-48 lg:pb-8 pt-20 pb-4">
        <div className="max-w-3xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-2xl lg:text-5xl">
            Erik Mannsverk <span className="text-blue-500 invisible lg:visible">.</span>
          </h1>

          <div className="flex items-center justify-center mt-3">
            <img src="/images/marker2.webp" alt="" className="lg:mr-3 mr-1 mt-1 lg:h-6 lg:w-6 h-4 w-4" />
            <p className="mt-1 lg:text-xl text-lg text-gray-700 dark:text-gray-400">Copenhagen, Denmark</p>
          </div>

          <p className="mt-3 text-sm text-gray-700 dark:text-gray-400 lg:text-base">
              Finance MSc at CBS. Business analyst at DFDS, with a background in IT.
          </p>

          <div className="flex justify-center mt-5">
            <a target="_blank" rel="noreferrer" href="https://github.com/erikmannsverk" className="opacity-60 hover:scale-105 hover:opacity-80 ease-in-out duration-300">
              <img src="/images/github.webp" alt="GitHub" className="mx-2 md:h-5 md:w-5 lg:h-6 lg:w-6 h-4 w-4" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/erik-mannsverk/" className="opacity-60 hover:scale-105 hover:opacity-80 ease-in-out duration-300">
              <img src="/images/linkedin.webp" alt="LinkedIn" className="mx-2 md:h-5 md:w-5 lg:h-6 lg:w-6 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero