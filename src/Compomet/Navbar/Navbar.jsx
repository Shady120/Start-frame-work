import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState , useEffect} from 'react';
export default function Navbar() {

  const [pageTitle , setPageTitle] = useState("About")
  useEffect(()=>{
    document.title = pageTitle
  },[pageTitle])


   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 50) {
         setIsScrolled(true);
       } else {
         setIsScrolled(false);
       }
     };

     window.addEventListener("scroll", handleScroll);
   }, []);

  return (
    <>
      <nav
        className={`border-gray-200 sticky top-0 z-10 transition-all duration-300 ${
          isScrolled ? "py-1" : "py-4"
        }`}
      >
        <div className="container max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4 ">
          <span className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">
            Start Framework
          </span>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex gap-8 text-white">
              <li>
                <NavLink
                  to=""
                  onClick={() => setPageTitle("About")}
                  aria-current="page"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Portfolio"
                  onClick={() => setPageTitle("Portfolio")}
                  aria-current="page"
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="Contact"
                  onClick={() => setPageTitle("Contact")}
                  aria-current="page"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
