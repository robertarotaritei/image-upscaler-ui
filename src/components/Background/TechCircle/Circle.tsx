import { useRef } from 'react';
import { useThree } from "@react-three/fiber";

function Circle(props: any) {
  const ref = useRef<any>();
  const { width } = useThree((state) => state.viewport);

  return (
    <mesh
      {...props}
      visible
      castShadow
      position={[width / 5, 0, 0]}
      ref={ref}
    >
      <ringGeometry args={[props.innerRadius, props.outerRadius, 64]} />
      <meshBasicMaterial attach="material" color={props.color} toneMapped={false} />
    </mesh>
  );
}

export default Circle;