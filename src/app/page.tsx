import HomeLandingSection from "./_components/HomePage/home-landing-section/HomeLandingSection";
import TimeTickingSection from "./_components/HomePage/time-ticking-section/TimeTickingSection";
import KitaHackInfoSection from "./_components/HomePage/kitaHack-info-section/KitaHackInfoSection";
import SdgInfoSection from "./_components/HomePage/sdg-info-section/SdgInfoSection";
// import HowToJoinSection from "./_components/HomePage/howtojoin-section/HowToJoinSection";
import TeamFormationSection from "./_components/HomePage/team-formation-section/TeamFormationSection";
import JudgingCriteriaSection from "./_components/HomePage/judging-criteria-section/JudgingCriteriaSection";
// import SubmissionCriteriaSection from "./_components/HomePage/submission-criteria-section/SubmissionCriteriaSection";
// import MentorsSection from "./_components/HomePage/mentor-section/MentorSection";
import FAQsSection from "./_components/HomePage/faqs-section/FAQsSection";
import AIinfoSection from "./_components/HomePage/ai-info-section/AIinfoSection";
import EventShowcaseSection from "./_components/HomePage/event-showcase-section/GoogleWorkspace";

export default function Home() {
  return (
    <main className="py-20 space-y-32 z-0">

      <HomeLandingSection />

      <TimeTickingSection />

      <EventShowcaseSection/>

      <KitaHackInfoSection/>

      <SdgInfoSection/>

      <AIinfoSection/>

      {/* <HowToJoinSection/> */} 

      <TeamFormationSection/>

      <JudgingCriteriaSection/>

      {/* <SubmissionCriteriaSection/> */}

      {/* <MentorsSection/> */}

      <FAQsSection/>

    </main>
  );
}
