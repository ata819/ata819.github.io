import React from "react";
import { mainprojects } from "../data"

const MainProjects = () => {
    return (
        <section id="mainproject">
            <div className="container mx-auto flex px-8 py-8 md:flex-row flex-col">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
                        Here are my projects:
                    </h1>
                </div>
            </div>
            {/* Project card in grid layout here */}
            <div className="container mx-auto flex px-2 py-2 md:flex-row flex-col">
            <div className="mt-2 grid lg:grid-cols-2 gap-x-8 gap-y-8">
                {mainprojects.map((project) => (
                    <div className="card">
                        <div className="relative bg-white pb-2/3">
                        <img
                            alt="gallery"
                            className="absolute w-full h-full object-cover"
                            src={project.image}
                        />
                        </div>
                        <div className="m-4"> 
                        <h1 className="font-bold text-white">{project.title}</h1>
                        <p className="font-thin ">{project.date}</p>
                        <p className="font-mono text-sm">{project.tech}</p>
                        <p className="block text-green-700">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
}
export default MainProjects