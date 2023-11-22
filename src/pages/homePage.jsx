import Navigations from "../components/common/navigations";
import HomeBanner from "../components/homeBanner"
import { tabList } from "../data/navLinks/navigationLinks";
import TabList from "../components/molecule/tabs/tabList";
import ProductsList from "../components/products/product";
import Testimonial from "../components/testimonial/testimonial";

const Home = () => {
    const selectedTab = "Most recent";
    return (
      <>
        <Navigations />
        <main>
          <HomeBanner />

          <TabList tabList={tabList} selectedTab={selectedTab} />
          <ProductsList />
          <Testimonial/>
        </main>
      </>
    );
}
 
export default Home;