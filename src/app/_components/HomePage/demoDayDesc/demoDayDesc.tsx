import { GlobeAltIcon } from "@heroicons/react/24/solid";

const DemoDayDescSection = () => {
    return (
        <>
            {/* Part 1 */}
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <div className="space-y-6 p-6 md:px-12 xl:px-52">
                    {/* Badge Component */}
                    <span id="demo-day-section" className="bg-[#F6F3FF] inline-flex items-center rounded-full border border-[#7C3AED] px-3 py-1 text-sm text-purple-700">
                        <GlobeAltIcon className="h-4 w-4 text-purple-500" />
                        <span className="ml-1">demo-day</span>
                    </span>
                    {/* Headers */}
                    <h1 id="demo-day_title" className="font-semibold text-3xl text-black md:text-5xl xl:text-6xl dark:text-white">
                        <span className="bg-gradient-to-r from-[#FF3998] to-[#116BFF] bg-clip-text text-transparent">Demo Day</span>
                    </h1>
                    {/* Italic Wordings */}
                    <p className="max-w-2xl lg:mb-8">
                        <i className="text-[#5A5A5A] dark:text-gray-400">
                            The culmination of innovation, collaboration, and creativity. After an intense period of developing, learning, and building.
                        </i>
                    </p>
                </div>
                {/* Buttons */}
                <div className="flex flex-col gap-3 items-center sm:flex-row sm:space-x-4 justify-center lg:justify-start">
                    <a id="knowMoreButton" href="https://waze.com/ul/hw281rvzw9" target="_blank" rel="noopener noreferrer">
                        <span className="text-center inline-block px-7 py-3 text-[#1D68E5] border border-[#1D68E5] rounded-full">
                            Open Waze
                        </span>
                    </a>
                    <a id="registerButton" href="/images/demo-day/demoDay.ics" target="_blank" rel="noopener noreferrer">
                        <span className="text-center inline-block px-7 py-3 bg-gradient-to-r from-[#FF3998] to-[#116BFF] text-white border-gray-100/10 rounded-full">
                            Save The Date
                        </span>
                    </a>
                </div>
            </div>

            {/* Part 2 */}


            {/* Part 3 */}
            <div className="space-y-6 p-6 md:px-12 xl:px-52">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full px-12 gap-8 md:gap-4 text-center">
                        {/* VENUE */}
                        <div className="space-y-3 px-6 md:px-12 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-4">
                                <img src="images/demo-day/venue.svg" alt="venue-icon" className="w-[91px] h-[89px]"/>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400 max-w-[480px]"><i>Jalan Lagoon Selatan, Bandar Sunway, 47500 Subang Jaya, Selangor</i></p>
                        </div>
                        {/* AGENDA */}
                        <div className="space-y-3 px-6 md:px-12 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-4">
                                <img src="images/demo-day/agenda.svg" alt="agenda-icon" className="w-[91px] h-[89px]"/>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400 max-w-[480px]"><i>Pitching, Closing Ceremony, and More!</i></p>
                        </div>
                        {/* TIME */}
                        <div className="space-y-3 px-6 md:px-12 flex flex-col items-center text-center">
                            <div className="flex justify-center mb-4">
                                <img src="images/demo-day/time.svg" alt="time-icon" className="w-[91px] h-[89px]"/>
                            </div>
                            <p className="text-gray-600 text-sm md:text-base dark:text-gray-400 max-w-[480px]"><i>Sunday, May 4, 2025 10:00 AM – 3:00 PM (MYT)</i></p>
                        </div>
                </div>
            </div>
        </>
    );
};

export default DemoDayDescSection;
