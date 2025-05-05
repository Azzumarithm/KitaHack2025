import HomeLandingSection from "./_components/HomePage/home-landing-section/HomeLandingSection";
// import TimeTickingSection from "./_components/HomePage/time-ticking-section/TimeTickingSection";
// import KitaHackInfoSection from "./_components/HomePage/kitaHack-info-section/KitaHackInfoSection";
// import SdgInfoSection from "./_components/HomePage/sdg-info-section/SdgInfoSection";
// import HowToJoinSection from "./_components/HomePage/howtojoin-section/HowToJoinSection";
import TeamFormationSection from "./_components/HomePage/team-formation-section/TeamFormationSection";
// import JudgingCriteriaSection from "./_components/HomePage/judging-criteria-section/JudgingCriteriaSection";
// import SubmissionCriteriaSection from "./_components/HomePage/submission-criteria-section/SubmissionCriteriaSection";
// import MentorsSection from "./_components/HomePage/mentor-section/MentorSection";
// import FAQsSection from "./_components/HomePage/faqs-section/FAQsSection";
// import AIinfoSection from "./_components/HomePage/ai-info-section/AIinfoSection";



import InnovateWithAISection from "./_components/HomePage/innovate-with-ai/InnovateWithAI";

import SdgAISection from "./_components/HomePage/sdg-ai-section/SdgAISection";
import JudgingCriteriaNew from "./_components/HomePage/judging-criteria-new/judging-criteria";
import BannerHashtagSection from "./_components/HomePage/banner-hashtag-section/BannerHashtagSection";
import FAQsSectionNew from "./_components/HomePage/faqs-section-new/FaqsSectionNew";


// import DemoDayDescSection from "./_components/HomePage/demoDayDesc/demoDayDesc";

// import EventShowcaseSection from "./_components/HomePage/event-showcase-section/EventShowcaseSection";
import DemoDaySection from "./_components/HomePage/demo-day-section/DemoDaySection";
import KitahackWinnerSection from "./_components/HomePage/kitahack-winner/KitahackWinnerSection";

// import EventShowcaseSection from "./_components/HomePage/event-showcase-section/GoogleWorkspace";


export default function Home() {
  return (
    <main className="py-20 space-y-32 z-0">

      <HomeLandingSection />


      {/* <DemoDayDescSection /> */}


      <KitahackWinnerSection/>

      <DemoDaySection/>
      {/* <EventShowcaseSection/> */}


      
      <InnovateWithAISection />

      <BannerHashtagSection/>

      <SdgAISection />

      <TeamFormationSection />
      
      <JudgingCriteriaNew />

      {/* <TimeTickingSection /> */}


      {/* <KitaHackInfoSection /> */}


      {/* <SdgInfoSection /> */}

      {/* <AIinfoSection /> */}

      {/* <HowToJoinSection/> */}



      {/* <JudgingCriteriaSection /> */}

      {/* <SubmissionCriteriaSection/> */}

      {/* <MentorsSection/> */}

      {/* <FAQsSection /> */}

      <FAQsSectionNew />


    </main>
  );
}
