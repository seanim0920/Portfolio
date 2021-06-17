import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import "./cube.css"

const Cube = () => {
  const [isTouchingCube, setIsTouchingCube] = useState(false)
  const [originalMousePosition, setOriginalMousePosition] = useState({ x: null, y: null })
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 })
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    const updateOriginalMousePosition = (ev) => {
      if (isTouchingCube) {
        setOriginalMousePosition({ x: ev.clientX, y: ev.clientY });
        setCursor("grabbing");
      }
    };

    window.addEventListener("mousedown", updateOriginalMousePosition);
    return () => {
      window.removeEventListener("mousedown", updateOriginalMousePosition);
    };
  }, [isTouchingCube])
  
  const updateMousePosition = useCallback(ev => {
    setMouseOffset({ x: originalMousePosition.x - ev.clientX, y: originalMousePosition.y - ev.clientY });
    console.log(originalMousePosition.y);
  }, [originalMousePosition]);
  
  const cubeStyle = {
    transform: `rotateX(${(mouseOffset.y/30) + 136}deg) rotateY(${(mouseOffset.x/30) + 75}deg)`,
  };

  return (
      <div id="wrapper" style={cursor ? { cursor: cursor } : {}}>
        <div class="viewport">
          <div
            class="cube"
            role="button"
            tabIndex={0}
            onMouseDown={() => {
              window.addEventListener("mousemove", updateMousePosition);
              window.addEventListener(
                "mouseup",
                () => {
                  window.removeEventListener("mousemove", updateMousePosition);
                  setMouseOffset({ x: 0, y: 0 });
                  setCursor(null);
                },
                { once: true }
              );
            }}
            onMouseEnter={()=>setIsTouchingCube(true)}
            onMouseLeave={()=>setIsTouchingCube(false)}
            style={cubeStyle}
          >
            <div class="side"></div>
            <div class="side"></div>
            <div class="side">
              <h1
                style={{
                  fontSize: "8.75vmin",
                  margin: "1vmin",
                  position: "absolute",
                  top: "0vmin",
                  color: "black",
                }}
              >
                fronteras
              </h1>
            </div>
            <div class="side"></div>
            <div class="side"></div>
            <div class="side">
              <h1
                style={{
                  fontSize: "8.75vmin",
                  margin: "1vmin",
                  position: "absolute",
                  top: "29vmin",
                  color: "white",
                }}
              >
                sean
              </h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Cube
