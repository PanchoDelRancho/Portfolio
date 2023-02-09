import Header from "../src/components/Header";
import AboutMe from "./scenes/AboutMe";
import { useEffect, useState } from "react";

const App = () => {
  const [size, setSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleSize = () => {
      setSize({ height: window.innerHeight - 80, width: window.innerWidth });
    };
    window.addEventListener("resize", handleSize);

    handleSize();
  }, [setSize]);

  return (
    <>
      <div
        style={{
          position: "fixed",
          width: `${size.width}px`,
          height: `${size.height + 80}px`,
        }}
        className="gameBorder"
      >
        <Header />
        <div style={size}>
          <AboutMe windowSize={size} />
        </div>
      </div>

      <div style={{width: `${size.width}px`}}>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div style={{ postition: "sticky" }}>Hello world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>ss
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
        <div>hellow world</div>
      </div>
    </>
  );
};

export default App;
