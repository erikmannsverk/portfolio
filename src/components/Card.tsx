import {
    Card,
    Typography,
    Button,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

interface Project {
    id: number,
    title: string,
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
        <NavLink className='nav-link' to={`/${project.title}`}>
            <div className="my-32 flex justify-center">
            <Card className="w-full bg-blue-gray-50 shadow-none w-90% lg:flex-row flex-col rounded-3xl hover:transform hover:shadow-lg hover:scale-105 transition ease-in-out duration-700">
                <div className="lg:w-3/5 lg:pt-8 overflow-hidden items-center px-6 shrink-0">
                    <img
                        src={`images/${project.img}`}
                        alt="Transparent Image"
                        className="w-full h-auto object-cover"
                    />
                    </div>
                <div className="lg:w-2/5 lg:pt-12 pt-2 pb-8 lg:px-4 px-12">
                
                    <Typography className="my-2 lg:text-sm text-xs uppercase text-blue-500">
                    {project.category}
                    </Typography>
                    <Typography variant="h1" className="lg:mb-8 lg:text-4xl text-2xl font-bold text-gray-800">
                    {project.title}
                    </Typography>
                    
                    <Typography variant="h4" className="mb-4 lg:text-xl text-xl font-normal h-16 text-gray-600">
                    {project.description}
                    </Typography>

                    <Button variant="text" className="flex bg-gray-50 items-center lg:gap-2">
                        More
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                        </svg>
                    </Button>
                </div>
            </Card>
            </div>

        </NavLink>
        
    );
}