import { Effects, Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import TechCircles from "./TechCircles";
import colors from "../globalVariables";
import BackgroundPoint from "./BackgroundPoint";

function MainCanvas(props: {pages: number, children: JSX.Element}) {
  const renderBackground = () => {
    var indents = [];
    for (var i = 0; i < 20; i++) {
    indents.push(<BackgroundPoint key={i} lineColor={colors.lines} color={colors.main} />);
    }
    return indents;
  }

  return (
    <div className="canvas">
      <Canvas style={{ height: "100vh", width: "105vw" }}>
        <color attach="background" args={[colors.background]} />
        <Effects disableGamma>
          <unrealBloomPass threshold={0.3} strength={0.8} radius={0.2} />
        </Effects>
        <ambientLight />
        { renderBackground() }
        <ScrollControls pages={props.pages}>
          <TechCircles />
          <Scroll html>
            {props.children}
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default MainCanvas;