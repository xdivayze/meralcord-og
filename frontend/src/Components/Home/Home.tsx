import LongBar from "./LongBar"
import { ObeseBar, TextfieldTypes } from "./ObeseBar"
import { SubmitButton, SubmitText } from "./SubmitButton"
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
            <div className="md:w-1/2 w-full">

              <ObeseBar text="meral@meral.club" type={TextfieldTypes.text} />
            </div>
            <div className="md:w-1/2 w-full">

              <ObeseBar text="********" type={TextfieldTypes.password} />
            </div>
          </div>
          <div className="w-full h-full flex flex-col items-end">
            <div className="w-full md:w-1/2 flex flex-col items-end">

              <SubmitButton text="Giriş" />
            </div>

            <SubmitText prehigh="Beni cefadan bıktıran yâr" high="cefa etmekten" posthigh="bıkmaz mı?" />
          </div>
        </div>
        <div className="w-full md:w-[40%] md:mt-6 mt-16 flex md:justify-start justify-center">
          <TextSpace />
        </div>
      </div>

    </div>

  )
}

export default Home
