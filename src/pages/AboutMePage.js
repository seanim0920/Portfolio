import * as React from "react"

import SEO from "../components/seo"
import map1 from "../images/map1.jpg";
import banner from "../images/UpVoice Banner.png";
import recipe from "../images/recipescreen.png";
import menu from "../images/feed.png";
//import "./page-2.css"
//<SEO title="About Me" />

const AboutMePage = () => {
  return (
    <>

      <section style={{flexDirection: "column"}}>
        
        <div style={{ display: "flex", flexDirection: "row", marginLeft: "0vmin", marginRight: "0vmin", justifyContent: "flex-start" }}>
          <img src={map1} alt="Upvoice Web App Map View" style={{maxWidth: "auto", maxHeight: "45vh", marginLeft: "5vmin", marginRight: "5vmin"}} />
          <img src={banner} alt="Upvoice Kiosk Banner" style={{maxWidth: "auto", maxHeight: "45vh", marginLeft: "5vmin", marginRight: "5vmin"}} />
          <img src={recipe} alt="GrocerEase Recipe Screen" style={{maxWidth: "auto", maxHeight: "45vh", marginLeft: "5vmin", marginRight: "5vmin"}} />
          <img src={menu} alt="Five Stars in the Dark Menu" style={{maxWidth: "auto", maxHeight: "45vh", marginLeft: "5vmin", marginRight: "5vmin"}} />
        </div>
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