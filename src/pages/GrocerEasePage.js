import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import video from "../video/grocerease.mp4"
//import "./page-2.css"

const GrocerEasePage = () => {
  return (
    <>
      <SEO title="GrocerEase" />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center"
        }}>
        <video controls style={{ height: "90vh", width: "auto" }}>
          <source src={video} type="video/mp4" />
        </video>

        <div
          style={{
            width: "40%",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "15vmin",
            marginRight: "10vmin"
          }}>
          <div>
            <h2
              style={{
                fontSize: "15vmin",
                color: "white",
                textAlign: "left",
                marginTop: "7vmin",
                lineHeight: "11.5vmin"
              }}
            >
              GrocerEase
            </h2>
            <h3>
              Grocery Tracker and Recipe App <br />
              Role: Front-End Developer <br />
              Duration: Sept 2018 - Dec 2018 <br />
            </h3>
          </div>

          <p style={{ alignItems: "flex-end", marginBottom: "7vmin" }}>
            Acheivements: <br /> 
            • Learned to use React Native and Firebase in 10 weeks.<br />
            • Developed networked features including a login system and a grocery inventory system that synchronizes in realtime with other devices.<br />
            • Designed quality of life features to help users find recipes they can cook, including an inventory matching system and search system.<br />
            • Collaborated with four other engineering students using scrum framework and agile methods.<br />
          </p>
        </div>
      </div>
    </>
  )
}

export default GrocerEasePage
