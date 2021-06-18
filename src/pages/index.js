import * as React from "react"
import { useState, useEffect, useCallback } from "react"

import SEO from "../components/seo"
import withSplashScreen from "../components/withSplashScreen"

import HomePage from "../pages/home"
import SocialNetworkPage from "../pages/SocialNetworkPage"
import GrocerEasePage from "../pages/GrocerEasePage"
import UpvoicePage from "../pages/UpvoicePage"
import FiveStarsintheDarkPage from "../pages/FiveStarsintheDarkPage"

const IndexPage = () => {
  return (
    <>
      <SEO title="Sean Fronteras" />
      
      {
        //<HomePage/>
      }
      {
        //<SocialNetworkPage/>
      }
      {
        //<GrocerEasePage/>
      }
      {
        //<UpvoicePage/>
      }
      {
        <FiveStarsintheDarkPage/>
      }
      
      
    </>
  )
}

export default withSplashScreen(IndexPage)
