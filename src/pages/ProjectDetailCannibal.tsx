import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';

const languages = [
    { id: 1, img: "/images/languages/react.webp", name: "React" },
    { id: 2, img: "/images/languages/firebase.webp", name: "Firebase" },
    { id: 3, img: "/images/languages/html.webp", name: "HTML" },
]

function ProjectDetailCannibal() {

    return (
        <>
        <ScrollToTop/>
        <NavbarDefault/>

        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-36">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Cannibal<span className="text-blue-600"> .</span></h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">Website and user system for a casting agency</p>
                    <p className="mt-2 text-sm text-gray-500">Full stack developer for a client, 2023</p>
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
                        <a target="_blank" rel="noreferrer" href="https://cannibal.no/"
                           className="bg-blue-500 h-full flex items-center hover:bg-blue-600 text-white font-bold px-4 rounded opacity-80 transition hover:opacity-100">
                            Visit site
                        </a>
                    </div>

                    <p className="my-16 text-lg text-gray-800 dark:text-gray-400">
                        Cannibal is a Norwegian casting agency that finds actors and amateurs for film, TV and commercials.
                        I built their new website and the user system behind it, so people can sign up online instead of coming in for drop-in registration.
                    </p>
                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px]">
                        <img src="/images/canni_final.webp" alt="Cannibal registration page" decoding="async"></img>
                    </div>

                    <p className="my-16 text-lg text-gray-800 dark:text-gray-400">
                        Applicants create an account and fill in their profile, handled with Firebase Authentication and stored in Firebase.
                        The site also showcases productions the agency has cast, like Max Manus and Headhunters.
                    </p>
                    

                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px]">
                        <img src="/images/mock2_canni.webp" alt="Cannibal website pages: landing, registration and film references" loading="lazy" decoding="async"></img>
                    </div>

                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default ProjectDetailCannibal