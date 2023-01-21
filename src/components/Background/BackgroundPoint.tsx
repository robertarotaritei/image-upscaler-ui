import { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { Trail } from '@react-three/drei';

function BackgroundPoint(props: any) {
  const ref = useRef<any>();
  const trailRef = useRef<any>();
  let previousTime = 0;
  let direction = 0;
  useFrame((state) => {
    ref.current.position.x = ref.current.position.x += 0.05;
    ref.current.position.y = ref.current.position.y += direction * 0.05;
    if (state.clock.elapsedTime - previousTime > 1.5) {
      direction = Math.random() > 0.5 ? 0 : Math.random() > 0.5 ? 1 : -1;
      previousTime = state.clock.getElapsedTime();
    }
    if (ref.current.position.x > 25) {
      ref.current.position.y = ref.current.position.y += 1;
    }
    if (ref.current.position.y > 25) {
      ref.current.position.x = ref.current.position.x -= 1;
    }
    if (ref.current.position.y > 30) {
      ref.current.position.x = -25 - Math.random() * 40;
      ref.current.position.y = Math.random() * 20 - 10;
      trailRef.current.decay = 1;
    }
  });
  
  return (
    <Trail
      {...props}
      ref={trailRef}
      width={1.5}
      color={props.lineColor}
      length={25}
      decay={1}
      attenuation={(width) => width - 0.001}
    >
      <mesh
        {...props}
        visible
        position={[-25 - Math.random() * 40, Math.random() * 20 - 10, -10]}
        ref={ref}
      >
        <circleGeometry args={[0.15]}/>
        <meshBasicMaterial attach="material" color={props.color} toneMapped={false} />
      </mesh>
    </Trail>
  );
}

export default BackgroundPoint;