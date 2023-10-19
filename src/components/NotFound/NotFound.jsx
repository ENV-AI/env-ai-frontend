import { Link } from "react-router-dom";
import Header from "../Homepage/Header";
import { FaArrowLeftLong } from "react-icons/fa6";

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="m-12 text-white text-center">
        <p className="mb-1 text-xl">Page Not Found</p>
        <Link
          to="/"
          className="text-sm text-gray-400 flex justify-center items-center"
        >
          <FaArrowLeftLong className="mr-1" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
