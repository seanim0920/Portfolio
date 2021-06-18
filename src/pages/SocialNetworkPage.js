import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import video from "../video/socialnetwork.mp4"
//import "./page-2.css"

const SecondPage = () => {
  return (
    <>
      <SEO title="tifLLC" />

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
              tif LLC
            </h2>
            <h3>
              Social Networking App <br />
              Role: Full-Stack / Lead Developer <br />
              Duration: Sept 2020 - Present <br />
            </h3>
          </div>

          <p style={{ alignItems: "flex-end", marginBottom: "7vmin" }}>
            Responsibilities: <br /> 
            • Developing core features, including a social media feed and friend system, with realtime updates and notifications.<br />
            • Designing secure, robust and cost-efficient networked features to support traffic from many users at once.<br />
            • Working with product managers to scope features, set budgets, conduct user research, and refine product vision.<br />
            • Mentoring developers through code reviews, technical discussions, and pair programming.<br />
          </p>
        </div>
      </div>
    </>
  )
}

export default SecondPage
