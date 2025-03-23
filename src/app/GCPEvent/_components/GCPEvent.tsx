'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import { useTheme } from 'next-themes';


interface GCPEventProps {
    title: string;
    subtitle: string;
    date: string;
    time: string;
    venue: { location: string; time: string };
    rsvpLink: string;
    eventImage: string;
    description: string[];
    schedule?: { part: string; date: string }[];
    speakers?: { name: string; image: string; role: string; profileURL: string }[];
    organizers: { name: string; image: string; role: string; profileURL: string }[];

    // Sponsorship Information
    sponsorshipTitle: string; // Title for sponsorship section (e.g., "Sponsorship Opportunities")
    sponsorshipDescription: string; // Description of sponsorship benefits
    sponsors: {
        Diamond?: { name: string; subtitle?: string; logo: string }[];
        Platinum?: { name: string; subtitle?: string; logo: string }[];
        Gold?: { name: string; subtitle?: string; logo: string }[];
        Silver?: { name: string; subtitle?: string; logo: string }[];
        Bronze?: { name: string; subtitle?: string; logo: string }[];
    };

    // GDG Logos Section
    gdgLogos: {
        src: { light: string; dark: string };
        alt: string;
    }[];

    // Countdown
    countdown: string;
    videoUrl?: string;
    techStacks?: { name: string; logo: string }[];
}

