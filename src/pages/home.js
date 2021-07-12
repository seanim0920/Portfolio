import * as React from "react"

import SEO from "../components/seo"
import Cube from "../components/cube"

const HomePage = () => {
  return (
    <>
      <SEO title="Sean Fronteras" />
      
      <div style={{
          height: "16vw",
          width: "99vw",
          position: "absolute",
        }}>
        <Cube/>
      </div>

      <h1
        style={{
          fontSize: "36vw",
          lineHeight: "30vw",
        }}
      >
        SEAN
      </h1>
      <h1
        style={{
          fontSize: "16.1vw",
          lineHeight: "20vw",
        }}
      >
        FRONTERAS
      </h1>

    </>
  )
}

export default HomePage
