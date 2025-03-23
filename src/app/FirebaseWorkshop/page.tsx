import FirebaseWorkshop from "./_components/FirebaseWorkshop";




const page = () => {

    const eventData = {
        title: "FireUp with Firebase: GenAI & Web Solutions",
        subtitle: "",
        date: "23rd March 2025",
        time: "1:50 PM – 3:50 PM",
        venue: { location: "Online (Google Meet)", time: "1:50 PM – 3:50 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia-presents-fireup-with-firebase-genai-amp-web-solutions/",
        eventImage: "/images/workshops/firebaseWorkshop.png",
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
        countdown: "March 23, 2025 10:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Get ready to explore the power of Firebase and Generative AI in an exciting hands-on workshop with Google Developer Expert Vrijraj Singh! Whether you're a web developer or an AI enthusiast, this session will equip you with practical skills to build smarter applications.",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        speakers: [
            {
                name: "Vrijraj Singh",
                image: "/images/speakers/VrijrajSingh.webp",
                role: "CTO agprop",
                profileURL: "https://gdsc.community.dev/u/m99rp2/"
            },
        ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Ying Jie Low",
                image: "/images/organisers/no-pfp.jpg",
                role: "Organizer",
                profileURL: "https://gdg.community.dev/u/ying_jie/"
            },
            {
                name: "Samiul Bashar Apon",
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
        <FirebaseWorkshop {...eventData} />

    )
}
export default page