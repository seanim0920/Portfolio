import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import video from "../video/grocerease.mp4"
//import "./page-2.css"

const UpvoicePage = () => {
  return (
    <>
      <SEO title="Upvoice" />

      <h2>An unordered HTML list</h2>
      <ul style={{display: "flex", flex: 1}}>
      <li style={{fontSize: 20}}>Hey there</li>
      <li>Hey there</li>
      <li>Hey there</li>
      </ul>
    </>
  )
}

export default UpvoicePage
