import LongBar from "./LongBar"
import ObeseBar from "./ObeseBar"
import SubmitButton from "./SubmitButton"

const Home = () => {
  return (
    <div className="w-full h-full justify-center items-center flex flex-col">
      <LongBar />
      <div className="w-[85%] mt-20 items-end flex flex-col">
        <ObeseBar text="" />
        <ObeseBar text="" />
      </div>
      <SubmitButton />

    </div>
  )
}

export default Home
