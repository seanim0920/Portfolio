import * as React from "react"

import SEO from "../components/seo"
import map1 from "../images/map1.jpg";
import brochure from "../images/page-1.jpg";
import game from "../images/screenshot.png";
import banner from "../images/UpVoice Banner.png";
import recipe from "../images/recipescreen.png";
import feed from "../images/feed.png";
import feed2 from "../images/feed2.png";
//import "./page-2.css"
//<SEO title="About Me" />

const AboutMePage = () => {
  return (
    <>
      <section style={{flexDirection: "column"}}>
        <ul class="carousel">
          {
            /*
          <li>
            <img src={game} alt="Fsitd Screenshot"/>
          </li>
            */
          }
          <li>
            <img src={map1} alt="Upvoice Web App Map View"/>
          </li>
          <li>
            <img src={banner} alt="Upvoice Kiosk Banner"/>
          </li>
          <li>
            <img src={recipe} alt="GrocerEase Recipe Screen"/>
          </li>
          <li>
            <img src={feed} alt="tif Feed Screen"/>
          </li>
          <li>
            <img src={feed2} alt="tif Feed Screen 2"/>
          </li>
          <li>
            <img src={brochure} alt="Fsitd Brochure"/>
          </li>
        </ul>

        <div style={{ display: "flex", flexDirection: "row", flexBasis: "content", marginLeft: "10vmin", marginRight: "10vmin", marginTop: "5vmin" }}>
          <div>
            <h2 style={{ lineHeight: "14vmin", marginBottom: "2vmin" }}>About Me</h2>
            <h3>
              B.S. Computer Science <br />
              B.S. Computer Game Design <br />
              University of California, Santa Cruz <br />
            </h3>
          </div>
          <div style={{ flexBasis: "0", flexGrow: "1", marginLeft: "5vmin", marginTop: "0" }}>
            <p>I'm a software engineer passionate about user-focused design.
              My experience includes developing accessible, high-quality consumer-facing applications, working with cross-functional teams in fast-paced agile environments, managing systems of sizeable scopes and complexities, writing performant and maintainable code, and finding innovative solutions to complex challenges.
              I care very deeply about the people who use the software I develop, and value feedback above all else. My goal is to learn as much as I can, and have fun doing it.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMePage