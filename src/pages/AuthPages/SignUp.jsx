import AuthPage from "./AuthPage";

const SignUp = () => {
  const signUpWithEmail = (email) => {};
  const signUpWithGoogle = () => {};
  const authData = {
    signin: false,
    header: "Create an account",
    header2: "Let's get you all set up",
    text: "Already have an account? ",
    link: "",
    sign_email: signUpWithEmail,
    sign_google: signUpWithGoogle,
  };
  return <AuthPage data={authData} />;
};

export default SignUp;
