import File from "./File";

const UploadFile = () => {
  return (
    <div className=" mt-20 flex flex-col items-center h-[80vh] justify-center">
      <div className="bg-gradient-to-t bg-opacity-20 from-first to-second w-fit flex flex-your rounded-[3rem]">
        {/* <Stepper firstColor='purple' secondColor='tertiary' thirdColor='tertiary'/> */}
        <File />
      </div>
    </div>
  );
};

export default UploadFile;
