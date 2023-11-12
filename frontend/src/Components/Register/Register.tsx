import { useState } from "react"
import LongBar from "../Home/LongBar"
import { ObeseBar, TextfieldTypes } from "../Home/ObeseBar"
import { SubmitButton } from "../Home/SubmitButton"

const TextSpace = () => {
  return (
    <div className="font-roboto-slab text-gray-200 md:text-xl text-base text-left ml-5 mr-5 mt-6" >
      <p className="indent-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
      <p className="indent-20">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    </div>
  )
}

const doRegister = (regParams: { mail: string, passwd: string, cdv: string, seed: string }) => {

}

const Register = () => {
  const [mail, setMail] = useState("")
  const [passwd, setPasswd] = useState("")
  const [cdv, setCDV] = useState("")
  const [seed, setSeed] = useState("")

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full mt-14 md:mt-28 items-center flex justify-center">
        <LongBar />
      </div>
      <div className="flex-col md:flex-row flex w-[85%] mt-16">
        <div className="md:w-1/3 w-full h-full items-center flex flex-col order-1">
          <div className="w-full items-end flex flex-col">
            <ObeseBar setState={setMail} text="meral@meral.club" type={TextfieldTypes.text} />
            <ObeseBar setState={setPasswd} text="********" type={TextfieldTypes.password} />
            <ObeseBar setState={setCDV} text="code de vérification" type={TextfieldTypes.text} />
          </div>
        </div>
        <div className="md:w-1/3 w-full h-full items-center flex flex-col md:order-2 order-3 ">
          <TextSpace />
          <SubmitButton text="Kayıt" />
        </div>
        <div className="md:w-1/3 w-full h-full items-center flex flex-col md:order-3 order-2">
          <div className="w-full items-end flex flex-col">
            <ObeseBar setState={setSeed} text="seed" type={TextfieldTypes.text} />
            <ObeseBar setState={null} text="rsapriv" type={TextfieldTypes.password} />
            <ObeseBar setState={null} text="rsapub" type={TextfieldTypes.text} />
          </div>
        </div>

      </div>

    </div>


  )

}

export default Register
