enum TextfieldTypes {
  password = "password",
  text = "text"
}


const ObeseBar = ({ text, type }: { text: string, type: TextfieldTypes }) => {
  return (
    <div className="mt-6 min-h-[10vh] w-full md:w-[50%] bg-dark-clay rounded-3xl drop-shadow-xl flex justify-center ">
      <input placeholder={text} className="text-left w-[90%] font-roboto-slab md:text-xl text-sm px-4 py-2 rounded-full bg-gray-300 text-blue-700 focus:outline-none " type={type} />

    </div>
  )
}

export { ObeseBar, TextfieldTypes }
