/*
    The AuthPage component is responsible for rendering a styled authentication page, providing user sign-in or sign-up options.
    Props
*/
const AuthPage = ({ data }) => {
  const term = data.signin ? "in" : "up";
  return <div>Authenticate if the user is signed in or not</div>;
}