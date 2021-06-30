import * as React from "react"

import SEO from "../components/seo"
import YoutubeEmbed from "../components/youtubeEmbed";
//import "./page-2.css"
//<SEO title="Five Stars in the Dark" />

const FiveStarsintheDarkPage = () => {
  return (
    <>
      <section style={{flexDirection: "column", marginRight: "0"}}>
        <YoutubeEmbed embedId="Q_NTqn-K1ZM"/>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flexBasis: "content", marginLeft: "10vmin", marginRight: "10vmin", height: "100vh", marginTop: "5vmin" }}>
          <div>
            <h2 style={{ fontSize: "14vmin", lineHeight: "14vmin", marginBottom: "2vmin" }}>Five Stars <br /> in the Dark</h2>
            <h3>
              Computer Game Design Capstone <br />
              Lead Developer / Creative Director <br />
              Duration: Sept 2019 - June 2020 <br />
            </h3>
          </div>
          <div style={{ flexBasis: "0", flexGrow: "1", marginLeft: "5vmin" }}>
            <h4>Achievements:</h4>
            <ul>
              <li>Developed a PC narrative-based driving game that can be played by people with visual impairments with Unity.</li>
              <li>Coordinated an interdisciplinary team of writers, artists, sound designers and engineers to produce a uniquely engaging experience.</li>
              <li>Conceived, iterated and refined the game's vision, which guided every aspect of development and design.</li>
              <li>Brought project through all stages of the development lifecycle, from brainstorming to pitching to implementation to deployment.</li>
              <li>Built internal tools to help expedite game development, including for level and obstacle creation.</li>
              <li><a href="https://gameshowcase.ucsc.edu/past-awards/">Won the Capstone Production, Technical Innovation, and BANANAS awards at the UCSC 2020 Games Showcase.</a></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default FiveStarsintheDarkPage