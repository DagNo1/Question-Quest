import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.svg";
import mailIcon from "../../assets/icons/email.svg";
import line from "../../assets/other/line.svg";
import google from "../../assets/icons/google.svg";
import background from "../../assets/other/bg_signin.png";
/*
    The AuthPage component is responsible for rendering a styled authentication page, providing user sign-in or sign-up options.
    Props
    data (object, required): An object containing data for customizing the content of the authentication page.
      signin (boolean): Specifies whether the page should display sign-in or sign-up options.
      header (string): Header text to be displayed on the page.
      header2 (string): Secondary header text to be displayed on the page.
      text (string): Text content to be displayed on the page.
*/
const AuthPage = ({ data }) => {
  const term = data.signin ? "in" : "up";
  return (
    // them main neutral bg
    <div className="w-full min-h-screen bg-netural lg:flex">
      {/* this is the form div w-1/2 of the page when the screen is lg*/}
      <div className="w-full min-h-screen h-full bgGradient p-5">
        <img className="w-20 tiny:w-36 sm:w-40" src={logo} alt="logo" />
        {/* this div just separates the form form the logo */}
        <div className="flex flex-col h-full mx-2 my-20 md:my-36 md:mx-48 lg:mx-24 lg:my-40">
          {/* this is the main div */}
          <div className="text-white flex flex-col items-center gap-5">
            {/* The two headers */}
            <p className="text-xl sm:text-3xl  font-semibold">{data.header}</p>
            <p className="font-medium text-md sm:text-xl">{data.header2}</p>

            {/* the email text field */}
            <input
              className="block bg-transparent border border-white/50 rounded-md
              text-xs tiny:text-sm p-2.5 sm:text-md w-full lg:w-96  sm:max-w-md
              focus:outline-none focus:border-white focus:ring-white hover:border-white/75"
              placeholder="Email"
              required
            />

            {/* the sign in with your email button */}
            <button
              type="button"
              className="text-white bg-transparent border border-white/50 rounded-md text-center inline-flex items-center justify-center 
              text-xs tiny:text-sm p-2.5 sm:text-md w-full gap-2 px-5 lg:w-96 sm:max-w-md
              motion-safe:hover:scale-105 active:border-white"
            >
              <img
                className="w-[1rem] tiny:w-[1.3rem]"
                src={mailIcon}
                alt="email-icon"
              />
              <p className="font-sm text-xs tiny:text-sm ">
                Sign {term} using you Email
              </p>
            </button>

            {/* the divider in the middle */}
            <div className="flex gap-2">
              <img
                className="w-[9rem] md:w-[12rem] lg:w-[11rem]"
                src={line}
                alt="line"
              />
              <p>Or</p>
              <img
                className="w-[9rem] md:w-[12rem] lg:w-[11rem]"
                src={line}
                alt="line"
              />
            </div>

            {/* the signin/up with google btn */}
            <button
              type="button"
              class=" text-white bg-purple border border-white/50 text-center inline-flex items-center justify-center rounded-md
              text-xs tiny:text-sm p-2.5 sm:text-md w-full gap-2 px-5 lg:w-96 sm:max-w-md md:
              motion-safe:hover:scale-105"
            >
              <img
                className="w-[1rem] tiny:w-[1.3rem]"
                src={google}
                alt="email-icon"
              />
              <p className="font-regular text-xs tiny:text-sm sm:text-md">
                Sign {term} using your Google Account
              </p>
            </button>

            {/* the text below the form */}
            <p className="font-regular text-xs ">
              {data.text}
              <Link className="text-purple">Sign {data.signin ? "up" : "in"}</Link>
            </p>
            {data.signin ? [] : (
              <p className="font-regular text-xs text-center lg:w-80">
                By creating an account you agree to our{" "}
                <Link className="text-purple">Terms of service </Link>and{" "}
                <Link className="text-purple">Privacy Policy</Link>
              </p>
            )}
          </div>
        </div>
      </div>

      {/* the div with the image */}
      <div className="hidden lg:flex w-full object-">
        <img
          src={background}
          className="object-cover w-full opacity-60"
          alt="bg"
        />
      </div>
    </div>
  );
};

export default AuthPage;
