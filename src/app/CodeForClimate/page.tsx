import FirebaseWorkshop from "./_components/CodeForClimate";




const page = () => {

    const eventData = {
        title: "Code For Climate",
        subtitle: "Build a Carbon Emission App in Flutter",
        date: "20th  March 2025",
        time: "1:00 PM – 5:00 PM",
        venue: { location: " S-08-02@APU Campus & Online (Bevy)", time: "1:00 PM – 5:00 PM" },
        rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-asia-pacific-university-of-technology-innovation-kuala-lumpur-malaysia-presents-code-for-climate-build-a-carbon-emission-app-in-flutter/",
        eventImage: "/images/workshops/CodeForClimate.png",
        gdgLogos: [
            {
                src: {
                    light: "/images/university-logos/APU.svg",
                    dark: "/images/university-logos/APU-dark.svg"
                },
                alt: "GDGoc APU"
            },
            // {
            //     src: {
            //         light: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal.png",
            //         dark: "/images/Events/images/GDSC_Sunway_University_Logo_Transparent_Horizontal_Dark.png"
            //     },
            //     alt: "GDSC Sunway University"
            // }
        ],
        countdown: "March 20, 2025 10:00:00",
        // techStacks: [
        //     { name: "App Write", logo: "/images/Events/images/React_logo.png" },
        //     { name: "Firebase", logo: "/images/Events/images/firebase_logo.png" },
        // ], // optional, leave it as techStacks: [] if there's no techstacks
        // videoUrl: "https://www.youtube.com/watch?v=-FwhBeDb1wM", // optional, leave it as "" if there's no recording
        description: [
            "Join Google Developer Groups (GDG) Asia Pacific University Chapter for a hands-on workshop where you’ll learn to build a functional carbon emission calculator using Flutter!",
        ],
        // schedule: [
        //     { part: "Part 1: Building a website with React", date: "March 15th, 2025" },
        //     { part: "Part 2: WebDev with Firebase", date: "March 16th, 2025" },
        // ],
        // speakers: [
        //     {
        //         name: "Vrijraj Singh",
        //         image: "/images/speakers/VrijrajSingh.webp",
        //         role: "CTO agprop",
        //         profileURL: "https://gdsc.community.dev/u/m99rp2/"
        //     },
        // ], // optional, leave it as speakers: [] if there's no speakers
        organizers: [
            {
                name: "Suzanne Lai",
                image: "/images/organisers/suzanne_lai.webp",
                role: "Organizer",
                profileURL: "https://gdg.community.dev/u/suzanne8/"
            },
            {
                name: "Dalton Gan",
                image: "/images/organisers/dalton_gan_LXkwYhX.webp",
                role: "Mobile App Department Lead",
                profileURL: "https://gdg.community.dev/u/mjmd4q/"
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