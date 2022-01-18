import React from "react";
import { mainskills } from "../data"
import { maintools } from "../data";

const MainSkill = () => {
    return (
        <section id="mainskill">
            <div className="container mx-auto flex px-8 py-8 md:flex-row flex-col">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
                        Checkout my Skills
                    </h1>
                </div>
            </div>
            <div className="px-8 flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <p className="pl-2">Programming Languages:</p>
            </div>
            <div className="px-2 mt-2 grid lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8">
                {mainskills.map((skill) => (
                    <div className="bg-grey-800 rounded-lg shadow-2xl w-128 h-48 sm:w-full sm:h-full">
                        <div className="flex">
                            <img
                                alt="gallery"
                                className="rounded p-2 h-1/2 w-1/3 object-fit overflow-hidden"
                                src={skill.image}
                            />
                            <div className="p-4 h-1/2 lg:w-600 overflow-hidden">
                                <h1 className="font-bold text-white">{skill.skillType}</h1>
                                <p className=" text-sm text-green-500">{skill.years}</p>
                                <p className=" text-sm text-green-600">Relevent Courses: {skill.course}</p>
                                {/*<p className=" text-sm text-green-700">{skill.description}</p>*/}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="py-8 px-8 flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
                <p className="pl-2">Technologies/Tools:</p>
            </div>
            <div className="mt-2 grid xl:px-56 lg:px-24 md:px-12 sm:px-6 lg:grid-cols-3 md:grid-cols-2 gap-x-8 gap-y-8">
                {maintools.map((tools) => (
                    <div className="card">
                    <div className="relative bg-white pb-2/3">
                            <img
                                alt="gallery"
                                className="absolute p-3 w-full h-full object-fit"
                                src={tools.toolImage}
                            />
                    </div>
                    <div className="m-4"> 
                        <p className="text-sm text-white">Projects: {tools.projectUsed}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default MainSkill