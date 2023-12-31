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

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  let navigate =useNavigate()
  const handleRemoveItem = (productId) => {
    console.log(productId);
    dispatch(removeItem({ productId }));
  };

  return (
    <div className="container mx-auto mt-10">
      <Button onClick={() => navigate("/our-store")} className="my-6 rounded-[10px] border bg-transparent border-mainGreen justify-start items-center gap-2 inline-flex">
        <ArrowLeftIcon className="w-6 h-6 text-mainGreen" />
        <div className="text-mainGreen text-sm font-medium font-workSans">
          Continue Shopping
        </div>
      </Button>
      <h2 className="text-3xl font-semibold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div>
          <Card className="my-6 flex flex-col justify-center items-center w-full ">
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
              <Button onClick={() => navigate("/our-store")}>Continue Shopping</Button>
            </CardFooter>
          </Card>
        </div>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.productId}
              className="flex items-center justify-between border-b border-gray-300 py-2"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <p className="text-sm">{item.productName}</p>
                  <p className="text-gray-500">${item.productPrice} / kg</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() =>
                    dispatch(decrementQuantity({ productId: item.productId }))
                  }
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  -
                </button>
                <span className="mx-2">{item.productQuantity}</span>
                <button
                  onClick={() =>
                    dispatch(incrementQuantity({ productId: item.productId }))
                  }
                  className="px-2 py-1 bg-blue-500 text-white rounded"
                >
                  +
                </button>
                <span className="mx-2">
                  ${item.productPrice * item.productQuantity}
                </span>
                <button
                  onClick={() => handleRemoveItem(item.productId)}
                  className="text-red-500 cursor-pointer"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <p className="text-xl font-semibold">
              Total: $
              {cart.reduce(
                (total, item) => total + item.productPrice * item.productQuantity,
                0
              )}
            </p>
            <Button
              className="mt-4"
              onClick={() => alert("Checkout functionality to be implemented.")}
            >
              Checkout
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
