import React from "react";
import ImageSlider from "../components/ImageSlider";
import { ImagesData } from "../data";

const MainAbout = () => {
    return (
        <section id="mainabout">
            <div className="container mx-auto flex px-8 py-16 md:flex-row flex-col">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Just a little something about me:
                    </h1>
                    <p className="leading-relaxed">I graduated from San Diego State University with a Bachelors of Science in Computer Science.
                        Other than programming, I enjoy going to the gym. I go six times a week at 8:30 in the morning. If you would like to learn about my professional life:
                        <a className="font-mono text-white hover:bg-gray-700 py-1 px-1 rounded-full" href="./Alan_Ta_Resume.pdf">
                        CHECK OUT MY RESUME HERE</a>
                        </p>
                        
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-contain h-full w-full object-center rounded"
                        alt="hero"
                        src="./WebsitePhotos/Alan_03.jpg"
                    />
                </div>
            </div>
            <div className="container mx-auto flex px-8 py-16 flex-col">
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Life: </h2>
                <p> I was born and raised in San Diego. Attended my local High school, where I ran Cross Country and Track. I then enrolled in San Diego State University from 2015 - 2020, where I received a Bachelors of 
                    Science in Computer Science. During my time in college, I was also 
                    involved in the Vietnamese Student Association. I obtained the position of Social Media Chair for the club from 2017 - 2018. It has played a large role for me in a social aspect as well as helped 
                    me gain a better insight into my culture. It taught me what it means to work in a team and gave me practice in leadership. Running the club required weekly meetings, preparing weekly club presenations, organizing events, and providing 
                    the best experience for the club members. It taught me how to deal with problems as they arise (and it's usually something you would never predict) in a cool, quick, and timely manner. I made many friends 
                    and cherished memories. </p>
                <h2 className="title-font leading-relaxed sm:text-4xl text-3xl mb-4 font-medium text-indigo-400">Family: </h2>
                <p>  I am the middle child of 3 excellent brothers. Despite being brothers raised under the same roof, we all created our own personalities, 
                    opinions, strengths and weaknesses. We could not be more different, yet get along and blend well together. It’s always a blessing to be 
                    able to talk about life, goals, and aspirations with your brothers. Blood is thicker than water, I suppose. Interestingly enough, we are all pursuing 
                    technology in one way or another. The oldest, a prestigious graphic designer. The youngest, a UCSD student pursuing a degree in Math-Computer Science 
                    and a rubix cube master. And in the middle, me, a Computer Science graduate and avid programmer, ready to contribute something to the technological world. 
                    We all were raised by our Vietnamese-immigrant parents who have given all they can to us to succeed in life. My father, a fellow programmer of 40 years, 
                    and my mother, the best nail salonist in California, together provide the best parental guidance a child can ask for. No hyperbole when I say this is the 
                    BEST FAMILY EVER. </p>
                <h2 className="title-font leading-relaxed sm:text-4xl text-3xl mb-4 font-medium text-green-400">Interest: </h2>
                <p> Other than programming, I enjoy going to the gym and long walks. Walks are a great relaxation tool for me. I just pop on some headphones, pull up a podcast 
                    or playlist, and let my feet and mind wander. Going to the gym has been an interest of mine since High school. Growing up as the skinny asian kid has always loomed over me. 
                    I eventually took action to my worries and began going to the gym regularly senior year. It has been nothing but up ever since. Gymming has provided me 
                    with a boost in my health as well as a boost in confidence. The amazing thing about gymming is something I also enjoy in programming. It's the attempt to reach the “unattainable''. 
                    By “unattainable”, I mean the forever moving goal post. Yes, I may reach a certain lift or size, but what's next? I cannot stop. I may be able to bench press 185 lbs, but can I lift 195 lbs? 
                    The same applies to programming as well. There is only so much I think I know. Technology is constantly changing and there is always the new and latest thing. Do I just give up? No, of course not. 
                    That's the grind I strive for. I may think my Java programming skills are great, but are they? Have I reached the point where I know all things Java? Probably not, but that’s not going to stop me 
                    from constantly learning and attempting to reach that “unattainable” goal. It may seem morbid to some, but it's something I use to keep going.</p>
                <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-red-400">Photos: </h2>
                <div className="m-auto"><ImageSlider slides={ImagesData}/></div>
            </div>
        </section>
    );
}
export default MainAbout;
