import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import withSplashScreen from "../components/withSplashScreen"
import "./cube.css"

const IndexPage = () => (
  <>
    <SEO title="Welcome" />

    <div id="wrapper">
      <div class="viewport">
        <div class="cube">
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
  </>
)

export default withSplashScreen(IndexPage)
