import { useState } from "react";
import { Textarea } from "@material-tailwind/react";
import NaijaStates from "naija-state-local-government";
import { Select, Option } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addDelivery } from "../../../redux/delivery";


export default function Delivery() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    AdditionalPhoneNumber: "",

  });
  const [selectedOption, setSelectedOption] = useState("Abia");
  const [selectedLga, setSelectedLga] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (newOption) => {
    setSelectedOption(newOption);
  };
  const handleSelectLga = (newOption) => {
    setSelectedLga(newOption);
  };
  const handleChangeTextarea = (e, field) => {
    const { value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const postDataInfo = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      address: formData.address,  // Add the address field
      state: selectedOption,       // Add the state field
      lga: selectedLga,            // Add the lga field
      additional_phone_number: formData.AdditionalPhoneNumber,
      directions: formData.directions,  // Add the directions field
    };
    dispatch(addDelivery(postDataInfo));
  };

  const lgas = NaijaStates.lgas(selectedOption).lgas;
  return (
    <div>
      <div className="my-5">
        <div className="text-black text-xl font-medium font-workSans">
          You don&apos;t have a default address
        </div>
        <div className="text-[#7B7B7B] text-base font-normal font-workSans leading-snug tracking-wide">
          Add a default address below
        </div>
      </div>
      <hr className="py-3 w-full" />
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          <div className=" w-full md:w-1/2">
            <label
              htmlFor="firstName"
              className="text-[#7B7B7B] mb-2 font-workSans text-md font-semibold"
            >
              first Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full p-2 border mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
          <div className="w-full md:w-1/2">
            <label
              htmlFor="lastName"
              className="text-[#7B7B7B] mb-2 font-workSans text-md font-semibold"
            >
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
        </div>
        <div className=" gap-4 md:gap-5 pt-2">
          <div className="w-full">
            <label
              htmlFor="email"
              className="text-[#7B7B7B] font-workSans font-semibold"
            >
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
        </div>
        <div className=" gap-4 md:gap-5 pt-2">
          <div className="w-full">
            <label
              htmlFor="phone number"
              className="text-[#7B7B7B] font-workSans font-semibold"
            >
              Phone Number:
            </label>
            <input
              type="number"
              id="phone number"
              name="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="w-full p-2 border mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="phone number"
            className="text-[#7B7B7B] mb-2 font-workSans font-semibold"
          >
            Address*:
          </label>
          <Textarea value={formData.address}
  onChange={(e) => handleChangeTextarea(e, "address")}/>
        </div>
        <div className="flex flex-col md:flex-row gap-4 py-2 md:gap-5">
          <div className="w-full md:w-1/2">
            <div className="text-[#7B7B7B] mb-2 font-workSans font-semibold">
              <label htmlFor="state">State*:</label>
            </div>

            <Select
              size="lg"
              label="Select State"
              value={selectedOption}
              onChange={handleSelectChange}
            >
              {NaijaStates.states().map((state, index) => (
                <Option key={index} value={state} label={state}>
                  {state}
                </Option>
              ))}
            </Select>
          </div>
          <div className="w-full md:w-1/2">
          <div className="text-[#7B7B7B] mb-2 font-workSans font-semibold">
              <label htmlFor="lga">LGA*:</label>
            </div>
            <Select
              size="lg"
              label="Select LGA"
              value={selectedLga}
              onChange={handleSelectLga}
            >
              {lgas.map((lga, index) => (
                <Option key={index} value={lga} label={lga}>
                  {lga}
                </Option>
              ))}
            </Select>
          </div>
        </div>
        <div className=" gap-4 md:gap-5 pt-2">
          <div className="w-full">
            <label
              htmlFor="phone number"
              className="text-[#7B7B7B] font-workSans font-semibold"
            >
              Additional Phone Number:
            </label>
            <input
              type="number"
              id="phone number"
              name="AdditionalPhoneNumber"
              required
              value={formData.AdditionalPhoneNumber}
              onChange={handleChange}
              placeholder="Enter your Phone Number"
              className="w-full p-2 border mt-2 rounded-lg outline-none border-[#7B7B7B] border-opacity-50 mb-4"
            />
          </div>
        </div>
        <div className="w-full">
          <label
            htmlFor="phone number"
            className="text-[#7B7B7B] mb-2 font-workSans font-semibold"
          >
            Directions*:
          </label>
          <Textarea   value={formData.directions}
  onChange={(e) => handleChangeTextarea(e, "directions")}/>
        </div>
        <div className="text-[#7B7B7B] py-3 text-base font-semibold font-workSans leading-snug tracking-wide">NB: Required Fields*</div>
        <button
          type="submit"
          className="bg-mainGreen w-full text-center text-white py-3 px-5 rounded-md hover:bg-green-900 mt-4"
          disabled={isLoading} // Disable the button while loading
        >
          {isLoading ? "Saving..." : "Save and Continue"}
        </button>
      </form>
    </div>
  );
}
