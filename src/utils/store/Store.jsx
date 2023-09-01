import { create } from "zustand";

const useStore = create((set) => ({
  url: "",
  setUrl: (url) => set((state) => ({ url: url })),
  file: "",
  setFile: (file) => set((state) => ({ file: file })),
  error: null,
  setError: (error) => set((state) => ({ error: error })),

  outputQuestionsFile: "", // Use this variable to make the final question pdf
  //href(outputQuestionsFile) is the downloadabel file and the 'download' attribute is the final name of the questions pdf after being downloaded (see in the 'src\pages\MainPages\OutPut\OutPut.jsx' line 24-26)
  setOutputQuestionsFile: (outputQuestionsFile) =>
    set((state) => ({ outputQuestionsFile: outputQuestionsFile })), // Use this function to set the final question pdf
}));

export default useStore;
