import arrow from "../../assets/icons/arrow.svg";
import MainButton from "../../components/MainButton";

const Banner = () => {
  return (
    <div className="flex z-40 flex-col justify-center items-center text-white text-center text-xs gap-4  mt-12 lg:text-sm lg:items-start md:px-20 lg:px-32">
      <p className="text-primary lg:text-2xl">
        Questions Unleashed.AI-Powered.
      </p>
      <p className="text-4xl lg:text-[62px] font-bold ">
        Question <span className="txtGradinet">Quest</span>
      </p>
      <p className="lg:mt-10">
        Transform PDFs into Q&A. Effortless 3-Step Setup.
      </p>
      <div className="flex items-center my-2 mb-4 lg:font-bold  gap-2 max-md:text-[10px] max-md:gap-[1px]">
        <div className="flex flex-row gap-2 max-md:gap-0">
          <p className="txtGradinet">Step 1</p>
          <img src={arrow} alt="arrow" className="w-10 md:w-5 max-md:w-4" />
        </div>
        <p className="lg:font-normal max-md:text-[8px]">Upload your File</p>
        <div className="flex flex-row gap-2 max-md:gap-0">
          <p className="txtGradinet max-md:text-[8px]">Step 2</p>
          <img src={arrow} alt="arrow" className="w-10 md:w-5 max-md:w-4" />
        </div>
        <p className="lg:font-normal max-md:text-[8px]">Answer Questions</p>
        <div className="flex flex-row gap-2 max-md:gap-0">
          <p className="txtGradinet ">Step 3</p>
          <img src={arrow} alt="arrow" className="w-10 md:w-5 max-md:w-4" />
        </div>
        <p className="lg:font-normal max-md:text-[8px]">Wait for Results</p>
      </div>
      <MainButton text="Get Started For Free" />
    </div>
  );
};

export default Banner;
