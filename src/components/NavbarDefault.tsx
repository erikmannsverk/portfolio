import React, { useState } from "react";
import LinkNav from "./LinkNav";
import { NavLink } from "react-router-dom";

 
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  const [currentImage, setCurrentImage] = useState('./images/memoji_data.webp');

  const handleClick = () => {
    // Add your desired action here
    if (currentImage === './images/memoji_data.webp') {
      setCurrentImage('./images/memoji_wave.webp');
    } else {
      setCurrentImage('./images/memoji_data.webp');
    }
  };
 
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div className="sticky top-0 z-10 mx-auto max-w-screen-lg py-6 lg:px-12">
      <div className="container mx-auto flex items-center justify-between bg-transparent px-4 text-blue-gray-900 lg:px-10">

        <div className='bg-white shadow-md rounded-full w-14 h-14 flex items-center justify-around'>
          <button className="">
          <img src={currentImage} onClick={handleClick} alt="avatar" className="h-10 w-10 rounded-full object-cover" />
          </button>
        </div>

        <div className= "rounded-full shadow-md lg:items-center lg:justify-around h-14 hidden lg:flex bg-white">
          <LinkNav linkName={''} title={'Home'}></LinkNav>
          <LinkNav linkName={'#about'} title={'About'}></LinkNav>
        </div>

        <div className= "rounded-full shadow-md lg:items-center lg:justify-around w-14 h-14 hidden lg:flex bg-white">
        <NavLink 
          className='nav-link'
          to={"/contact"}>
            <img src="images/mail_no_bg.webp" alt="Contact" className="h-10 w-10 rounded-full object-cover" />
        </NavLink>
        </div>
        {/* This is for the menu part */}
        <button
          type="button"
          aria-label={openNav ? "Close navigation menu" : "Open navigation menu"}
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {openNav && (
        <div className="bg-white rounded-xl mr-16 w-64 float-right">
          <NavLink className={({ isActive }) => (isActive ? 'text-gray-700' : 'text-gray-400')} to={"/"}>
                <p className='text-left font-sans p-2 text-xl  tracking-wide'>Home</p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-gray-700' : 'text-gray-400')} to={"/#about"}>
                <p className='text-left font-sans p-2 text-xl  tracking-wide'>About</p>
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'text-gray-700' : 'text-gray-400')} to={"/contact"}>
                <p className='text-left font-sans p-2 text-xl  tracking-wide'>Contact</p>
          </NavLink>
        </div>
      )}
    </div>
  );
}