import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();

  const { scene, animations } = useGLTF(birdScene);

  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    if (!birdRef.current) return;

    // Lively vertical oscillation: faster and higher base altitude for a fluttering effect
    birdRef.current.position.y = Math.sin(clock.elapsedTime * 2) * 0.15 + 3;

    // Use smaller boundaries relative to the camera for erratic, contained movement
    if (birdRef.current.position.x > camera.position.x + 5) {
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 5) {
      birdRef.current.rotation.y = 0;
    }

    // Define a base speed with some variation for erratic flight
    const baseSpeed = 0.015;
    const speedVariation = Math.sin(clock.elapsedTime * 3) * 0.005;
    const moveSpeed = baseSpeed + speedVariation;

    // Apply movement with a slightly different diagonal factor for the bird
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += moveSpeed;
      birdRef.current.position.z -= moveSpeed * 0.8;
    } else {
      birdRef.current.position.x -= moveSpeed;
      birdRef.current.position.z += moveSpeed * 0.8;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.01, 0.01, 0.01]}>
      // use the primitive element when you want to directly embed a complex 3D
      model or scene
      <primitive object={scene} />
    </mesh>
  );
}
