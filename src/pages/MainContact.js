import React from "react";

const MainContact = () => {
    return (
        <section id="maincontact">
            <div className="container mx-auto flex px-8 py-8 md:flex-row flex-col max-h-full h-screen">
                <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
                        Interested in hiring me?
                    </h1>
                    <p>Availability: Monday - Friday (9:00 am - 5:00 pm) </p>
                    <p>Email (Prefered): AlanTa.858@gmail.com</p>
                    <p>Phone: (858) 335 - 1284 </p>
                    <a className="font-mono mt-2 text-white hover:bg-gray-700 py-4 px-4 rounded-full" href="./Alan_Ta_Resume_2022.pdf" target="_blank" rel="noopener noreferrer">
                        CHECK OUT MY RESUME HERE</a>
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-white">
                        Some of my Socials
                    </h1>
                    <div className="md:w-1/2 md:h-1/2 w-1/5 h-1/5 grid lg:grid-cols-3 gap-x-8 gap-y-8">
                        <div>
                            <a href="https://www.linkedin.com/in/alantta/" target="_blank" rel="noopener noreferrer">
                                <img className="object-cover object-center rounded"
                                    alt="hero"
                                    src="./IconsData/linkedin_logo_icon.svg" />
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/ata819" target="_blank" rel="noopener noreferrer">
                                <img className="object-cover object-center rounded"
                                    alt="hero"
                                    src="./IconsData/github_icon.svg" />
                            </a>
                        </div>
                        <div>
                            <a href="https://www.facebook.com/alan.ta.12" target="_blank" rel="noopener noreferrer">
                                <img className="object-cover object-center rounded"
                                    alt="hero"
                                    src="./IconsData/facebook_logo_icon.svg" />
                            </a>
                        </div>
                    </div>
                </div>
                <object className="g:flex-grow md:w-1/2" data="Alan_Ta_Resume_2022.pdf" type="application/pdf" width="100%" height="400px">
                </object>
            </div>
        </section>
    );
}
export default MainContact