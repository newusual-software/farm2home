import DesktopNavigation from "./desktopNavigation";
import { navigationLinks } from "../../../data/navLinks/navigationLinks";
// import MobileNavigation from "./mobileNavigation";

const Navigations = () => {
  return (
    <div className="flex z-[999] bg-[#f4f4f4] rounded-lg py-6 px-8 font-workSans sticky top-2 left-0 w-[95%] mx-auto justify-between items-center">
      <DesktopNavigation navigationItems={navigationLinks} />
    </div>
    // <div className="flex w-full largeTablet:hidden">
    //     {/* <MobileNavigation navigationItems={navigationLinks} /> */}
    //   </div>
  );
};

export default Navigations;
