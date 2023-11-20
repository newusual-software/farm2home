// TabList.jsx
import TabListItem from "./tabListItems";

const TabList = ({ tabList, pageId, selectedTab }) => {

  return (
    <nav className="flex w-full overflow-x-auto overflow-y-hidden gap-2 px-14 pt-3">
      {tabList.map((tab, index) => (
        <div
          key={index}
          className={`tool-list-item border-b-2 transition-all ease-in-out ${
            selectedTab === tab.name.toLowerCase()
              ? "border-green-500"
              : "border-transparent hover:border-light-green-8"
          }`}
        >
          <TabListItem
            tab={tab}
            pageLink={`${pageId ? `${pageId}/` : ""}${tab.name
              .toLowerCase()
              .replace(/\s/g, "-")}`}
            selectedTab={selectedTab}
          />
        </div>
      ))}
    </nav>
  );
};

export default TabList;
