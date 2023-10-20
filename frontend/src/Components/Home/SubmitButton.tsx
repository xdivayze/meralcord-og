const SubmitButton = () => {
  return (
    <div className="mt-20 w-full flex flex-col items-end ">
      <div className="w-1/2 flex flex-col items-center">
        <button className="w-[80%] h-11 bg-blue-600 rounded-3xl drop-shadow-md hover:drop-shadow-xl"></button>
      </div>
      <div className="mt-1 text-white w-1/2 flex flex-col items-center font-roboto-slab text-center md:text-base text-xs">
        <p>
          Beni cefadan bıktıran yâr cefa etmekten <a className="text-blue-500 hover:text-blue-700" href="https://meral.club">bıkmaz</a> mı?
        </p>
      </div>
    </div>
  )
}

export default SubmitButton
