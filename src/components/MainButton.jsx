const MainButton = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="text-white/80 border border-white/50  text-center motion-safe:hover:scale-105 bg-purple/50 hover:border-white font-medium rounded-md text-sm px-12 md:px-5 md:text-xs py-2 text-center mb-2"
    >
      {text}
    </button>
  );
};

export default MainButton;
