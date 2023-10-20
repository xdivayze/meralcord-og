
const ObeseBar = (props: { text: string }) => {
  return (
    <div className="mt-6 min-h-[10vh] w-full md:w-[50%] bg-dark-clay rounded-3xl drop-shadow-xl">
      {props.text}
    </div>
  )
}

export default ObeseBar
