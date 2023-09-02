const MainButton = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="text-white/80 border border-white/50  lg:text-xs motion-safe:hover:scale-105 bg-purple/50 hover:border-white rounded-md font-medium max-md:rounded-[1.2rem] text-sm px-12 md:px-5 md:text-xs py-2 text-center mb-2 max-md:px-4 max-md:py-[0.8rem]"
    >
      {text}
    </button>
  );
};

export default MainButton;
