import { Button } from "../../components/Button";

export const ErrorModal = ({ onConfirm, errorName, errorMessage }) => {
  return (
    <div
      className="flex justify-center items-center bg-gray-600 bg-opacity-75 z-10 fixed left-0 w-full h-full"
      onClick={onConfirm}
    >
      <div className="bg-primary w-[600px] h-40 flex flex-col">
        <header className="bg-lightText w-full text-red-400 font-bold px-2 border-b-2 border-white overflow-auto">
          {errorName}
        </header>
        <div className="w-full text-black font-bold px-2 text-start overflow-auto flex-1">
          {errorMessage}
        </div>
        <footer className="border-t-2 border-white w-full px-2">
          <Button name="Okay" onClick={onConfirm} />
        </footer>
      </div>
    </div>
  );
};
