import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0 hover:bg-gray-900 py-2 px-4 rounded-full">
                    <Link to="/">Alan Ta</Link>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <div className="flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                        <Link to="/MainAbout" className="bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full">About</Link>
                        <Link to="/MainProjects" className="bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full">Projects</Link>
                        <Link to="/MainContact" className="bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full">Contact</Link>
                        <Link to="/MainSkill" className="bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full">Skills</Link>
                        <Link to="/MainBlog" className="bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full">Blog</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
