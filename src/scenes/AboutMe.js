import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Mesh } from "three";
import { OrbitControls } from "@react-three/drei";

const Obj = () => {
  const meshRef = useRef(Mesh);
//   const [mouse, setMouse] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMove = (e) => {
//       setMouse({ x: e.clientX / 100, y: e.clientY / 100 });
//     };
//     document.addEventListener("mousemove", handleMove);
//   }, [setMouse]);

//   useFrame(() => {
//     if (!meshRef.current) {
//       return;
//     }

//     meshRef.current.rotation.z = mouse.x;
//     meshRef.current.rotation.y = mouse.y;
//   });

  return (
    <mesh ref={meshRef} scale={1}>
      <boxGeometry />
      <meshStandardMaterial color="#14FFEC" />
    </mesh>
  );
};


const AboutMe = () => {
  return (
    <Canvas style={{ top: 0, position: "absolute" }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <group>
        <Obj />
        <Obj position={[15, 15, 10]} />
      </group>
      <OrbitControls makeDefault/>
    </Canvas>
  );
};

export default AboutMe;
