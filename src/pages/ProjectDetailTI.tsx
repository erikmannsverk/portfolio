import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';
import { Typography } from '@material-tailwind/react';

// Tech icons shown above the images. Put the icon files in public/images/languages.
// Remove an entry if you don't have an icon for it.
const languages = [
    {
        "id": 1,
        "img": "/images/languages/python.png",
        "name": "Python"
    },
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
                <p className="mt-3 lg:text-lg text-sm text-gray-800 dark:text-gray-400">Feasibility study of asset sharing in the European RoRo market</p>
                </div>

                <div className="relative max-w-5xl mx-auto border-t border-blue-gray-100 mt-20 pt-2">
                    <div className="flex justify-between py-2 h-12">
                        <div className='flex justify-between lg:w-1/4 w-1/3'>
                            {languages.map((item, index)=> (
                                <img key={index} src={item.img} alt={item.name} className='h-full opacity-90 transition-opacity hover:opacity-100'></img>
                            ))}
                        </div>
                        {/* Change href to your study (e.g. a PDF link), or delete this block if you have no link */}
                        
                    </div>

                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px] rounded-xl">
                        <img src="/images/dfds/test3.png" alt="Trailer Asset Sharing"></img>
                    </div>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        What the container is to global trade, the semi-trailer is to European transport. A large
                        share of trailers on RoRo and RoPax ferries, such as DFDS's, travel unaccompanied: they are
                        dropped at a port, shipped and collected on the other side, much like containers.
                    </p>
                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        A problem every operator shares is empty repositioning: trailers often have to be shipped
                        back empty to where they are needed next. While empty container repositioning is well
                        studied, the European trailer market has received far less attention, even though
                        maritime and inland waterway transport account for about a third of European freight
                        (measured in ton-kilometres), compared with 55% for road.
                    </p>

                    <div className="w-full flex justify-center mt-10 object-cover h-full sm:h-[480px] rounded-xl">
                        <img src="/images/ti_2.png" alt="Trailer Asset Sharing"></img>
                    </div>

                    <p className="my-3 text-lg text-gray-800 dark:text-gray-400">
                        This study explores whether sharing trailers between operators could reduce empty
                        repositioning, cutting costs and emissions across the market.
                    </p>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default ProjectDetailTI
