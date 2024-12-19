import Banner from "./banner"
import { IntroPage } from "./intro"

const HomePage = () => {
  return (
    <div className="w-full ">
      <IntroPage /> 
      <Banner />
    </div>
  )
}

export default HomePage