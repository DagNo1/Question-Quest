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
      text: "30-4s0 Challenges"
    }
  ]
  return (
    <div className="flex justify-center items-center flex-col my-10 gap-10">
      <p className="text-white">Select Your Challenge Type</p>
      <button
        className="text-white/80 border border-white/50  lg:text-xs motion-safe:hover:scale-105 
          bg-purple/50 border-white  font-medium rounded-md text-sm px-12 md:px-5 md:text-xs 
          py-2 text-center mb-2 max-md:px-4 max-md:py-[0.8rem] w-80
          "
      >Multiple Question</button>
      <div className="grid grid-cols-2 gap-2">
        {
          choices.map((choice) => (
            <button
              className="text-white/80 border border-white/50  lg:text-xs motion-safe:hover:scale-105 
          focus:bg-purple/50 focus:border-white  font-medium rounded-md
          text-sm px-12 md:px-5 md:text-xs py-2 text-center mb-2 max-md:px-4 max-md:py-[0.8rem]
          w-40 bg-gray-500/10
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
