import EventShowcase from "../../Template/EventShowcase/EventShowcase";

const eventDetails = {
  type: "Workshop",
  title: "Google Vertex AI & RAG Workshop",
  date: "24th March 2025, 6:00 PM - 7:30 PM",
  agenda: "Explore the power of Vertex AI & RAG and discover the future of machine learning applications with Google Cloud!.",
  lightImage: "/images/workshops/VertexAI.jpeg",
  darkImage: "/images/workshops/VertexAI.jpeg",
  imageAlt: "Workshop Poster with Speaker",
  rsvpLink: "https://gdg.community.dev/events/details/google-gdg-on-campus-monash-university-malaysia-selangor-malaysia-presents-google-vertex-ai-amp-rag-workshop/cohost-gdg-on-campus-monash-university-malaysia-selangor-malaysia",
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