import { useState } from "react";

const UploadButton = ({ handleURL }) => {
  const [urlInput, setUrlInput] = useState("");
  const handleUrlInputChange = (event) => {
    setUrlInput("http://" + event.target.value);
  };
  const handleDownloadFromUrl = async () => {
    try {
      const response = await fetch(urlInput);
      if (response.ok) {
        const blob = await response.blob();
        const fileName = response.headers.get("content-disposition") || "file";
        handleURL(new File([blob], fileName));
      } else {
        console.error("Failed to fetch the file from the URL.");
      }
    } catch (error) {
      console.error("Error while fetching the file:", error);
    }
  };

  return (
    <div className="border-white border-l-2 ">
      <input
        type="text"
        placeholder="www.unsplash.com"
        value={urlInput}
        className=" pl-4 max-md:text-[10px] bg-transparent border-none h-[2.5rem]"
        onChange={handleUrlInputChange}
      />
      <button
        onClick={handleDownloadFromUrl}
        className="h-10 bg-primary text-white text-sm px-4 py-2 border-white border-solid border-[0.1rem] rounded-lg"
      >
        Upload from URL
      </button>
    </div>
  );
};

export default UploadButton;
