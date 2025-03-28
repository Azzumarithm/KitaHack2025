import EventShowcase from "../../Template/EventShowcase/EventShowcase";

const eventDetails = {
  type: "Workshop",
  title: "Google AI Studio Workshop",
  date: "29th March 2025,  01:50 PM – 3:40 PM (MYT)",
  agenda: "Get hands-on experience with Google AI Studio, a powerful platform for building, testing, and scaling AI-powered applications.",
  lightImage: "/images/workshops/google-ai-studio.jpg",
  darkImage: "/images/workshops/google-ai-studio.jpg",
  imageAlt: "Workshop Poster with Speaker",
  rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-universiti-teknologi-malaysia-johor-bahru-malaysia-presents-google-ai-studio-workshop/",
  reviewLink: "https://your-all-workshops-link.com",
};


const EventShowcaseSection = () => {
  return (
    <>
      <EventShowcase event={eventDetails} />
    </>
  )
}
export default EventShowcaseSection