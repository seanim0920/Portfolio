import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import Timeline from "../components/timeline"
import withSplashScreen from "../components/withSplashScreen"

import HomePage from "../pages/home"
import SecondPage from "../pages/page-2"

const IndexPage = () => {
  return (
    <>
      <SEO title="Sean Fronteras" />
      
      <HomePage/>
      <SecondPage/>
    </>
  )
}

export default withSplashScreen(IndexPage)
