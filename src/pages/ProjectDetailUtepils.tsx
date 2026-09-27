import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';
import { Typography } from '@material-tailwind/react';

const languages = [
    {
        "id": 1,
        "img": "/images/languages/kotlin.webp",
        "name": "Kotlin"
    },
    {
        "id": 2,
        "img": "/images/languages/jetpack.webp",
        "name": "Jetpack Compose"
    },
    {
        "id": 3,
        "img": "/images/languages/figma.webp",
        "name": "Figma"
    },
    {
        "id": 4,
        "img": "/images/languages/android.webp",
        "name": "Android"
    }
]

function ProjectDetailUtepils() {

    return (
        <>
        <ScrollToTop/>
        <NavbarDefault/>
        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 lg:px-8 py-36">
                <div className="max-w-2xl text-center mx-auto">
                <h1 className="block lg:text-5xl font-bold text-gray-800 md:text-4xl text-3xl dark:text-white">Utepils<span className="text-blue-600"> .</span></h1>
                <p className="mt-3 lg:text-lg text-sm text-gray-800 dark:text-gray-400">Beer/drink tips based on weather data</p>
                </div>
                {/*
                <div className='flex justify-between max-w-5xl mx-auto pt-10'>
                    <p className="mt-5 uppercase font-bold lg:text-sm text-xs text-blue-500">Mobile</p>
                    <p className="mt-5 uppercase font-bold lg:text-sm text-xs text-gray-800">2022</p>
                </div>
                */}

                <div className="relative max-w-5xl mx-auto border-t border-blue-gray-100 mt-20 pt-2">
                    <div className="flex justify-between py-2 h-12">
                        <div className='flex justify-between lg:w-1/4 w-1/3'>
                            {languages.map((item, index)=> (
                                <img key={index} src={item.img} className='h-full opacity-90 transition-opacity hover:opacity-100'></img>
                            ))}
                        </div>
                        <Typography as="a" target="_blank" href="https://github.com/erikmannsverk/Utepils" className="opacity-80 transition-opacity hover:opacity-100">
                            <button className="bg-blue-500 h-full hover:bg-blue-600 text-white font-bold  px-4 rounded">
                                GitHub
                            </button>
                        </Typography>
                    </div>
                    
                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px] rounded-xl">
                        <img src="/images/mock.webp"></img>
                    </div>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">"Utepils" shows you nearby bars, resturants and nightclubs where you can get a beer, including the price level and ratings. To achive this we used the Google Places API. </p>

                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px] rounded-xl">
                        <img src="/images/mock2_utepils.webp"></img>
                    </div>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">The app also reccomends drinks and beers based on the current weather. The weather data is from the MET api.</p>
                </div>
            </div>
        </div>
        
        <Footer/>
        </>
    )
}

export default ProjectDetailUtepils