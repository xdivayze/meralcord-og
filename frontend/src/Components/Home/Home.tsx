import LongBar from "./LongBar"
import ObeseBar from "./ObeseBar"
import SubmitButton from "./SubmitButton"
import TextSpace from "./TextSpace"

const Home = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full mt-28 items-center flex justify-center">
        <LongBar />
      </div>
      <div className="flex-row-reverse flex w-[85%] mt-16">
        <div className="w-[60%] h-full items-center flex flex-col">
          <div className="w-full items-end flex flex-col">
            <ObeseBar text="" />
            <ObeseBar text="" />
          </div>
          <SubmitButton />
        </div>
        <div className="w-[40%] mt-6">
          <TextSpace />
        </div>
      </div>

    </div>

  )
}

export default Home
