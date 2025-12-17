import SimpleNavbar from "../components/SimpleNavbar";
import AboutHeader from "./about/AboutHeader";
import SubscribeBanner from "./about/SubscribeBanner";
import WeeklyUpdates from "./about/WeeklyUpdates";
import IconSystem from "./about/IconSystem";
import AddtnlText from "./about/AddtnlText";
import GridSection from "./about/GridSection";
import BottomGrid from "./about/BottomGrid";


function About() {
  return (
    <>
      <SimpleNavbar />
      <AboutHeader />
      <SubscribeBanner />
      <WeeklyUpdates />
      <IconSystem />
      <AddtnlText />
      <GridSection />
      <BottomGrid />

    </>
  );
}

export default About;
