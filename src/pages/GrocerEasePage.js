import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import video from "../video/grocerease.mp4"
//import "./page-2.css"

const GrocerEasePage = () => {
  return (
    <>
      <SEO title="GrocerEase" />

      <section>
        <video controls>
          <source src={video} type="video/mp4" />
        </video>

        <article>
          <div>
            <h2>
              GrocerEase
            </h2>
            <h3>
              Grocery Tracker and Recipe App <br />
              Front-End Developer <br />
              Duration: Sept 2018 - Dec 2018 <br />
            </h3>
          </div>

          <div>
            <h4>Achievements:</h4>
            <ul>
            <li>Developed networked features including an account system that allows users to update their grocery inventory across all of their devices synchronously.</li>
            <li>Designed user flows to make all features easily accessible.</li>
            <li>Produced quality of life features including a recipe recommendation system and recipe reader.</li>
            <li>Learned to use scrum framework and agile methods to collaborate with four other engineering students.</li>
            </ul>
          </div>
        </article>
      </section>
    </>
  )
}

export default GrocerEasePage
