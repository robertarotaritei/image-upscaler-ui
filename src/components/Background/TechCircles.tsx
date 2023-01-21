import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { MathUtils } from "three";
import CircleLeft from "./TechCircle/CircleLeft";
import CircleRight from "./TechCircle/CircleRight";
import Circle from "./TechCircle/Circle";
import ArcLeft from "./TechCircle/ArcLeft";
import ArcCircleRight from "./TechCircle/ArcCircleRight";
import colors from "../globalVariables";

const rsqw = (t: number, delta = 0.1, a = 1, f = 1 / (2 * Math.PI)) => (a / Math.atan(1 / delta)) * Math.atan(Math.sin(2 * Math.PI * t * f) / delta)

function TechCircles() {
  const ref = useRef<any>();
  const scroll = useScroll();
  const { width } = useThree((state) => state.viewport)
  useFrame(({ mouse, camera }) => {
    camera.position.x = MathUtils.lerp(camera.position.x, mouse.x * 0.4, 0.01)
    camera.position.y = MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
  })
  useFrame((state, delta) => {
    const r1 = scroll.range(0 / 4, 2 / 4)
    const r2 = scroll.range(2 / 4, 2 / 4)
    const r3 = scroll.range(2 / 4, 1)
    ref.current.rotation.x = MathUtils.damp(ref.current.rotation.x, (-Math.PI / 3) * r2, 4, delta)
    ref.current.rotation.y = MathUtils.damp(ref.current.rotation.y, (-Math.PI / 10 ) * r2 * (width * 0.04), 4, delta)
    ref.current.position.x = MathUtils.damp(ref.current.position.x, (width / 7) * r3, 4, delta)
    ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = MathUtils.damp(ref.current.scale.z, 1 + 0.24 * (1 - rsqw(r1)), 4, delta)
  })
  return (
    <group ref={ref}>
      <CircleLeft radius={2.8} color={colors.main} dashSize={1.5} gapSize={0.15} />
      <CircleRight radius={2.7} color={colors.main} dashSize={1.5} gapSize={0.15} />
      <ArcLeft innerRadius={2.5} outerRadius={2.6} color={colors.accent} thetaStart={Math.PI / 2 - 0.1} thetaLength={1.5} />
      <CircleRight radius={2.4} color={colors.main} dashSize={1.25} gapSize={0.125} />
      <CircleLeft radius={2.3} color={colors.main} dashSize={1} gapSize={0.1} />
      <Circle innerRadius={2.1} outerRadius={2.2} color={colors.main} />
      <ArcLeft innerRadius={1.9} outerRadius={2} color={colors.main} thetaStart={Math.PI * 3 / 2 - 0.1} thetaLength={1.5}/>
      <ArcCircleRight innerRadius={1.6} outerRadius={1.7} color={colors.accent} thetaLength={1.3} />
      <CircleLeft radius={1.5} color={colors.main} dashSize={0.05} gapSize={0.05} />
      <CircleRight radius={1.45} color={colors.main} dashSize={0.05} gapSize={0.05} />
      <ArcLeft innerRadius={1.2} outerRadius={1.3} color={colors.main} thetaStart={Math.PI * 3 / 2 - 0.1} thetaLength={1.5}/>
      <ArcLeft innerRadius={1.2} outerRadius={1.3} color={colors.main} thetaStart={Math.PI / 2 - 0.1} thetaLength={1.5}/>
      <ArcCircleRight innerRadius={0.8} outerRadius={0.9} color={colors.main} thetaLength={1.3} />
      <CircleLeft radius={0.6} color={colors.main} dashSize={0.5} gapSize={0.1} />
      <Circle innerRadius={0.3} outerRadius={0.5} color={colors.accent} />
    </group>
  );
}

export default TechCircles;