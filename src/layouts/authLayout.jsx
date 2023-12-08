import Navigations from "../components/common/navigations";

export default function AuthLayout({ children }) {

  return (
    <div>
      <Navigations />
      <main className="w-[60%] mx-auto flex flex-col   my-8 ">{children}</main>
    </div>
  );
}
