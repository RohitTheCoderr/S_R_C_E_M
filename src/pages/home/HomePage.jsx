import Banner from "./banner"
import Courses from "./courses"
import HomepageAbout from "./homepageAbout"
import { IntroPage } from "./intro"

const HomePage = () => {
  return (
    <div className="w-full ">
      <IntroPage /> 
      <Banner />
      <HomepageAbout />
      <Courses />
    </div>
  )
}

export default HomePage