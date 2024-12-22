import React from "react"
import Banner from "./banner"
import HomepageAbout from "./homepageAbout"
import { IntroPage } from "./intro"

const HomePage = () => {
  return (
    <div className="w-full ">
      <IntroPage /> 
      <Banner />
      <HomepageAbout />
    </div>
  )
}

export default HomePage