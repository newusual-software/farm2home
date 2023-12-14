import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const DesktopNavigation = ({ navigationItems }) => {
  let navigate = useNavigate();

  const defaultStyle = "font-bold  text-md capitalize";
  const activeLinkStyle =
    "after:absolute after:bg-gradient-to-r text-green-900 from-green-900 to-green-400 after:w-full after:h-[3px] after:bottom-[-8px] after:left-0";

  const location = window.location.pathname;
  const getProperStyle = (link) => {
    if (location.slice(1).includes(link.url)) {
      return ` ${activeLinkStyle} ${defaultStyle}`;
    }
    else if ("/".includes(link.url) === location[0]) {
     return ` ${activeLinkStyle} ${defaultStyle}`;

    }
    return defaultStyle;
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  }
  const handleSignUp = () => {
    navigate("/sign-up");
  }
  return (
    <div className="items-center text-[#000] w-full justify-between hidden md:flex">
      <div>
        <div className="flex rounded-lg shadow-sm">
          <input
            type="text"
            name="search-input"
            placeholder="what would you like to order today?"
            className="py-3 bg-transparent px-4 block w-full text-[#000] border border-green-900 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          />
          <button
            type="button"
            className="py-3 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-green-800 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            search
          </button>
        </div>
      </div>
      <nav className="flex gap-8">
        {navigationItems.map((link) => (
          <div key={link.label} className="relative cursor-pointer top">
            <a href={link.url} className={`${getProperStyle(link)}`}>
              <p>{link.label}</p>
            </a>
          </div>
        ))}
      </nav>

      <div className="flex gap-2">
        <div>
          <button
            onClick={handleSignIn}
            className="w-[6rem] py-2 rounded-md text-mainGreen bg-transparent border border-green-900"
          >
            Sign In
          </button>
        </div>
        <div>
          <button
            onClick={handleSignUp}
            className="w-[6rem] py-2 rounded-md text-white bg-mainGreen border border-green-900"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

DesktopNavigation.propTypes = {
  navigationItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DesktopNavigation;
