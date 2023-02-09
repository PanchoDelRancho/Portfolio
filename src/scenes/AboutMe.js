import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

let paddlePosition = 0
let ballPosition = 0



const Paddle = (props) => {
  const meshRef = useRef();
  const [yPos, setY] = useState(0);
  

  useEffect(() => {
    let speed = .5
    const handleMove = (e) => {
      let key = e.key;
      if(key==='w'){setY(yPos + speed)}
      if(key==='s'){setY(yPos - speed)}
      }
    ;
    document.addEventListener("keypress", handleMove);
  }, [yPos]);

  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    meshRef.current.position.y = yPos;
    paddlePosition = meshRef.current.position
    
  });

  return (
    <mesh {...props}  ref={meshRef}>
      <boxGeometry args={[0.3, 2, 0.3]}/>
      <meshStandardMaterial color="#14FFEC" />
    </mesh>
  );
};

const Ball =(props)=>{
  const ballRef = useRef()
  const [acc, setAcc]= useState(false)
  let ballSpeed = .05

  useFrame(()=>{
    if (!ballRef.current) {
      return;
    }
    if(acc){
      ballRef.current.position.x += ballSpeed
    }
    if(!acc){
      ballRef.current.position.x -= ballSpeed
    }
    ballPosition = ballRef.current.position

    if (acc === false && ballPosition.x-.4 <= -paddlePosition.x && ballPosition.y <= paddlePosition.y+1 && ballPosition.y >= paddlePosition.y-1){
      setAcc(!acc)
    }

    if (acc === true && ballPosition.x+.4 >= paddlePosition.x && ballPosition.y <= paddlePosition.y+1 && ballPosition.y >= paddlePosition.y-1){
      setAcc(!acc)
      
    }


  })

  return(
    <mesh {...props} ref={ballRef}>
      <sphereGeometry args={[.3, 20, 20]}/>
      <meshStandardMaterial color='white'/>
    </mesh>
  )

}

const AboutMe = ({ windowSize }) => {
  // make the positioning of the boxes responsive
  const { width } = windowSize;
  let scaleR = [width / 157, 0, -5];
  let scaleL = [-(width / 157), 0, -5];
  

  return (
    <Canvas style={{ top: 0, position: "absolute" }}>
      <pointLight position={[0, 0, 6]} />
      <Paddle position={scaleL} />
      <Paddle position={scaleR} />
      <Ball position={[0,0,-5]}/>
    </Canvas>
  );
};

export default AboutMe;
