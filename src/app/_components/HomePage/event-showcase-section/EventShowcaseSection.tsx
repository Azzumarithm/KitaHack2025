import EventShowcase from "../../Template/EventShowcase/EventShowcase";

const eventDetails = {
    type: "Workshop",
    title: "Google Workspace with Appsheet",
    date: "8th March 2025, 10:00am – 12:00pm",
    agenda: "Introduction to Neural Networks, Introduction to TensorFlow, Computer Vision - Image Recognition, and Image Classification using CNN.",
    lightImage: "/images/Left-Image.png",
    darkImage: "/images/Left-Image-dark.png",
    imageAlt: "Workshop Poster with Speaker",
    rsvpLink: "https://your-rsvp-link.com",
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