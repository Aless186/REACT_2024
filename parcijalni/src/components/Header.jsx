import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="bg-blue-700 mb-12 shadow-lg text-neutral-100">
        <div className="container py-10 mx-auto flex items-center">
          <div className="px-25 mx-20">
            <FaGithub className="inline pr-2 text-5xl" />
            <Link
              to="/"
              className="text-3xl font-bold align-middle px-20 mx-20"
            >
              Github search
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
