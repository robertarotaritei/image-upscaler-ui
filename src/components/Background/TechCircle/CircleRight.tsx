import { useRef } from 'react';
import { useFrame, useThree } from "@react-three/fiber";
import { Path, BufferGeometry } from "three";

function CircleRight(props: any) {
  const ref = useRef<any>();
  const { width } = useThree((state) => state.viewport)
  let pts = new Path().absarc(0, 0, props.radius, 0, Math.PI * 2, true).getPoints(50);
  let g = new BufferGeometry().setFromPoints(pts);
  useFrame(() => {
    ref.current.rotation.z = ref.current.rotation.z -= 0.001;
  });
  
  return (
    <mesh
      {...props}
      position={[width / 5, 0, 0]}
    >
      <line_ ref={ref} geometry={g}  onUpdate={(line) => line.computeLineDistances()}>
        <lineDashedMaterial attach="material" color={props.color} dashSize={props.dashSize} gapSize={props.gapSize}/>
      </line_>
    </mesh>
  );
}

export default CircleRight;