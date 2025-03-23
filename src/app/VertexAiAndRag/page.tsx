import VertexAiAndRag from "./_components/VertexAiAndRag";




const page = () => {

    const eventData = {
        title: "Google Vertex AI & RAG Workshop",
        subtitle: "",
        date: "24 March 2025",
        time: "6:00 PM – 7:30 PM",
        venue: { location: "Virtual on Zoom (Non-Monash students) , Room 9304 (Monash students)", time: "6:00 PM – 7:30 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-monash-university-malaysia-selangor-malaysia-presents-google-vertex-ai-amp-rag-workshop/cohost-gdg-on-campus-monash-university-malaysia-selangor-malaysia",
        eventImage: "/images/workshops/VertexAI.jpeg",
        gdgLogos: [
            {
                src: {
                    light: "/images/university-logos/MUM.svg",
                    dark: "/images/university-logos/MUM-dark.svg"
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
        countdown: "March 24, 2025 18:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Join us for a deep dive into Vertex AI, where you'll learn to deploy, manage, and optimize AI models using Google Cloud. Explore Retrieval-Augmented Generation (RAG) techniques to enhance AI-driven solutions, and engage in hands-on exercises that bridge theory with real-world applications. Plus, connect with like-minded individuals and gain expert insights during our networking and Q&A session!",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        // speakers: [
        //     {
        //         name: "Christine Tee",
        //         image: "/images/speakers/Hernando-Ivan-Teddy.png",
        //         role: "Ørsted",
        //         profileURL: "https://gdsc.community.dev/u/m99rp2/"
        //     },
        // ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Sarviin Hari",
                image: "/images/organisers/sarviin_hari.webp",
                role: "Monash University Malaysia Lead",
                profileURL: "https://gdg.community.dev/u/sarviin/"
            },
            {
                name: "Chee Min Hao",
                image: "/images/organisers/chee_min_hao.webp",
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