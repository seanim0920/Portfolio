import * as React from "react"
import { useState, useEffect, useCallback } from "react"

//import "./cube.css"

const ScrollButton = (element) => {  
  return (
      <button style={{position: "absolute", color: "white", height: 100, width: 100}} onClick={() => window.location.replace("/#about")}>
        About Me \/
      </button>
  )
}

export default ScrollButton
