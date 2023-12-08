import AuthLayout from "../../layouts/authLayout";

const UserSignIn = () => {
  return (
    <AuthLayout>
      <h2 className="text-xl font-semibold font-workSans mb-4">Sign In</h2>
      <form className="bg-white rounded-lg p-8">
        <div className=" gap-4 md:gap-5 pt-2">
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-[#000] font-workSans font-semibold"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
        </div>
        <div className=" gap-4 md:gap-5 pt-2">
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-[#000] font-workSans font-semibold"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your Password"
              className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
        </div>

        <div className="font-workSans font-normal text-[16px] py-3 w-full">
          <a href="#" className="text-mainGreen">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="bg-mainGreen w-full text-center text-white py-3 px-5 rounded-md hover:bg-green-600 mt-4"
        >
          Sign In
        </button>
        <div className="relative flex w-[90%] mx-auto flex-row py-6 ">
          <div className=" w-full inline-flex items-center text-xs align-middle">
            <div className="ms-2 w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
          </div>

          <div className="shrink px-3 basis-0 flex-1 group">
            <span className="w-7 h-7 flex justify-center items-center font-medium text-gray-800 rounded-full">
              or
            </span>
          </div>

          <div className=" w-full inline-flex items-center text-xs align-middle">
            <div className=" w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700"></div>
          </div>
        </div>
        <div className=" flex w-full justify-center gap-3 items-center flex-row  ">
          <div>
            <a href="#">
              <img
                className=" w-[3rem]"
                src="https://res.cloudinary.com/phantom1245/image/upload/v1702037705/farm2home/Frame_268_fpbpmd.png"
                alt=""
              />
            </a>
          </div>
          <div>
            <a href="#">
              <img
                className=" w-[3rem]"
                src="https://res.cloudinary.com/phantom1245/image/upload/v1702037689/farm2home/Frame_267_queazd.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="w-full py-4">
          <div className="w-full text-center text-[#000] font-workSans font-normal text-[16px] py-3 w-full">
            Don’t have an account?{" "}
            <span>
              <a href="/sign-up" className="text-mainGreen">
                Create Account
              </a>
            </span>
          </div>
        </div>
      </form>
    </AuthLayout>
  );
};

export default UserSignIn;
