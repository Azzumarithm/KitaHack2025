import VertexAiAndRag from "./_components/GCPEvent";




const page = () => {

    const eventData = {
        title: "Deep Dive Gemini API Integration with Serverless Cloud Function",
        subtitle: "",
        date: "22nd March 2025",
        time: "10:00 AM - 12:00 PM",
        venue: { location: "Bevy Virtual", time: "10:00 AM - 12:00 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-universiti-malaya-kuala-lumpur-malaysia-presents-deep-dive-gemini-api-integration-with-serverless-cloud-function-1/",
        eventImage: "/images/workshops/Gemini.webp",
        gdgLogos: [
            {
                src: {
                    light: "/images/university-logos/UM.svg",
                    dark: "/images/university-logos/UM-dark.svg"
                },
                alt: "GDGoc MUM"
            },
            // {
            //     src: {
            //         light: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal.png",
            //         dark: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal_Dark.png"
            //     },
            //     alt: "GDSC Sunway University"
            // }
        ],
        countdown: "March 22, 2025 10:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Ready to level up your cloud skills? Join Mr. Nando, seasoned developer and DevFest speaker from Indonesia, for a hands-on GCP workshop!",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        speakers: [
            {
                name: "Hernando Ivan Teddy",
                image: "/images/speakers/Hernando-Ivan-Teddy.png",
                role: "Ørsted",
                profileURL: "https://gdsc.community.dev/u/m99rp2/"
            },
        ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Lai Min Han",
                image: "/images/organisers/lai_min_han_XEgJvOh.webp",
                role: "Organizer / Lead",
                profileURL: "https://gdg.community.dev/u/sarviin/"
            },
            {
                name: "Lim Jun Yi",
                image: "/images/organisers/lim_jun_yi.webp",
                role: "Co-Lead",
                profileURL: "https://gdg.community.dev/u/chee/"
            },
        ],
        sponsorshipTitle: "Sponsorship Opportunities",
        sponsorshipDescription: "Partner with us to support this workshop and gain exposure to a talented group of developers and industry professionals. Become a sponsor and showcase your brand to a highly engaged audience.",
        sponsors: {
            Diamond: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Platinum: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Gold: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Silver: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
            Bronze: [
                { name: "", subtitle: "", logo: "/images/Events/images/tba_sponsorship.png" },
            ],
        },
    };

    return (
        <VertexAiAndRag {...eventData} />

    )
}
export default page