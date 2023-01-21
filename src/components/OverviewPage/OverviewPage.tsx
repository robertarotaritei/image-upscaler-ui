import MainCanvas from "../Background/MainCanvas";
import MainText from "./MainText";

function OverviewPage() {
  return (
    <MainCanvas pages={4}>
      <MainText />
    </MainCanvas>
  );
}

export default OverviewPage;