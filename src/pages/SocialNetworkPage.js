import * as React from "react"

import SEO from "../components/seo"
import video from "../video/socialnetwork.mp4"
//import "./page-2.css"
//<SEO title="tifLLC" />

const SecondPage = () => {
  return (
    <>
      

      <section>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>

        <article>
          <div>
            <h2>
              tif LLC
            </h2>
            <h3>
              Social Networking App <br />
              Full-Stack / Lead Developer <br />
              Duration: Sept 2020 - Present <br />
            </h3>
          </div>

          <div>
            <h4>Responsibilities:</h4>
            <ul>
            <li>Developing core features, including a media feed and friend system, with realtime updates and notifications.</li>
            <li>Designing secure, robust and cost-efficient networked features to support traffic from many users at once.</li>
            <li>Working with product managers to scope features, set budgets, conduct user research, and refine product vision.</li>
            <li>Mentoring developers through code reviews, technical discussions, and pair programming.</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  )
}

export default SecondPage
