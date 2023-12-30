import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearUser } from "../../../redux/user";

const DesktopNavigation = ({ navigationItems }) => {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const userInitals = user?.first_name[0] + user?.last_name[0];

  const defaultStyle = "font-bold  text-md capitalize";
  const activeLinkStyle =
    "after:absolute after:bg-gradient-to-r text-green-900 from-green-900 to-green-400 after:w-full after:h-[3px] after:bottom-[-8px] after:left-0";

  const location = window.location.pathname;
  const getProperStyle = (link) => {
    if (location.slice(1).includes(link.url)) { 
      return ` ${activeLinkStyle} ${defaultStyle}`;
    } else if ("/".includes(link.url) === location[0]) {
      return ` ${activeLinkStyle} ${defaultStyle}`;
    }
    return defaultStyle;
  };
  const handleSignIn = () => {
    navigate("/sign-in");
  };
  const handleSignUp = () => {
    navigate("/sign-up");
  };
  const handleToggleClick = () => {
    setIsCollapseOpen(!isCollapseOpen);
  };
  const handleLogout = () => {
    // Clear localStorage
    localStorage.clear();

    // Clear Redux store using userSlice action
    dispatch(clearUser());
    navigate("/");
    // Add additional logout logic if needed
  };
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
            className="py-3 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-mainGreen  text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            search
          </button>
        </div>
      </div>
      <nav className="flex gap-8">
        {navigationItems.map((link) => (
          <div key={link.label} className="relative cursor-pointer">
            <a href={link.url} className={`${getProperStyle(link)}`}>
              <p>{link.label}</p>
            </a>
          </div>
        ))}
      </nav>

      <div className="flex gap-2">
        {user?._id ? (
          <div className="flex gap-2 justify-center items-center">
            <div className="w-[10rem] h-[2.7rem] bg-mainGreen rounded-[10px] justify-center items-center gap-2 inline-flex">
              <div onClick={() => navigate("/cart")} className="cursor-pointer text-white text-sm font-normal font-workSans leading-snug tracking-wide">
                Track Your Order
              </div>
            </div>
            <div className=" uppercase w-[2.5rem] h-[2.5rem] text-white rounded-full bg-mainGreen inline-flex justify-center items-center ">
              {userInitals}
            </div>
            <div className="capitalize">Hi, {user?.first_name}</div>
            <div className="relative">
              <button
                type="button"
                className="hs-collapse-toggle py-3 px-4 inline-flex border-none outline-none items-center gap-x-2 text-sm font-semibold text-mainGreen disabled:opacity-50 disabled:pointer-events-none static right-0"
                onClick={handleToggleClick}
                aria-expanded={isCollapseOpen}
              >
                <svg
                  className={`rotate-${
                    isCollapseOpen ? "180" : "0"
                  } flex-shrink-0 w-4 h-4 text-mainGreen`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <div
                id="hs-basic-collapse-heading"
                className={`hs-collapse w-full transition-height duration-300 ${
                  isCollapseOpen ? "block" : "hidden"
                }`}
                aria-labelledby="hs-basic-collapse"
                style={{ position: "absolute", top: "40px", left: "-60px" }}
              >
                <button
                  onClick={handleLogout}
                  className="w-[10rem] h-[2.7rem] bg-mainGreen rounded-2xl flex items-center justify-center gap-2"
                >
                  <span className="text-white text-sm font-normal font-workSans leading-snug tracking-wide">
                    Logout
                  </span>
                </button>
              </div>
            </div>
          </div>
                  ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default DesktopNavigation;
