import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
  import Home from "./pages/Home/Home";
  import Error404 from "./pages/ErrorPages/Error404";
  import SignIn from "./pages/AuthPages/SignIn";
  import SignUp from "./pages/AuthPages/SignUp";
  import MainLayout from "./pages/MainPages/MainLayout";
  import OutPut from "./pages/MainPages/OutPut/OutPut";
  import SelectChallenge from "./pages/MainPages/SelectChallenge/SelectChallenge";
  import SelectChallenge2 from "./pages/MainPages/SelectChallenge2/SelectChallenge2";
  import UploadFile from "./pages/MainPages/UploadFile/UploadFile";
  import Loading from "./pages/MainPages/Loading";
  
  //Add your routes here
  /**
   * 
   * 
   * 
   * 
   */
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="main/" element={<MainLayout />}>
          <Route index path="upload/" element={<UploadFile />} />
          <Route path="select/" element={<SelectChallenge />} />
          <Route path="select2/" element={<SelectChallenge2 />} />
          <Route path="output/" element={<OutPut />} />
          <Route path="loading/" element={<Loading/>}/>
        </Route>
        <Route path="signup/" element={<SignUp />} />
        <Route path="signin/" element={<SignIn />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  );
  
  export default router;