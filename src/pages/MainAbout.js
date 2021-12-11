import React from "react";

const MainAbout = () => {
    return (
        <section id="mainabout">
            <div className="container mx-auto flex px-8 py-16 md:flex-row flex-col">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Just a little something about me:
                    </h1>
                    <p>I graduated from San Diego State University with a Bachelors of Science in Computer Science.
                        I enjoy programming and like to learn new things about it on the side such as the app creation process.
                        I then took that to the next step and created an app for Android. I also worked with Computer Security
                        for a bit in college. I liked it so much, I joined the school's club, The Cyber Defense Team and then also
                        took some extra courses on Computer Security, Wireless Networks, and Networks and Distribution Systems.
                        Other than programming, I enjoy going to the gym. I go 6 times a week at 8:30 in the morning.  </p>
                    <a className="font-mono mt-2 text-white hover:bg-gray-700 py-4 px-4 rounded-full" href="./Alan_Ta_Resume.pdf">
                        CHECK OUT MY RESUME HERE</a>
                        
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-contain h-full w-full object-center rounded"
                        alt="hero"
                        src="./Alan_03.jpg"
                    />
                </div>
            </div>
            <div className="container mx-auto flex px-8 py-16 flex-col">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Life: </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis ullamcorper ipsum. Vestibulum non fermentum enim.
                    Duis lacinia orci velit, facilisis convallis nisi pulvinar venenatis. Nam ipsum ipsum, fringilla pretium orci non,
                    sollicitudin dignissim lacus. Aliquam fermentum tempus sapien finibus tincidunt. In turpis enim, gravida sed fermentum sed,
                    tristique vel quam. Sed commodo turpis eget sem vehicula tristique.</p>
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-400">Family: </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis ullamcorper ipsum. Vestibulum non fermentum enim.
                    Duis lacinia orci velit, facilisis convallis nisi pulvinar venenatis. Nam ipsum ipsum, fringilla pretium orci non,
                    sollicitudin dignissim lacus. Aliquam fermentum tempus sapien finibus tincidunt. In turpis enim, gravida sed fermentum sed,
                    tristique vel quam. Sed commodo turpis eget sem vehicula tristique.</p>
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-indigo-400">Interest: </h2>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque mollis ullamcorper ipsum. Vestibulum non fermentum enim.
                    Duis lacinia orci velit, facilisis convallis nisi pulvinar venenatis. Nam ipsum ipsum, fringilla pretium orci non,
                    sollicitudin dignissim lacus. Aliquam fermentum tempus sapien finibus tincidunt. In turpis enim, gravida sed fermentum sed,
                    tristique vel quam. Sed commodo turpis eget sem vehicula tristique.</p>
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-green-400">Photos: </h2>

            </div>
        </section>
    );
}
export default MainAbout;
