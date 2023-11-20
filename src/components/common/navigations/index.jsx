import DesktopNavigation from "./desktopNavigation";
import { navigationLinks } from "../../molecule/navLinks/navigationLinks";
// import MobileNavigation from "./mobileNavigation";

const Navigations = () => {
  return (
    <div className="flex py-6 px-8 font-workSans sticky top-2 left-0 w-full justify-between items-center">
      <DesktopNavigation navigationItems={navigationLinks} />
    </div>
    // <div className="flex w-full largeTablet:hidden">
    //     {/* <MobileNavigation navigationItems={navigationLinks} /> */}
    //   </div>
  );
};

export default Navigations;
