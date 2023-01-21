import MainCanvas from "../Background/MainCanvas";
import AboutText from "./AboutText";

function AboutPage() {
  return (
    <MainCanvas pages={0}>
      <AboutText />
    </MainCanvas>
  );
}

export default AboutPage;