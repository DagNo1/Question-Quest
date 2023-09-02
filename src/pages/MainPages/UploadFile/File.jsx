import { useState } from "react";
import UploadButton from "../../../components/UploadButton";
import upload from "./../../../assets/icons/upload.svg";

const File = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);

    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="flex flex-col items-start gap-10 max-md:gap-2 text-white w-fit p-20 max-md:p-6 border-[0.1rem] border-usecond border-solid rounded-[3rem] bg-gradient-to-tl from-[rgb(0,0,0,)] to-slate-800 max-md:items-center">
      <p className="text-3xl font-medium max-md:text-xl">Upload your file</p>
      <div
        className={`flex flex-col gap-10 max-md:gap-4 border-solid border-2 border-primary w-[40rem] max-md:w-[18rem] items-center p-6 max-md:p-2 rounded-[2rem] ${
          isDraggingOver ? "bg-blue-200" : ""
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedFile ? (
          <div className="max-md:hidden">
            <p className=" text-[10px]">
              <span className="font-bold text-sm">Selected File:</span>{" "}
              {selectedFile.name}
            </p>
            <p className="text-[10px]">
              <span className="font-bold text-sm">File Type: </span>
              {selectedFile.type}
            </p>
          </div>
        ) : (
          <div>Drag a .txt/.pdf file here or click to select one.</div>
        )}
        <img src={upload} className="w-24" />
        <div className="flex flex-row text-[8px] items-center gap-2 bg-primary w-fit rounded-md border-black border-solid border-[0.1rem]">
          <input type="file" accept=".txt, .pdf" onChange={handleFileChange} />
        </div>
        <div className="font-medium max-md:text-[10px]">
          Drag and drop your files to{" "}
          <span className="text-primary font-bold">Upload</span>
        </div>
        <div className="text-sm font-light max-md:text-[8px]">
          Upload a .txt/pdf file
        </div>
      </div>
      <p className="text-sm max-md:text-[10px]">
        Some data formats such as dates, numbers, and colors may not be
        recognized
      </p>
      <div className="flex flex-col gap-4 w-full ">
        <p className="text-2xl max-md:text-[14px]"> Upload from URL</p>
        <div className="flex flex-row items-center rounded-lg  w-full py-2 border-solid border-[0.1rem] justify-around max-w-[35rem] max-md:max-w-[20rem] bg-usecond">
          <p className="max-md:text-[10px]">http://</p>
          <UploadButton />
        </div>
      </div>
    </div>
  );
};

export default File;
