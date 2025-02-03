"use client"
import {OrbitControls, Gltf, Environment, CameraControls} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"

export const Experience = () => {
    return (
        <>
        <Canvas camera={{position: [0, 0, 0.0001]}}>
            <CameraManager/>
            <Environment preset="sunset"/>
            <ambientLight intensity={0.8} color="pink"/>
            <Gltf src="/models/basic_classroom.glb" position={[0.2, -1.7, -2]}/>


        </Canvas>
        </>
    );
};

const CameraManager = () => {
    return (
        <CameraControls
            minZoom={1}
            maxZoom={3}
            polarRotateSpeed={-0.3} //reverse for naturel effect
            azimuthRotateSpeed={-0.3} //reverse for naturel effect
            mouseButtons={{
                left:1, //action rotate
                wheel:16, //action zoom
            }}
            touches={{
                one: 32, //action rotate
                two: 512, //action zoom 
            }}
        />
    );
};

