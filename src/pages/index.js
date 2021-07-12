import * as React from "react"

import SEO from "../components/seo"

import HomePage from "../pages/home"
import SocialNetworkPage from "../pages/SocialNetworkPage"
import GrocerEasePage from "../pages/GrocerEasePage"
import UpvoicePage from "../pages/UpvoicePage"
import FiveStarsintheDarkPage from "../pages/FiveStarsintheDarkPage"
import AboutMePage from "../pages/AboutMePage"

const IndexPage = () => {
  return (
    <>
      <SEO title="Portfolio" />

      {
        <HomePage id="home" />
      }
      {
        <AboutMePage id="about" />
      }
      {
        <SocialNetworkPage id="tif" />
      }
      {
        <UpvoicePage id="upvoice" />
      }
      {
        <GrocerEasePage id="grocerease" />
      }
      {
        <FiveStarsintheDarkPage id="fsitd" />
      }

      <footer>
        <a href="https://www.linkedin.com/in/sean-fronteras-342431185/">Connect with me on LinkedIn</a> or <a href="https://github.com/seanim0920">view my github.</a> For business inquiries email sean.t.front@gmail.com
      </footer>
    </>
  )
}

export default IndexPage
