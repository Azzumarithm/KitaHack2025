import GoogleAIStudio from "./_components/GoogleAIStudio";




const page = () => {

    const eventData = {
        title: "Google AI Studio Workshop",
        subtitle: "",
        date: "29th March 2025",
        time: "2:00 PM – 3:30 PM",
        venue: { location: "Virtually on Google Meet", time: "2:00 PM – 3:30 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia-presents-google-ai-studio-workshop/",
        eventImage: "/images/ai-studio-icon.png",
        gdgLogos: [
            {
                src: {
                    light: "/images/university-logos/UTM.svg",
                    dark: "/images/university-logos/UTM-dark.svg"
                },
                alt: "GDGoc UTM"
            },
            // {
            //     src: {
            //         light: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal.png",
            //         dark: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal_Dark.png"
            //     },
            //     alt: "GDSC Sunway University"
            // }
        ],
        countdown: "March 29, 2025 14:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Join us for an interactive lab session where you’ll get hands-on experience with Google AI Studio, a powerful platform for building, testing, and scaling AI-powered applications. Whether you're an AI enthusiast, developer, or tech explorer, this session will help you harness AI tools efficiently and integrate them into real-world applications.",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        speakers: [
            {
                name: "Vaibhav Malpani",
                image: "/images/speakers/Vaibhav.png",
                role: "Technical Lead incedo inc.",
                profileURL: "https://gdg.community.dev/events/details/google-gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia-presents-google-ai-studio-workshop/"
            },
        ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Ying Jie Low",
                image: "/images/organisers/ying_jie_low.webp",
                role: "Organizer",
                profileURL: "https://gdg.community.dev/u/ying_jie/"
            },
            {
                name: "Md. Samiul Bashar Apon",
                image: "/images/organisers/md._samiul_bashar_apon.webp",
                role: "Co-Organizer",
                profileURL: "https://gdg.community.dev/u/mb3yqs/"
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
        <GoogleAIStudio {...eventData} />

    )
}
export default page