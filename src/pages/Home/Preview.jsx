import selectChallange from "./../../assets/other/SelectChallenge.png";
import selectChallange2 from "../../assets/other/SelectChallenge2.png";
import uploadFile from "../../assets/other/UploadFile.png";

const Preview = () => {
  const images = [uploadFile, selectChallange, selectChallange2];
  return (
    <div className="text-white flex flex-col mx-10 items-center z-20">
      <p className="text-xl md:text-xl my-5 md:my-4 text-center font-medium ">
        <span className="txtGradinet font-bold">Quest</span> is one of the most useful AI
        applications I've used.
      </p>
      <div className="flex flex-col w-full bgBar p-10  gap-10 lg:px-28 xl:px-32 m-auto">
        {images.map((img, index) => (
          <img
            src={img}
            className={`border border-purple shadow-xl shadow-purple/10 sm:w-80 md:w-[22.5rem]  lg:w-[30rem] xl:w-[48rem] ${
              index % 2 == 0 ? "self-start mr-42" : "self-end"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Preview;
