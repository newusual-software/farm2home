import { useState } from "react";
import { StepperWithContent } from "../../components/atoms/stepper/stepper";
import DefaultLayout from "../../layouts/defaultLayout";
import Delivery from "../../components/molecule/delivery/delivery";
import { useSelector } from "react-redux";
import AddressBook from "../../components/molecule/addressBook/addressBook";

export default function Checkout() {
  // State to manage the selected status
  const [status, setStatus] = useState("delivery"); // You can set the default value here
  const {delivery} = useSelector((state) => state.delivery);
  return (
    <DefaultLayout>
      <div className="text-black text-[40px] text-center my-3 font-bold font-workSans">
        Checkout
      </div>
      <div className="mb-20">
        <StepperWithContent />
      </div>
      <div className="flex my-5 w-full justify-between items-start gap-4 px-10 flex-row">
        <div className="w-4/5 rounded-md bg-white shadow p-4 ">
          <div className="flex gap-2 pl-3 items-center py-3">
            <div>
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1704135513/farm2home/mdi_delivery-dining-electric-outline_iyhtqp.svg"
                alt=""
              />
            </div>
            <div className=" text-black text-[20px] font-medium font-workSans">
              Delivery Method
            </div>
          </div>
          <hr className="py-3" />
          <div className="flex justify-between">
            <div className="">
              <label
                htmlFor="delivery"
                className="text-md my-4 font-medium font-workSans peer-checked/delivery:text-black "
              >
                <input
                  id="delivery"
                  className="peer/delivery mr-2"
                  type="radio"
                  name="status"
                  checked={status === "delivery"}
                  onChange={() => setStatus("delivery")}
                />
                Home Delivery
              </label>
            </div>
            <div>
              <label
                htmlFor="pickup"
                className=" text-md my-4 font-medium font-workSans peer-checked/pickup:text-sky-500"
              >
                <input
                  id="pickup"
                  className="peer/pickup mr-2"
                  type="radio"
                  name="status"
                  checked={status === "pickup"}
                  onChange={() => setStatus("pickup")}
                />
                Pickup Station
              </label>
              <div
                className={
                  status === "pickup" ? "peer-checked/pickup:block" : "hidden"
                }
              >
                Your post will be publicly visible on your site.
              </div>
            </div>
          </div>
          <div
            className={
              status === "delivery"
                ? "peer-checked/delivery:block  "
                : "hidden"
            }
          >
            {delivery === null ? <Delivery /> : <AddressBook/>}
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
