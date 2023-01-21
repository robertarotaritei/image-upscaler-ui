import { useRef } from 'react';
import { useFrame, useThree } from "@react-three/fiber";

function ArcRight(props: any) {
  const ref = useRef<any>();
  const { width } = useThree((state) => state.viewport)
  useFrame(() => {
    ref.current.rotation.z = ref.current.rotation.z -= 0.001;
  });
  
  return (
    <mesh
      {...props}
      visible
      castShadow
      position={[width / 5, 0, 0]}
      ref={ref}
    >
      <ringGeometry args={[props.innerRadius, props.outerRadius, 64, 1, props.thetaStart, props.thetaLength]} />
      <meshBasicMaterial attach="material" color={props.color} toneMapped={false} />
    </mesh>
  );
}

export default ArcRight;