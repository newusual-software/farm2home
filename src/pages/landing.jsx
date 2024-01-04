import Navigations from "../components/common/navigations";
import HomeBanner from "../components/homeBanner";
import Testimonial from "../components/testimonial/testimonial";
import HomeAds from "../components/ads/homeAds";
import { useSelector } from "react-redux";
import { TabsWithIcon } from "../components/molecule/tabs/tab";

import { useState, useEffect } from "react";
import axios from "axios";
import TabItem from "../components/landingSection/tabItem";

const Landing = () => {
  const { user } = useSelector((state) => state.user);
  const [categories, setCategories] = useState(["Most Recent"]);
  const [activeTab, setActiveTab] = useState("Most-Recent");
  const [activeTabValue, setActiveTabValue] = useState("Most-Recent");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://farm2home.cyclic.app/cartegorie/get'
        );
        const fetchedCategories = response.data.data.map((category) => category.name);
        const newCategories = ["Most Recent", ...fetchedCategories];
        setCategories(newCategories);
        setActiveTab(newCategories[0].replace(/\s/g, "-")); // Set the initial active tab value
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchData();
  }, []);

  const categoryQueryParam = categories.map((category) => category.replace(/\s/g, "-"));
  const handleTabClick = (value) => {
    setActiveTab(value);
    setActiveTabValue(value); 
  };
  const data = categories.map((category) => ({
    label: category,
    value: categoryQueryParam[categories.indexOf(category)],
    desc: <TabItem category={activeTab} />,
  }));
  
  return (
    <>
      <Navigations />
      {!user?._id ? <HomeBanner /> : null}
      <main className="px-11">
        <TabsWithIcon data={data} activeTabValue={activeTabValue} handleTabClick={handleTabClick} />
        {/* <ProductsList /> */}
        <Testimonial />
        {!user?._id ? <HomeAds /> : null}
      </main>
    </>
  );
};

export default Landing;
