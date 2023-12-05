// TabListItem.jsx
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const TabListItem = ({ tab, pageLink, selectedTab }) => {
  const location = useLocation();
  const isRoot = location.pathname === "/";
    
  const [total, setTotal] = useState(tab.numOf);

      useEffect(() => {
        setTotal(tab.numOf);
      }, [tab.numOf]);


  return (
    <Link to={pageLink}>
      <div
        className={`flex h-14 px-2 md:px-4 items-center rounded-t-lg ${
          selectedTab === tab.name.toLowerCase()
            ? ""
            : "cursor-pointer hover:bg-light-slate-4"
        } after:block after:relative after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-lg ${
          selectedTab === tab.name.toLowerCase()
            ? isRoot
              ? "after:bg-green-900"
              : "after:bg-orange-500"
            : "focus:after:bg-slate-400"
        } focus:bg-slate-100 focus:ring-slate-300 child:flex child:items-center`}
      >
        <span
          className={
            "text-base whitespace-nowrap font-workSans font-bold" +
            (selectedTab === tab.name.toLowerCase()
              ? isRoot
                ? "text-green-900"
                : "text-gray-900"
              : "text-slate-900")
          }
        >
          {tab.name}
        </span>
        {total !== undefined && (
          <div
            className={
              "ml-2 py-0.5 px-1.5 h-fit bg-slate-200 text-slate-500 border rounded-full text-xs font-semibold"
            }
          >
            {total}
          </div>
        )}
      </div>
    </Link>
  );
};

export default TabListItem;
