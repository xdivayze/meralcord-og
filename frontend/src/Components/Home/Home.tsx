import LongBar from "./LongBar"
import ObeseBar from "./ObeseBar"
import SubmitButton from "./SubmitButton"
import TextSpace from "./TextSpace"

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full mt-14 md:mt-28 items-center flex justify-center">
        <LongBar />
      </div>
      <div className="flex-col md:flex-row-reverse flex w-[85%] mt-16">
        <div className="md:w-[60%] w-full h-full items-center flex flex-col">
          <div className="w-full items-end flex flex-col">
            <ObeseBar text="" />
            <ObeseBar text="" />
          </div>
          <SubmitButton />
        </div>
        <div className="w-full md:w-[40%] md:mt-6 mt-16">
          <TextSpace />
        </div>
      </div>

    </div>

  )
}

export default Home
