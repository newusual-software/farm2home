import { useState, useCallback, useEffect } from "react";
import { StepperWithContent } from "../../components/atoms/stepper/stepper";
import DefaultLayout from "../../layouts/defaultLayout";
import Delivery from "../../components/molecule/delivery/delivery";
import { useSelector } from "react-redux";
import AddressBook from "../../components/molecule/addressBook/addressBook";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";

export default function Checkout() {
  const [status, setStatus] = useState("delivery");
  const [estimatePrice, setEstimatePrice] = useState(null);
  const [existingArray, setExistingArray] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  let navigate = useNavigate();

  const getLocalStorageData = () => {
    const existingData = localStorage.getItem("deliveryData");
    return existingData ? JSON.parse(existingData) : [];
  };

  const handleDeliveryPrice = useCallback((estimatePrice) => {
    setEstimatePrice(estimatePrice);
  }, []);

  useEffect(() => {
    // Update existingArray when the component mounts
    setExistingArray(getLocalStorageData());
  }, []);

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
              status === "delivery" ? "peer-checked/delivery:block  " : "hidden"
            }
          >
            {existingArray.length < 1 ? (
              <Delivery
                onDeliveryPriceChange={handleDeliveryPrice}
              />
            ) : (
              <AddressBook
                handleDeliveryPrice={handleDeliveryPrice}
              />
            )}
          </div>
        </div>
        <div className="w-1/2 rounded-md bg-white shadow p-4 ">
          <div className="flex border-b border-[#7E7E7E] pt-3 pb-1 justify-between items-center">
            <div className="text-black text-[22px] font-medium font-workSans">
              Order Summary
            </div>
            <div className="pr-2 text-black text-xl font-medium font-workSans tracking-tight">
              {cart.length > 0 ? <span>({cart.length})</span> : null} items
            </div>
          </div>
          <div className="mt-5 flex border-b border-[#7E7E7E] pt-3 pb-1 justify-between items-center">
            <div className="text-[#7E7E7E] text-[20px] font-medium font-workSans">
              SubTotal:
            </div>
            <div className="text-black text-xl font-medium font-workSans">
              &#8358;
              {cart.reduce(
                (total, item) =>
                  total + item.productPrice * item.productQuantity,
                0
              )}
            </div>
          </div>
          <div className="mt-5 flex border-b border-[#7E7E7E] pt-3 pb-1 justify-between items-center">
            <div className="text-[#7E7E7E] text-[20px] font-medium font-workSans">
              Total:
            </div>
            <div className="text-black text-xl font-medium font-workSans">
              &#8358;
              {cart.reduce(
                (total, item) =>
                  total + item.productPrice * item.productQuantity,
                0
              ) + (estimatePrice || 0)}
            </div>
          </div>
          {estimatePrice === null || estimatePrice === undefined ? (
            <>
              <div className="text-mainGreen flex justify-end items-center mt-10 text-xl font-medium font-workSans">
                No Delivery Charges
              </div>{" "}
              <Button
                className="mt-4 w-full "
                onClick={() => navigate("/checkout")}
                disabled
              >
                Checkout
              </Button>{" "}
            </>
          ) : (
            <Button
              className="mt-4 w-full "
              onClick={() => navigate("/checkout")}
            >
              Checkout
            </Button>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
}
