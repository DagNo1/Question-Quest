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
  return <div>Authenticate if the user is signed in or not</div>;
};

export default AuthPage;
