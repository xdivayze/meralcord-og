import { SetStateAction, Dispatch } from "react"

enum TextfieldTypes {
  password = "password",
  text = "text"
}


const ObeseBar = ({ text, type, setState }: { text: string, type: TextfieldTypes, setState: Dispatch<SetStateAction<string>> | null }) => {
  return (
    <div className="mt-6 min-h-[10vh] w-full md:w-full bg-dark-clay rounded-3xl drop-shadow-xl flex justify-center ">
      <input onChange={(state) => { 
        if (setState !== null ) {
          setState(state.target.value)
        } 
       }} placeholder={text} className="text-left w-[90%] font-roboto-slab md:text-xl text-sm px-4 py-2 rounded-l-3xl rounded-r-3xl bg-gray-300 text-blue-700
      outline-none border-cyan-500 border-x-8 " type={type} />

    </div>
  )
}

export { ObeseBar, TextfieldTypes }
