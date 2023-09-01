import { Link } from "react-router-dom";
import MainButton from "../../components/MainButton";

const Error404 = () => {
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl text-fuchsia-900">404</h1>
      <p>Page not found</p>
      <Link to="/">
        <MainButton text="Go Back"/>
      </Link>
    </div>
  );
};

export default Error404;