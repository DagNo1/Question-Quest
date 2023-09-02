const SelectChallenge2 = () => {
  const choices = [
    {
      text: "1-10 Challenges"
    },
    {
      text: "10-20 Challenges"
    },
    {
      text: "20-30 Challenges"
    },
    {
      text: "30-40 Challenges"
    }
  ]
  return (
    <div className="flex justify-center items-center flex-col my-10 gap-10 md:gap-5">
      <p className="text-white md:text-2xl lg:text-3xl">Select Your Challenge Type</p>
      <button
        className="text-white/80 border border-white/50 lg:text-xs
        bg-purple/50  font-medium rounded-md
        text-sm py-3 text-center mx-10 mb-2 max-md:px-4 max-md:py-[0.8rem]
        w-72  md:w-[25rem] md:text-lg lg:w-[30rem] lg:text-xl"
      >Multiple Question</button>
      <div className="grid grid-cols-2 gap-2 md:gap-5">
        {
          choices.map((choice) => (
            <button
              className="text-white/80 border border-white/50  lg:text-xs motion-safe:hover:scale-105 
          focus:bg-purple/50 focus:border-white font-medium rounded-md
          text-sm px-12 md:px-5 py-2 text-center mb-2 max-md:px-4 max-md:py-[0.8rem]
          w-40 bg-gray-500/10 md:w-48 md:text-md lg:text-lg lg:w-56
          "
            >
              {choice.text}
            </button>
          ))
        }
      </div>

    </div>)
};

export default SelectChallenge2;
