import React, { useState, useEffect, useRef } from "react";

const Stage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [resizeHeight, setResizeHeight] = useState(0);
  const roomRef = useRef();
  const stageRef = useRef();
  useEffect(() => {
    const resizeHandler = () => {
      // console.log(stageRef.current.offsetHeight);

      setResizeHeight(stageRef.current.offsetHeight - window.innerHeight);
    };
    window.addEventListener("resize", resizeHandler);
    window.addEventListener("scroll", () => {
      console.log(resizeHeight);
      const scrollMove = (window.pageYOffset / resizeHeight) * 1000;
      roomRef.current.style.transform = `translateZ(${scrollMove - 500}vw)`;
    });
    resizeHandler();
  });
  return (
    <div className="stage" ref={stageRef}>
      <div className="container">
        <div className="room" ref={roomRef}>
          <div className="wall wall_side wall_left"></div>
          <div className="wall wall_side wall_right"></div>
          <div className="wall wall_front wall_front_a">
            <div className="wall_content">
              <span>Hi</span>
            </div>
          </div>
          <div className="wall wall_front wall_front_b">
            <div className="wall_content">
              <span>Hello</span>
            </div>
          </div>
          <div className="wall wall_front wall_front_c">
            <div className="wall_content">
              <span>Good</span>
            </div>
          </div>
          <div className="wall wall_front wall_front_d">
            <div className="wall_content">
              <span>Bye</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stage;
