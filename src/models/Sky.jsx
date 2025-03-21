import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import skyScene from "../assets/3d/sky.glb";

export function Sky({ isRotating, ...props }) {
    const { nodes } = useGLTF(skyScene);
    const skyRef = useRef();

    useFrame((_, delta) => {
        if (skyRef.current) {
            skyRef.current.rotation.y += 0.05 * delta;
        }
    });

    return (
        <group ref={skyRef} {...props} dispose={null}>
            <mesh
                geometry={nodes.skybox_mesh.geometry}
                material={nodes.skybox_mesh.material}
                scale={[50, 50, 50]}
            />
        </group>
    );
}