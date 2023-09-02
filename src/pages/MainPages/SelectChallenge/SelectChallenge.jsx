const SelectChallenge = () => {
  const choices = [
    {
      text: "Multiple Question"
    },
    {
      text: "True/False"
    },
    {
      text: "Multiple Question"
    },
    {
      text: "True/False"
    }
  ]
  return (
    <div className="flex justify-center items-center flex-col my-10 gap-5 md:my-20 md:gap-10">
      <p className="text-white md:text-2xl lg:text-3xl">Select Your Challenge Type</p>
      <div className="flex flex-col gap-5 lg:w-[40rem]">
      {
        choices.map((choice) => (
          <button
            className="text-white/80 border border-white/50  lg:text-xs motion-safe:hover:scale-105 
            focus:bg-purple/50 focus:border-purple  font-medium rounded-md
            text-sm py-3 mx-10 mb-2 px-4 max-md:py-[0.8rem] text-start 
            w-72 bg-gray-500/10  md:w-[25rem] md:text-lg lg:w-96 lg:text-xl lg:self-start lg:w-[32rem]
            "
          >
            {choice.text}
          </button>
        ))
      }
      </div>
    </div>
  );
};

export default SelectChallenge;
