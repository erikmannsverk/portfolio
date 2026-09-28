import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';

// Tech icons shown above the images. Put the icon files in public/images/languages.
// Remove an entry if you don't have an icon for it.
const languages = [
    { id: 1, img: "/images/languages/python.svg", name: "Python" },
    { id: 2, img: "/images/languages/typescript.svg", name: "TypeScript" },
]

function ProjectDetailTI() {

    return (
        <>
        <ScrollToTop/>
        <NavbarDefault/>
        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 lg:px-8 py-36">
                <div className="max-w-2xl text-center mx-auto">
                <h1 className="block lg:text-5xl font-bold text-gray-800 md:text-4xl text-3xl dark:text-white">Trailer Asset Sharing<span className="text-blue-600"> .</span></h1>
<p className="mt-3 lg:text-lg text-sm text-gray-800 dark:text-gray-400">Feasibility study and platform for asset sharing in the European RoRo market</p>                </div>

                <div className="relative max-w-4xl mx-auto border-t border-blue-gray-100 mt-20 pt-2">
                    <div className="flex justify-between py-2 h-12">
                        <div className='flex gap-4 lg:w-1/4 w-1/3'>
                            {languages.map((item, index)=> (
                                <span key={index} className="group relative h-full">
                                    <img src={item.img} alt={item.name} className='h-full opacity-90 transition-opacity hover:opacity-100'></img>
                                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        {item.name}
                                    </span>
                                </span>
                            ))}
                        </div>
                        {/* Change href to your study (e.g. a PDF link), or delete this block if you have no link */}
                        
                    </div>

                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px] rounded-xl">
                        <img src="/images/dfds/test3.webp" alt="Trailer Asset Sharing" decoding="async"></img>
                    </div>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        What the container is to global trade, the semi-trailer is to European transport. A large
                        share of trailers on RoRo and RoPax ferries, such as DFDS's, travel unaccompanied: they are
                        dropped at a port, shipped and collected on the other side, much like containers.
                    </p>
                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        A problem every operator shares is empty repositioning: trailers often have to be shipped
                        back empty to where they are needed next. Whqile empty container repositioning is well
                        studied, the European trailer market has received far less attention, even though
                        maritime and inland waterway transport account for about a third of European freight
                        (measured in ton-kilometres), compared with 55% for road.
                    </p>

                    <div className="w-full flex justify-center mt-10 sm:h-[480px]">
                        <img
                            src="/images/dfds/image.png"
                            alt="Trailer network optimization"
                            loading="lazy"
                            decoding="async"
                            className="max-h-full max-w-full object-contain rounded-xl"
                        />
                    </div>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        The study explored whether sharing trailers between operators could reduce empty
                        repositioning, cutting costs and emissions across the market.Based on the findings, a developer in Munich and I built the Trailer Interchange Platform, where operators can find and offer trailers.
                    </p>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        The Trailer Interchange Platform connected operators who needed trailers with operators who had too many.
                        A company short on trailers in one location could search the platform or post what it needed, while a company
                        with excess trailers in the same area could offer them up.
                    </p>
                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        The platform gave both sides an overview of available trailers and handled the transaction. The borrower
                        picked up the trailer and returned it as agreed, and the owner got it moved on a lane that suited its own
                        business, instead of shipping it back empty. The result was lower costs, fewer CO2 emissions and more
                        operational flexibility for everyone involved.
                    </p>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default ProjectDetailTI
