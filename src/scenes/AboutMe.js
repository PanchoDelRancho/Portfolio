import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";

const AboutMe = ({ windowSize }) => {
  // make the positioning of the boxes responsive
  const { width, height } = windowSize;
  let scaleR = [width / 157, 0, -5];
  let scaleL = [-(width / 157), 0, -5];

  // game state variables
  let paddlePosition = 0;
  let ballPosition = 0;
  let gameOn = false;
  let [lost, setLost] = useState(false);
  let borders = [
    -(width / 140.75),
    width / 140.75,
    -(height / 151.23),
    height / 151.23,
  ];

  

  // reset function
  const reset = () => {
    console.table(paddlePosition,ballPosition,gameOn,lost)
    paddlePosition = 0;
    ballPosition = 0;
    gameOn = false;
    setLost(false);
    
  };

  if(lost === true){reset()}


  const Paddle = (props) => {
    const meshRef = useRef();
    const [yPos, setY] = useState(0);
    

    useEffect(() => {
      let speed = 0.5;
      const handleMove = (e) => {
        if (gameOn === false && lost === false) gameOn = true;

        let key = e.key;
        if (key === "w") {
          setY(yPos + speed);
        }
        if (key === "s") {
          setY(yPos - speed);
        }
      };
      document.addEventListener("keypress", handleMove);
    }, [yPos]);

    useFrame(() => {
      if (!gameOn) return;
      if (!meshRef.current) {
        return;
      }

      meshRef.current.position.y = yPos;
      paddlePosition = meshRef.current.position;
    });

    return (
      <mesh {...props} ref={meshRef}>
        <boxGeometry args={[0.3, 2, 0.3]} />
        <meshStandardMaterial color="#14FFEC" />
      </mesh>
    );
  };

  const Ball = (props) => {
    const ballRef = useRef();
    const [acc, setAcc] = useState(false);
    let ballSpeed = 0.05;

    useFrame(() => {
      if (!gameOn) {
       
      return;
      }

      if (!ballRef.current) {
        return;
      }
      if (acc) {
        ballRef.current.position.x += ballSpeed;
        ballRef.current.position.y += ballSpeed / 3;
      }
      if (!acc) {
        ballRef.current.position.x -= ballSpeed;
        ballRef.current.position.y -= ballSpeed / 3;
      }
      ballPosition = ballRef.current.position;
      if (
        ballPosition.x <= borders[0] ||
        ballPosition.x >= borders[1] ||
        ballPosition.y <= borders[2] ||
        ballPosition.y >= borders[3]
      ) {
        setLost(true)
        gameOn = false
        return ;
      }

      if (
        acc === false &&
        ballPosition.x - 0.4 <= -paddlePosition.x &&
        ballPosition.y <= paddlePosition.y + 1 &&
        ballPosition.y >= paddlePosition.y - 1
      ) {
        setAcc(!acc);
      }

      if (
        acc === true &&
        ballPosition.x + 0.4 >= paddlePosition.x &&
        ballPosition.y <= paddlePosition.y + 1 &&
        ballPosition.y >= paddlePosition.y - 1
      ) {
        setAcc(!acc);
      }
    });

    return (
      <mesh {...props} ref={ballRef}>
        <sphereGeometry args={[0.3, 20, 20]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  };

  return (
    <Canvas
      style={{ top: 0, position: "absolute", height:window.innerHeight , width: window.innerWidth }}
    >
      <pointLight position={[0, 0, 6]} />
      <Paddle position={scaleL} />
      <Paddle position={scaleR} />
      <Ball position={[0, 0, -5]} />
    </Canvas>
  );
};

export default AboutMe;
