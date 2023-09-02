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
    <div className="flex justify-center items-center flex-col my-10 gap-5">
      <p className="text-white">Select Your Challenge Type</p>

      {
        choices.map((choice) => (
          <button
            className="text-white/80 border border-white/50  lg:text-xs motion-safe:hover:scale-105 
            focus:bg-purple/50 focus:border-white  font-medium rounded-md
            text-sm px-12 md:px-5 md:text-xs py-2 text-center mb-2 max-md:px-4 max-md:py-[0.8rem]
            w-80 bg-gray-500/10
            "
          >
            {choice.text}
          </button>
        ))
      }

    </div>
  );
};

export default SelectChallenge;
