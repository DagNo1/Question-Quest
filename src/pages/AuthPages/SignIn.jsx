import AuthPage from "./AuthPage";

const SignIn = () => {
  const signInWithEmail = (email) => {};
  const signInWithGoogle = () => {};
  const authData = {
    signin: true,
    header: "Glad to see you back",
    header2: "let’s start where we left off",
    text: "Don’t have an account? ",
    link: "",
    sign_email: signInWithEmail,
    sign_google: signInWithGoogle,
  };
  return <AuthPage data={authData} />;
};

export default SignIn;
