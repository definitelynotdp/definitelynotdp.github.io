import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { a } from '@react-spring/three'
import * as THREE from 'three';
import dragonModel from '../assets/3d/dragon.glb'
import {useFrame} from "@react-three/fiber";

export function Dragon({...props}) {
  const dragonRef = useRef();
  const { nodes, materials, animations } = useGLTF(dragonModel);
  const { actions } = useAnimations(animations, dragonRef);

  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;
    if (!dragonRef.current) return;

    const firstAnimKey = Object.keys(actions)[0];
    const anim = actions[firstAnimKey];

    if (!anim) return;

    anim.reset().setLoop(THREE.LoopRepeat, Infinity).play();
  }, [actions, dragonRef.current]);

  useFrame(({ clock, camera }) => {
    if (!dragonRef.current) return;

    // Smooth floating effect with slight randomness
    dragonRef.current.position.y = Math.sin(clock.elapsedTime * 1.5) * 0.3 + 2;

    // Get the current dragon position
    const dragonX = dragonRef.current.position.x;
    const cameraX = camera.position.x;

    // Define movement speed (randomized)
    const baseSpeed = 0.008; // Base speed (slower than before)
    const speedVariation = Math.sin(clock.elapsedTime * 0.5) * 0.004; // Small speed variation
    const moveSpeed = baseSpeed + speedVariation;

    // Flip direction when reaching the boundaries
    if (dragonX > cameraX + 12) {
      dragonRef.current.rotation.y = Math.PI;
    } else if (dragonX < cameraX - 12) {
      dragonRef.current.rotation.y = 0;
    }

    // Apply movement based on rotation
    if (dragonRef.current.rotation.y === 0) {
      dragonRef.current.position.x += moveSpeed;
      dragonRef.current.position.z -= moveSpeed * 1.2; // Slightly diagonal movement
    } else {
      dragonRef.current.position.x -= moveSpeed;
      dragonRef.current.position.z += moveSpeed * 1.2;
    }
  });

  return (
      <a.group ref={dragonRef} {...props}>
        <group>
          <PerspectiveCamera
              name="CINEMA_4D_Editor"
              makeDefault={false}
              far={10000000000}
              near={0.01}
              fov={41.112}
              position={[607.279, 452.728, 543.737]}
              rotation={[-0.594, 0.786, 0.446]}
          />
          <primitive object={nodes.flap} />
          <group name="0000_Transport_KA_Skel">
            <skinnedMesh
                name="0000_Transport_KA_Skel_1"
                geometry={nodes['0000_Transport_KA_Skel_1'].geometry}
                material={materials.Tansport_KA01_MI}
                skeleton={nodes['0000_Transport_KA_Skel_1'].skeleton}
            />
          </group>
          <group name="0001_Transport_KA_Skel">
            <skinnedMesh
                name="0001_Transport_KA_Skel_1"
                geometry={nodes['0001_Transport_KA_Skel_1'].geometry}
                material={materials.Tansport_KA02_MI}
                skeleton={nodes['0001_Transport_KA_Skel_1'].skeleton}
            />
          </group>
        </group>
      </a.group>
  );
}