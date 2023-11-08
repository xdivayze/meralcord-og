import LongBar from "../Home/LongBar"
import { ObeseBar, TextfieldTypes } from "../Home/ObeseBar"
import SubmitButton from "../Home/SubmitButton"
import TextSpace from "../Home/TextSpace"

const Register = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full mt-14 md:mt-28 items-center flex justify-center">
        <LongBar />
      </div>
      <div className="flex-col md:flex-row flex w-[85%] mt-16">
        <div className="md:w-[70%] w-full h-full items-center flex flex-col">
          <div className="w-full items-end flex flex-col">
            <ObeseBar text="meral@meral.club" type={TextfieldTypes.text} />
            <ObeseBar text="********" type={TextfieldTypes.password} />
            <ObeseBar text="meral@meral.club" type={TextfieldTypes.text} />
          </div>
        </div>
        <div className="md:w-[70%] w-full h-full items-center flex flex-col">
        </div>
        <div className="md:w-[70%] w-full h-full items-center flex flex-col">
          <div className="w-full items-end flex flex-col">
            <ObeseBar text="meral@meral.club" type={TextfieldTypes.text} />
            <ObeseBar text="********" type={TextfieldTypes.password} />
            <ObeseBar text="meral@meral.club" type={TextfieldTypes.text} />
          </div>
        </div>

      </div>

    </div>


  )

}

export default Register
