import Navigations from "../components/common/navigations";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Navigations />
      <main className="px-14 py-12">{children}</main>
    </div>
  );
}
