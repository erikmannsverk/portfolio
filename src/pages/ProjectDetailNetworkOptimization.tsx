import { NavbarDefault } from '../components/NavbarDefault';
import Footer from '../components/Footer';
import ScrollToTop from '../assets/ScrollToTop';

const languages = [
    { id: 1, img: "/images/languages/python.svg", name: "Python" },
    { id: 2, img: "/images/languages/html.webp", name: "HTML" },
]

function ProjectDetailNetworkOptimization() {
    return (
        <>
        <ScrollToTop/>
        <NavbarDefault/>

        <div className="relative overflow-hidden">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-36">
                <div className="max-w-2xl text-center mx-auto">
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl dark:text-white">Network Optimization Tool<span className="text-blue-600"> .</span></h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">A prototype for combining transport demand across offices, customers and tenders</p>
                    <p className="mt-2 text-sm text-gray-500">Developer, 2026</p>
                </div>

                <div className="relative max-w-4xl mx-auto border-t border-blue-gray-100 mt-20 pt-2">
                    <div className="flex py-2 h-12">
                        <div className="flex gap-4 h-full">
                            {languages.map((item) => (
                                <span key={item.id} className="group relative h-full">
                                    <img src={item.img} alt={item.name} decoding="async" className="h-full opacity-90 transition-opacity hover:opacity-100" />
                                    <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                                        {item.name}
                                    </span>
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="w-full flex justify-center mt-10 h-full sm:h-[480px]">
                        <img src="/images/dfds/networkopt.webp" alt="Transport network optimization" decoding="async" className="max-h-full max-w-full object-contain rounded-xl" />
                    </div>

                    <h2 className="mt-12 text-2xl font-bold text-gray-800 dark:text-white">Purpose</h2>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
                        The tool explores route combinations across offices and customers. By combining transport demand, it aims to reduce costs and improve margins, including opportunities to offer customers a lower transport price.
                    </p>

                    <h2 className="mt-12 text-2xl font-bold text-gray-800 dark:text-white">Scope</h2>
                    <ul className="mt-3 list-disc list-inside space-y-2 text-lg text-gray-800 dark:text-gray-400">
                        <li>Combinations between offices using the same TMS</li>
                        <li>Combinations between offices using different TMS platforms</li>
                        <li>Combinations across the whole network and incoming tenders</li>
                    </ul>

                    <p className="mt-8 text-lg text-gray-800 dark:text-gray-400">
                        The current prototype has an HTML interface and uses a dataset prepared in Python. A live demo is coming.
                    </p>
                </div>
            </div>
        </div>

        <Footer/>
        </>
    )
}

export default ProjectDetailNetworkOptimization