import Banner from "./banner"
import Courses from "./courses"
import EnquirySection from "./enquiry"
import Founders from "./founders"
import HomepageAbout from "./homepageAbout"
import IntroPage from "./intro"
import RecruiterSection from "./recruiters"

const HomePage = () => {
  return (
    <div className="w-full ">
      <IntroPage /> 
      <Banner />
      <HomepageAbout />
      <Courses />
      <EnquirySection />
      <Founders />
      <RecruiterSection />
    </div>
  )
}

export default HomePage