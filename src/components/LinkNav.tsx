
import { NavLink } from "react-router-dom";

interface LinkNavProps {
    linkName: string;
    title: string;
}

function LinkNav({linkName, title}:LinkNavProps){
    // Scroll on every click, even if we're already on the right page
    function handleClick() {
        if (linkName.startsWith("#")) {
            document.getElementById(linkName.slice(1))?.scrollIntoView({ behavior: "smooth" })
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return(
        <div className='w-28 h-8'>
            <NavLink 
                onClick={handleClick}
                className={({ isActive }) => (isActive ? 'text-gray-700' : 'text-gray-500')}
                to={"/"+linkName}>
                    <p className='text-center items-center font-sans text-xl tracking-wide'>
                    {title}
                    </p>
            </NavLink>
        </div>
    )
}

export default LinkNav