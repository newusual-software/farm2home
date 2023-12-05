import GeneralInquiries from "../../components/molecule/generalInquires/generalInquires";
import OnboardLayout from "../../layouts/onboardLayout";

export default function Contact() {
  return (
    <OnboardLayout>
      <div className="w-[80%] mx-auto flex flex-col bg-white rounded-lg justify-center">
        <div className="w-full lg:flex px-4  my-8 bg-white rounded-lg">
          <GeneralInquiries />
          <div className="w-[80%]">
            <div className="bg-white rounded-lg p-4 md:p-7">
              <h2 className="text-xl font-semibold font-workSans mb-4">
                Request Information
              </h2>
              <form>
                <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                  <div className="w-full">
                    <label
                      htmlFor="firstName"
                      className="text-[#000] mb-2 font-workSans text-md font-semibold"
                    >
                      Full Name:
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Enter your name"
                      className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
                    />
                  </div>
                </div>
                <div className=" gap-4 md:gap-5 pt-4">
                  <div className="w-full">
                    <label
                      htmlFor="email"
                      className="text-[#000] font-workSans font-semibold"
                    >
                      Email:
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      required
                      className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-[#000] font-workSans font-semibold"
                  >
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full p-2 border-2 mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-mainGreen text-white py-3 px-5 rounded-md hover:bg-green-600 mt-4"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </OnboardLayout>
  );
}
