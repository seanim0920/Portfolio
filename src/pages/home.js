import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import Cube from "../components/cube"

const HomePage = () => {
  return (
    <>
      <SEO title="Sean Fronteras" />
      
      <div style={{
          height: "50%",
          width: "100%",
          position: "absolute",
        }}>
        <h1
          style={{
            fontSize: "75vmin",
            color: "gray",
            textAlign: "center",
            lineHeight: "60vmin",
          }}
        >
          SEAN
        </h1>
        <h1
          style={{
            fontSize: "33.5vmin",
            color: "gray",
            textAlign: "center",
            lineHeight: "50vmin",
          }}
        >
          FRONTERAS
        </h1>
      </div>

      <Cube/>
    </>
  )
}

export default HomePage
