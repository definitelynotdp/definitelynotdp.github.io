import { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/Island.glb'
export function Island({
                         isRotating,
                         setIsRotating,
                         setCurrentStage,
                         currentFocusPoint,
                         ...props
                       }) {
  const islandRef = useRef();

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(true);

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;

    lastX.current = clientX;
  };

  const handlePointerUp = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setIsRotating(false);
  };

  const handlePointerMove = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (isRotating) {
      const clientX = event.touches ? event.touches[0].clientX : event.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y += 0.005 * Math.PI;
      rotationSpeed.current = 0.007;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      islandRef.current.rotation.y -= 0.005 * Math.PI;
      rotationSpeed.current = -0.007;
    }
  };

  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  const handleTouchStart = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    lastX.current = clientX;
  }

  const handleTouchEnd = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }

  const handleTouchMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isRotating) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;

      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("touchend", handleTouchEnd);
    canvas.addEventListener("touchmove", handleTouchMove);

    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("touchend", handleTouchEnd);
      canvas.removeEventListener("touchmove", handleTouchMove);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

  // This function is called on each frame update
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;
    } else {
      // When rotating, determine the current stage based on island's orientation
      const rotation = islandRef.current.rotation.y;
      const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  });

  return (
      <a.group ref={islandRef} {...props}>
        <group name="Scene">
          <group name="Scene_1" position={[-4.794, -7.082, -0.974]}>
            <group
                name="Mill-water-wheel"
                position={[3.708, -0.444, 15.395]}
                rotation={[-1.92, 0, 0]}>
              <group name="Node003" position={[-17.708, 4.781, -31.183]}>
                <mesh
                    name="Mill-water-wheel_Texture-base_0"
                    geometry={nodes['Mill-water-wheel_Texture-base_0'].geometry}
                    material={materials['Texture-base']}
                />
              </group>
            </group>
            <group
                name="Mill-wind-wheel"
                position={[-35.783, 3.888, 27.192]}
                rotation={[0.676, -0.445, 0.5]}>
              <group
                  name="Node002"
                  position={[-8.253, -25.75, -39.884]}
                  rotation={[-0.504, 0.637, -0.172]}>
                <mesh
                    name="Mill-wind-wheel_Texture-base_0"
                    geometry={nodes['Mill-wind-wheel_Texture-base_0'].geometry}
                    material={materials['Texture-base']}
                />
              </group>
            </group>
            <group name="Node001" position={[-14, 4.337, -15.788]}>
              <mesh
                  name="Scene_Book-tittle_0"
                  geometry={nodes['Scene_Book-tittle_0'].geometry}
                  material={materials['Book-tittle']}
              />
              <mesh
                  name="Scene_Texture-base-gloss-jpg_0"
                  geometry={nodes['Scene_Texture-base-gloss-jpg_0'].geometry}
                  material={materials['Texture-base-gloss-jpg']}
              />
              <mesh
                  name="Scene_Texture-base_0"
                  geometry={nodes['Scene_Texture-base_0'].geometry}
                  material={materials['Texture-base']}
              />
              <mesh
                  name="Scene_Texture-base_0001"
                  geometry={nodes['Scene_Texture-base_0001'].geometry}
                  material={materials['Texture-base']}
              />
            </group>
          </group>
          <group
              name="flag"
              position={[-11.513, 5.415, -8.004]}
              rotation={[-Math.PI / 2, -Math.PI / 6, 0]}>
            <group name="Node004" position={[-7.262, -8.16, -9.035]}>
              <mesh
                  name="0"
                  geometry={nodes['0'].geometry}
                  material={materials['Texture-base']}
                  morphTargetDictionary={nodes['0'].morphTargetDictionary}
                  morphTargetInfluences={nodes['0'].morphTargetInfluences}
              />
            </group>
          </group>
          <group
              name="flag-second"
              position={[-11.494, 5.47, -27.496]}
              rotation={[-Math.PI / 2, 0, 0]}>
            <group name="Node005" position={[-7.262, -8.16, -9.035]}>
              <mesh
                  name="1"
                  geometry={nodes['1'].geometry}
                  material={materials['Texture-base']}
                  morphTargetDictionary={nodes['1'].morphTargetDictionary}
                  morphTargetInfluences={nodes['1'].morphTargetInfluences}
              />
            </group>
          </group>
          <group name="Waterfall" position={[-4.339, -7.082, -0.9]}>
            <group name="Node006" position={[-14, 4.337, -15.788]}>
              <mesh
                  name="Waterfall_Texture-base-gloss-jpg_0"
                  geometry={nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry}
                  material={materials['Texture-base-gloss-jpg']}
              />
            </group>
          </group>
          <group name="deers" position={[-23.122, -7.131, 13.626]}>
            <group name="Node007" position={[4.328, 4.387, -30.387]}>
              <mesh
                  name="deers_Texture-base_0"
                  geometry={nodes['deers_Texture-base_0'].geometry}
                  material={materials['Texture-base']}
              />
            </group>
          </group>
        </group>
      </a.group>
  )
}