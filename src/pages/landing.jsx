import Navigations from "../components/common/navigations";
import HomeBanner from "../components/homeBanner"
import { tabList } from "../data/navLinks/navigationLinks";
import TabList from "../components/molecule/tabs/tabList";
import ProductsList from "../components/products/product";
import Testimonial from "../components/testimonial/testimonial";
import HomeAds from "../components/ads/homeAds";


const Landing = () => {
    const selectedTab = "Most recent";
    return (
      <>
        <Navigations />
        <HomeBanner />
        <main className="px-11">

          <TabList tabList={tabList} selectedTab={selectedTab} />
          <ProductsList />
          <Testimonial/>
          <HomeAds/>
          
        </main>
      </>
    );
}
 
export default Landing;