const GCPEvent: React.FC<GCPEventProps> = ({
    title,
    subtitle,
    date,
    time,
    venue,
    rsvpLink,
    eventImage,
    description,
    speakers,
    organizers,
    sponsorshipTitle,
    sponsorshipDescription,
    sponsors,
    gdgLogos,
    countdown,
    videoUrl,
    techStacks,
}) => {
    const [timeLeft, setTimeLeft] = useState({
        days: "0",
        hours: "0",
        minutes: "0",
        seconds: "0",
    });

    const { theme } = useTheme();


    useEffect(() => {
        const startCountdown = (endDate: string) => {
            const interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = new Date(endDate).getTime() - now;

                if (distance < 0) {
                    clearInterval(interval);
                    setTimeLeft({ days: "0", hours: "0", minutes: "0", seconds: "0" });
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString();
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ).toString();
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString();
                const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString();

                setTimeLeft({ days, hours, minutes, seconds });
            }, 1000);

            return () => clearInterval(interval); // Cleanup function to stop interval
        };

        startCountdown(countdown); // Uses countdown prop dynamically
    }, [countdown]); // Re-run if countdown changes

    return (
        <main className="container mx-auto flex flex-col justify-center items-center gap-20 py-[8rem]">
            {/* Hero Section */}
            <div className="container mx-auto my-20 flex gap-20 flex-col items-center lg:flex-row px-10 md:px-20 lg:px-8 text-center lg:text-left max-w-6xl">
                <div className="lg:w-[450px] lg:min-w-[550px]">
                    <Link href={rsvpLink} target="_blank" rel="noopener noreferrer">
                        <h1 className="flex flex-col font-bold text-3xl md:text-5xl">
                            {title}
                            <span className="text-lg text-gray-700 dark:text-gray-400">{subtitle}</span>
                        </h1>
                    </Link>
                    <ul className="mt-10 text-lg font-bold hidden lg:flex flex-col gap-4">
                        <li>Date: <em>{date}</em></li>
                        <li>Time: {time}</li>
                        <li>Venue: {venue.location}</li>
                    </ul>
                    <Link href={rsvpLink} target="_blank" rel="noopener noreferrer">
                        <button className="lg:mt-8 lg:mb-10 my-10 bg-blue-600 text-white font-semibold py-4 px-6 rounded shadow hover:scale-110 transition">
                            RSVP Now
                        </button>
                    </Link>
                </div>
                <div className="mb-12 lg:mb-0">
                    <Image
                        src={eventImage}
                        alt="Event Banner"
                        width={500}
                        height={300}
                        className="rounded-xl shadow-xl shadow-blue-400"
                    />
                </div>
            </div>


            {/* GDG LOGO */}
            <section className="container flex flex-wrap justify-center mx-auto flex-col gap-12 lg:gap-0 items-center lg:flex-row">
                {gdgLogos.map((logo, index) => (
                    <Image
                        key={index}
                        src={theme === "dark" ? logo.src.dark : logo.src.light}
                        alt={logo.alt}
                        width={500}
                        height={300}
                        className="w-full max-w-[300px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] h-auto object-contain rounded-lg xl:mx-20"
                    />
                ))}
            </section>



            {/* Recordings */}

            <section className={"container min-w-full min-h-full mx-5"}>
                {videoUrl && (
                    <div className="mt-6">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-center">Watch the Event Video</h2>
                        <div className="mt-4 flex justify-center">
                            <iframe
                                src={videoUrl.replace("watch?v=", "embed/")}
                                title="Event Video"
                                allowFullScreen
                                className="rounded-lg shadow-lg w-2/3 h-96"
                            />
                        </div>
                    </div>
                )}

            </section>


            {/* Countdown Timer */}
            <section className="container mt-20 px-6 mx-auto bg-center bg-no-repeat bg-cover">
                <div className="px-6 text-gray-800 md:px-12 lg:text-left xl:px-52">
                    <h2 className="font-semibold leading-7 text-center text-red-500">
                        Time ticking ⏰
                    </h2>
                    <p className="mt-2 text-3xl text-center font-[GoogleSans-Bold] font-bold text-white">
                        Days until Workshop
                    </p>

                    <div className={"flex flex-col text-white text-center mt-4 gap-5 sm:flex-row sm:justify-center"}>
                        <div className={"flex flex-col bg-red-500 py-2 border rounded-lg sm:w-32"}>
                            <span className={"text-6xl"}>{timeLeft.days}</span>
                            <span className={"text-3xl"}>days</span>
                        </div>
                        <div className={"flex flex-col bg-blue-500 py-2 border rounded-lg sm:w-32"}>
                            <span className={"text-6xl"}>{timeLeft.hours}</span>  {/* Corrected */}
                            <span className={"text-3xl"}>hours</span>
                        </div>
                        <div className={"flex flex-col bg-green-500 py-2 border rounded-lg sm:w-32"}>
                            <span className={"text-6xl"}>{timeLeft.minutes}</span>  {/* Corrected */}
                            <span className={"text-3xl"}>minutes</span>
                        </div>
                        <div className={"flex flex-col bg-yellow-500 py-2 border rounded-lg sm:w-32"}>
                            <span className={"text-6xl"}>{timeLeft.seconds}</span>  {/* Corrected */}
                            <span className={"text-3xl"}>seconds</span>
                        </div>



                    </div>
                </div>
            </section>

            {/* Technology Stacks */}
            {techStacks && techStacks.length > 0 && (
                <section className="container mx-auto text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-6">Technology Stacks</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {techStacks.map((tech, index) => (
                            <div key={index} className="w-20 h-20 sm:w-24 sm:h-24 relative">
                                <Image
                                    src={tech.logo}
                                    alt={tech.name}
                                    layout="fill"
                                    objectFit="contain"
                                    className="rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Event Details */}
            <section className="container my-24 mx-auto flex flex-col items-center lg:flex-row text-gray-700 dark:text-gray-400 px-10 md:px-20 lg:px-8 xl:flex-row text-center lg:text-left max-w-7xl">
                <h1 className="font-bold text-3xl text-center md:text-5xl lg:min-w-[450px] dark:text-white">
                    {title}
                </h1>

                <ul className="flex flex-col gap-3 pt-5 lg:pl-10 lg:mr-12 lg:pt-0 lg:gap-4">
                    {description.map((desc, index) => (
                        <li key={index} className="text-justify">
                            {desc}
                        </li>
                    ))}

                    <br />

                    {/* <li className="flex flex-col flex-wrap gap-3 justify-center lg:flex-col lg:gap-2">
                        {schedule?.map((item, index) => (
                            <span key={index}>
                                🗓️ <span className="font-bold">{item.part}</span>: {item.date}
                            </span>
                        ))}
                    </li> */}

                    <li className="flex flex-col flex-wrap gap-3 justify-center lg:flex-col lg:gap-2">
                        <span>⏰ Time: {venue.time}</span>
                        <span>📍 Venue: {venue.location}</span>
                    </li>
                </ul>
            </section>

            {/* Speakers Section */}

            <section className="w-full flex flex-wrap justify-center items-center  pt-10 px-4">
                <h1 className={"text-center font-black text-3xl lg:text-5xl mb-5"}>Speakers</h1>
                <div className="w-full flex flex-wrap justify-center items-center pt-10 px-4">

                    {speakers && speakers.map((speaker, index) => (
                        <div
                            key={index}
                            className="relative w-80 h-[260px] p-4 my-14 mx-6 bg-white rounded-lg flex flex-col justify-center items-center shadow-md dark:bg-gray-800"
                        >
                            {/* Profile Image Container */}
                            <div className="top-0 left-2/4 overflow-hidden absolute rounded-full w-38 h-38 aspect-square shadow-xl -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    src={speaker.image}
                                    alt={speaker.name}
                                    width={152}
                                    height={152}
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            {/* Name and Role */}
                            <p className="text-gray-700 mt-20 mb-2 font-bold text-xl dark:text-white">
                                {speaker.name}
                            </p>
                            <p className="text-gray-700 font-normal dark:text-gray-400">
                                {speaker.role}
                            </p>

                            <div>
                                {speaker.name === "Hernando Ivan Teddy" ?

                                    <Dialog>
                                        <DialogTrigger className={"mt-5 mb-2 bg-blue-500 transition ease-in-out delay-50 hover:bg-white text-white hover:text-blue-500 hover:border hover:border-blue-700 font-bold py-2 px-4 rounded dark:hover:bg-gray-700 dark:hover:text-white dark:hover:border-white"}>View Bio

                                        </DialogTrigger>
                                        <DialogContent className={"w-4/5 h-4/5 overflow-scroll border rounded-md"}>
                                            <DialogHeader className={"space-y-5 mt-4"}>
                                                <DialogDescription className="flex justify-center">
                                                    <Image src={speaker.image} alt={speaker.name} width={250} height={250} className="rounded-md" />
                                                </DialogDescription>
                                                <DialogTitle className={"text-center text-2xl"}>Hernando Ivan Teddy</DialogTitle>
                                                <p className={"text-center"}>Ivan is a technology professional with over a decade of international experience across payment gateways, telecommunications, and renewable energy.</p>

                                                <p className={"text-center"}>Specializing in cloud computing, distributed systems, and scalable APIs, he has contributed to projects from SMEs to global operations.</p>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>

                                    :

                                    <button className="mt-5 mb-2 bg-blue-500 transition ease-in-out delay-50 hover:bg-white text-white hover:text-blue-500 hover:border hover:border-blue-700 font-bold py-2 px-4 rounded dark:hover:bg-gray-700 dark:hover:text-white dark:hover:border-white">

                                        <a target="_blank" href={speaker.profileURL} className="flex flex-row gap-2 items-center">
                                            <span>View Profile</span>
                                            <svg className="inline-block h-[14px] md:h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                            </svg>
                                        </a>
                                    </button>

                                }

                            </div>

                        </div>
                    ))}
                </div>
            </section>


            {/* Organisers Section */}
            <section className="w-full flex flex-wrap justify-center items-center px-4">
                <h1 className={"text-center font-black text-3xl lg:text-5xl mb-5"}>Organisers</h1>
                <div className="w-full flex flex-wrap justify-center items-center pt-10 px-4 ">

                    {organizers && organizers.map((organizer, index) => (
                        <div
                            key={index}
                            className="relative w-80 h-[260px] p-4 my-14 mx-6 bg-white rounded-lg flex flex-col justify-center items-center shadow-md dark:bg-gray-800"
                        >
                            {/* Profile Image Container */}
                            <div className="top-0 left-2/4 overflow-hidden absolute rounded-full w-38 h-38 shadow-xl -translate-x-1/2 -translate-y-1/2">
                                <Image
                                    src={organizer.image}
                                    alt={organizer.name}
                                    width={152} // Equivalent to w-38 (38 * 4px)
                                    height={152}
                                    className="w-full"
                                />
                            </div>

                            {/* Name and Role */}
                            <p className="text-gray-700 mt-20 mb-2 font-bold text-xl dark:text-white text-center">
                                {organizer.name}
                            </p>
                            <p className="text-gray-700 text-center font-normal dark:text-gray-400">
                                {organizer.role}
                            </p>

                            {/* Profile Button */}
                            <button className="mt-5 mb-2 bg-blue-500 transition ease-in-out delay-50 hover:bg-white text-white hover:text-blue-500 hover:border hover:border-blue-700 font-bold py-2 px-4 rounded dark:hover:bg-gray-700 dark:hover:text-white dark:hover:border-white">
                                <a target="_blank" href={organizer.profileURL} className="flex flex-row gap-2 items-center">
                                    <span>View Profile</span>
                                    <svg className="inline-block h-[14px] md:h-[20px]" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"></path>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    ))}
                </div>
            </section>
            {/* Sponsorship Section */}

            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-5 xl:gap-12 place-items-center md:place-items-baseline lg:flex lg:justify-between">
                    <div className="ml-6 mr-6 md:ml-6 md:mr-0 xl:ml-24 flex flex-col gap-4 min-w-screen md:text-left">
                        <h1 className="font-black text-4xl text-center md:text-left">{sponsorshipTitle}</h1>
                        <p className="text-center md:text-left lg:min-w-fit">{sponsorshipDescription}</p>
                    </div>

                    <Tabs defaultValue="Diamond" className="min-w-fit mt-8 ml-6 mr-6 md:ml-0 md:mr-6 xl:mr-24">
                        <TabsList className="flex-wrap">
                            {Object.keys(sponsors).map((tier) => (
                                <TabsTrigger key={tier} value={tier}>
                                    {tier}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {Object.entries(sponsors).map(([tier, sponsorList]) => (
                            <TabsContent key={tier} value={tier}>
                                <div className="gap-5 flex flex-col items-center md:items-start pt-5">
                                    {sponsorList?.map((sponsor, index) => (
                                        <div key={index} className="flex flex-col">
                                            <h1>{sponsor?.name}</h1>
                                            <p className="text-sm text-gray-400">{sponsor?.subtitle}</p>
                                            <Image
                                                src={sponsor?.logo}
                                                alt={sponsor?.name}
                                                width={300}
                                                height={80}
                                                className="mt-2 border rounded-md"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

        </main >
    );
};

export default GCPEvent;
