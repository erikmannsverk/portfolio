import {
    Card,
    Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

interface Project {
    id: number,
    title: string,
    page: string,
    category: string,
    role: string,
    year: string,
    description: string,
    img: string,
    mock1: string,
    mock2: string,
    techstack: string[],
    link: string,
}

interface ProjectsProps {
    project: Project;
}

export function HorizontalCard({project}: ProjectsProps) {


    return (
        <NavLink className='nav-link' to={`/${project.page}`}>
            <div className="my-16 flex justify-center">
            <Card className="group w-full bg-blue-gray-50 shadow-none w-90% lg:flex-row flex-col rounded-3xl hover:transform hover:shadow-lg hover:scale-[1.02] transition ease-in-out duration-300">
                <div className="lg:w-3/5 lg:pt-6 overflow-hidden items-center px-6 shrink-0">
                    <img
                        src={`images/${project.img}`}
                        alt="Transparent Image"
                        className="w-full lg:h-64 h-48 object-contain"
                    />
                </div>
                <div className="lg:w-2/5 lg:self-center pt-2 pb-6 lg:px-4 px-12">
                
                    <Typography className="my-2 lg:text-sm text-xs uppercase text-blue-500">
                    {project.category}
                    </Typography>
                    <Typography variant="h1" className="mb-2 lg:text-4xl text-2xl font-bold text-gray-800">
                    {project.title}
                    </Typography>
                    
                    <Typography variant="h4" className="mb-6 lg:text-xl text-lg font-normal text-gray-600">
                    {project.description}
                    </Typography>

                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                        View project
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </span>
                </div>
            </Card>
            </div>

        </NavLink>
        
    );
}