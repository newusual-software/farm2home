import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../redux/cart";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  CardHeader,
} from "@material-tailwind/react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../layouts/defaultLayout";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  let navigate = useNavigate();
  const handleRemoveItem = (productId) => {
    dispatch(removeItem({ productId }));
  };

  return (
    <DefaultLayout>
    <div className=" mx-auto">
      <Button
        onClick={() => navigate("/our-store")}
        className="my-6 rounded-[10px] border bg-transparent border-mainGreen justify-start items-center gap-2 inline-flex"
      >
        <ArrowLeftIcon className="w-6 h-6 text-mainGreen" />
        <div className="text-mainGreen text-sm font-medium font-workSans">
          Continue Shopping
        </div>
      </Button>
      <div>
        <span className="pl-8 text-black text-[22px] font-medium font-workSans">
          My Shopping cart
        </span>
        {cart.length > 0 ? (
          <span className="pl-2 text-black text-md font-normal font-workSans tracking-tight">
            ({cart.length})
          </span>
        ) : null}
      </div>
      {cart.length === 0 ? (
        <div>
          <Card className="my-6 mx-auto flex flex-col justify-center items-center w-[90%] ">
            <CardHeader>
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1703979330/farm2home/9960436-removebg-preview_qeehze.png"
                alt=""
                className="h-[10rem]"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" className="mb-2">
                Your cart is empty.
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => navigate("/our-store")}>
                Continue Shopping
              </Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div className="flex my-5 w-full justify-between items-start gap-4 px-10 flex-row">
          <div className="w-4/5 rounded-md bg-white shadow p-4 ">
            {cart.map((item) => (
              <div
                key={item.productId}
                className="flex gap-3 items-start border-b border-gray-300 py-2"
              >
                <div className="">
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-[155px] h-[140px] max-w-full rounded-lg object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-mainGreen text-[22px] leading-snug font-medium capitalize font-workSans">
                    {item.productName}
                  </div>
                  <div className="text-[18px] font-medium leading-snug font-workSans text-black">
                    &#8358;{item.productPrice}
                  </div>
                  <div className="w-[584px] text-gray-800 text-base font-normal font-workSans leading-snug tracking-wide">
                    {item.productDes}
                  </div>
                  <div className="flex justify-between w-[90%] mt-5 items-center">
                    <div className="bg-white rounded-[10px] border border-mainGreen justify-start items-center flex">
                      <button
                        onClick={() =>
                          dispatch(
                            decrementQuantity({ productId: item.productId })
                          )
                        }
                        className="px-4 py-2 rounded-l-[10px] border-r border-mainGreen flex-col justify-center items-start gap-2 inline-flex"
                      >
                        -
                      </button>
                      <div className="px-4   flex-col justify-center items-start gap-2 inline-flex">
                        <div className="text-neutral-500 text-xl font-medium font-workSans">
                          {item.productQuantity}
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          dispatch(
                            incrementQuantity({ productId: item.productId })
                          )
                        }
                        className="px-4 py-2 rounded-r-[10px] border-l border-mainGreen flex-col justify-center items-start gap-2 inline-flex"
                      >
                        +
                      </button>
                    </div>
                    <div className="flex justify-start items-start">
                      &#8358;{item.productPrice * item.productQuantity}
                    </div>
                    <div>
                      <button onClick={() => handleRemoveItem(item.productId)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 text-red-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <div className="text-mainGreen flex justify-end items-center mt-10 text-xl font-medium font-workSans">No Delivery Charges</div>
            <Button
              className="mt-4 w-full "onClick={() => navigate("/checkout")}

            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
    </DefaultLayout>
  );
};

export default Cart;
