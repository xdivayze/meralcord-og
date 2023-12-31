const SubmitButton = ({ text }: { text: string }) => {
  return (

    <div className=" w-full flex mt-20 flex-col items-center">
      <button className="w-[80%] h-11 bg-blue-600 rounded-3xl drop-shadow-md hover:drop-shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 
          hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-roboto-slab text-center md:text-xl tracking-wide text-base font-bold">{text}</button>
    </div>

  )
}

const SubmitText = ({ prehigh, high, posthigh }: { prehigh: string, high: string, posthigh: string }) => {
  return (

    <div className="md:mt-1 text-gray-300 w-full md:w-1/2 flex flex-col items-center font-roboto-slab text-center md:text-base  text-2xs">
      <p>
        {prehigh} <a className="text-blue-500 hover:text-blue-700" href="https://meral.club" target="_blank">{high}</a> {posthigh}
      </p>
    </div>
  )
}

export { SubmitButton, SubmitText }
