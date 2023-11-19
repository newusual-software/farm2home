import DesktopNavigation from "./desktopNavigation";
// import MobileNavigation from "./mobileNavigation";


const Navigations = () => {
    const navigationLinks = [
      { url: "/", label: "Home" },
      { url: "/about-us", label: "About Us" },
      { url: "/store", label: "store" },
      { url: "/help", label: "Help" },
      { url: "/cart", label: "cart" },
    ];
  return (
    <div className="flex py-9 px-8 font-workSans sticky top-2 left-0 w-full justify-between items-center">
      <DesktopNavigation navigationItems={navigationLinks} />     
    </div>
    // <div className="flex w-full largeTablet:hidden">
    //     {/* <MobileNavigation navigationItems={navigationLinks} /> */}
    //   </div>
  );
};

export default Navigations;
