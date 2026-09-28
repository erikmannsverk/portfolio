import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';

const languages = [
    { id: 1, img: "/images/languages/kotlin.webp", name: "Kotlin" },
    { id: 2, img: "/images/languages/jetpack.webp", name: "Jetpack Compose" },
    { id: 3, img: "/images/languages/figma.webp", name: "Figma" },
    { id: 4, img: "/images/languages/android.webp", name: "Android" },
]

function ProjectDetailUtepils() {

    return (
        <>
        <ScrollToTop/>
        <NavbarDefault/>

        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-36">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Utepils<span className="text-blue-600"> .</span></h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Android app that finds you a beer, and tells you which one fits the weather</p>
                    <p className="mt-2 text-sm text-gray-500">Developer in a team of six, IN2000 at UiO, 2021</p>
                </div>

                <div className="relative max-w-4xl mx-auto border-t border-blue-gray-100 mt-20 pt-2">
                    <div className="flex justify-between py-2 h-12">
                        <div className='flex gap-4 lg:w-1/4 w-1/3'>
                            {languages.map((item)=> (
                                <span key={item.id} className="group relative h-full">
                                    <img src={item.img} alt={item.name} decoding="async" className='h-full opacity-90 transition-opacity hover:opacity-100'></img>
                                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        {item.name}
                                    </span>
                                </span>
                            ))}
                        </div>
                        <a target="_blank" rel="noreferrer" href="https://github.com/erikmannsverk/Utepils"
                           className="bg-blue-500 h-full flex items-center hover:bg-blue-600 text-white font-bold px-4 rounded opacity-80 transition hover:opacity-100">
                            GitHub
                        </a>
                    </div>


                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px]">
                        <img src="/images/mock.webp" alt="Utepils app showing nearby places" decoding="async"></img>
                    </div>
                    <h2 className="mt-12 text-2xl font-bold text-gray-800 dark:text-white">About</h2>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                        "Utepils" is the Norwegian word for a beer enjoyed outside, and the app is built around exactly that.
                        It shows nearby bars, restaurants and nightclubs where you can get a beer, including price level and ratings.
                        To do this we used the Google Places API.
                    </p>

                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px]">
                        <img src="/images/mock2_utepils.webp" alt="Utepils app recommending a drink based on the weather" loading="lazy" decoding="async"></img>
                    </div>

                    <p className="mt-6 text-lg text-gray-800 dark:text-gray-400">
                        The app also recommends drinks and beers based on the current weather, using weather data from the MET API.
                    </p>

                    <h2 className="mt-12 text-2xl font-bold text-gray-800 dark:text-white">The project</h2>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                        Utepils was made in the software engineering course IN2000 at the University of Oslo.
                        Our group had three developers and three designers, and the project ran for one semester.
                        We worked in an agile process, which gave us valuable experience with how software is built in a real team.
                    </p>

                    <h2 className="mt-12 text-2xl font-bold text-gray-800 dark:text-white">What I learned</h2>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                        I learned to build Android apps both the traditional way and with Jetpack Compose, and how to fetch data from APIs and parse it into objects.
                        Working closely with both developers and designers on a larger project also improved my teamwork and communication.
                    </p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2 text-lg text-gray-800 dark:text-gray-400 list-disc list-inside">
                        <li>Android development</li>
                        <li>Jetpack Compose</li>
                        <li>Design patterns</li>
                        <li>Unit and integration testing</li>
                    </ul>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default ProjectDetailUtepils