import React, { useRef, useEffect } from 'react'
import { useGLTF, PerspectiveCamera, useAnimations } from '@react-three/drei'
import { a } from '@react-spring/three'
import * as THREE from 'three';
import dragonModel from '../assets/3d/dragon.glb'

export function Dragon({isRotating, ...props}) {
  const dragonRef = useRef();
  const { nodes, materials, animations } = useGLTF(dragonModel);
  const { actions } = useAnimations(animations, dragonRef.current);

  useEffect(() => {
    if (!actions || animations.length === 0) return;

    const firstAnimKey = Object.keys(actions)[0];
    const firstAnim = actions[firstAnimKey];

    if (!firstAnim) return;

    if (!isRotating) {
      firstAnim.reset().setLoop(THREE.LoopRepeat, Infinity).play();
    } else {
      firstAnim.stop();
    }
  }, [actions, animations, isRotating]);

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