import * as React from "react"

import SEO from "../components/seo"
import android from "../images/upvoiceandroid.webp";
//import video from "../video/grocerease.mp4"
//import "./page-2.css"
//<SEO title="egig inc: Upvoice" />

const UpvoicePage = () => {
  return (
    <>

      <section>
        <img src={android} alt="Upvoice Web App Map View" style={{ height: "100%", width: "auto", marginLeft: "15vw" }} />

        <article>
          <div>
            <h2>
              egig inc.
            </h2>
            <h3>
              Upvoice - Crowdfunding Platform <br />
              Front-End Developer / UI Designer <br />
              Duration: Jan 2019 - June 2019 <br />
            </h3>
          </div>

          <div>
            <h4>Achievements:</h4>
            <ul>
            <li>Produced marketing materials including a promotional banner, pitch poster and slide deck.</li>
            <li>Designed user flows to improve navigation.</li>
            <li>Prototyped responsive user interfaces for desktop and mobile versions of the app with Sketch Anima.</li>
            <li>Developed XML layouts for all screens on Android and communicated with other engineers to ensure they were compatible with the REST API.</li>
            <li><a href="https://ideahub.sites.ucsc.edu/2019/05/23/2019-pitch-for-social-and-creative-enterprise/">Nominated and presented for IDEA Hub’s 2019 Pitch for Social and Creative Enterprise.</a></li>
            </ul>
          </div>
        </article>
      </section>
    </>
  )
}

export default UpvoicePage
