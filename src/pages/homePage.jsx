import Navigations from "../components/common/navigations";
import HomeBanner from "../components/homeBanner"
import { tabList } from "../components/molecule/navLinks/navigationLinks";
import TabList from "../components/molecule/tabs/tabList";

const Home = () => {
     const selectedTab = "Most recent";

    return (
      <>
        <Navigations />
        <main>
          <HomeBanner />

          <TabList tabList={tabList} selectedTab={selectedTab} />
        </main>
      </>
    );
}
 
export default Home;