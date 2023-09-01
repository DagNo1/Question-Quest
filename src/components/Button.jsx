export const Button = ({ handleOnClick, type, name }) => {
  return (
    <button
      onClick={handleOnClick}
      type={type}
      className="bg-primary text-textColor active:bg-purple px-2 rounded-sm  text-xs xl:text-xs lg:text-xs md:text-xs sm:text-xs "
    >
      {name}
    </button>
  );
};
