import * as React from "react"

import SEO from "../components/seo"
import map1 from "../images/map1.jpg";
import brochure from "../images/page-1.jpg";
import fund from "../images/fund.webp";
import banner from "../images/UpVoice Banner.png";
import recipe from "../images/recipescreen.png";
import feed from "../images/feed.png";
import feed2 from "../images/feed2.png";
//import "./page-2.css"
//<SEO title="About Me" />

function setVw() {
  if (typeof document !== `undefined`) {
    let vw = document.documentElement.clientWidth / 100;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
  }
}

setVw();
if (typeof window !== `undefined`) {
  window.addEventListener('resize', setVw);
}

const AboutMePage = () => {
  return (
    <>
      <section class="horizontal">
        <ul class="carousel">
          <li>
            <img src={fund} alt="Upvoice Fund Screen"/>
          </li>
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

        <article style={{flexDirection: "row", marginTop: "4vmin", flex: 1, justifyContent: "space-between"}}>
          <div style={{alignSelf: "flex-start", justifyContent: "flex-start", flex: 0.7}}>            
            <h2 style={{}}>About Me</h2>
            <h3>
            A software engineer passionate about user-focused design
            </h3>
          </div>
          <p style={{columnCount: 2, flex: 1, columnGap: "4vmin"}}>
            My interests include developing accessible and appealing applications that everyone can enjoy, as well as inventing unique experiences that break the mold. My experience includes working with cross-functional teams in fast-paced agile environments, managing systems of sizeable scopes and complexities, writing performant and maintainable code, and finding innovative solutions to complex challenges.
            I'm a very flexible programmer, used to working within lean, agile teams amidst turbulent conditions, and enjoy learning about new technologies and tools. I care very deeply about the people who use the software I develop, and value feedback above all else. My goal is to learn as much as I can, and have fun doing it.
            I graduated from the University of California, Santa Cruz in 2020 with a double major in Computer Science and Computer Game Design. 
          </p>
        </article>
      </section>
    </>
  )
}

//Major projects: GrocerEase, Five Stars in the Dark, Upvoice (egig inc), tif
//contact info
//education

export default AboutMePage