import Navigations from "../components/common/navigations";
import HomeBanner from "../components/homeBanner";
import { tabList } from "../data/navLinks/navigationLinks";
import TabList from "../components/molecule/tabs/tabList";
import ProductsList from "../components/products/product";
import Testimonial from "../components/testimonial/testimonial";
import HomeAds from "../components/ads/homeAds";
import { useSelector } from "react-redux";

const Landing = () => {
  const selectedTab = "Most recent";
  const { user } = useSelector(state => state.user)
  return (
    <>
      <Navigations />
      {!user?._id ? <HomeBanner /> : null}
      <main className="px-11">
        <TabList tabList={tabList} selectedTab={selectedTab} />
        <ProductsList />
        <Testimonial />
        {!user?._id ? <HomeAds /> : null}
        
      </main>
    </>
  );
};

export default Landing;
