import OnboardBanner from "../components/banner/onboardBanner";
import Navigations from "../components/common/navigations";

export default function OnboardLayout({ children }) {
  const location = window.location.pathname;
  // Remove the leading "/"
  const trimmedPath = location.substring(1);

  // Replace "-" with a space
  const formattedText = trimmedPath.replace(/-/g, " ");

  return (
    <div>
      <Navigations />
      <OnboardBanner pageName={formattedText} />
      <main className="px-14 py-12">{children}</main>
    </div>
  );
}
