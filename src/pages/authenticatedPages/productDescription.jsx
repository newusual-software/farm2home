import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/defaultLayout";
import { ImagePlacehoderSkeleton } from "../../components/skeleton/imagePlacehoderSkeleton";
import { Button } from "@material-tailwind/react";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cart";
import { fetchProductById, fetchRelatedProducts } from "../../redux/productSlice";
import { data } from "../../data/product/data";


export default function ProductDescription() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Redux state
  const  {product, isLoading}  = useSelector((state) => state.product);
  const  {relatedProduct, loading}  = useSelector((state) => state.relatedProduct);
  const { cart } = useSelector((state) => state.cart);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [formattedDateWithSuffix, setFormattedDateWithSuffix] = useState("");
  const [active, setActive] = useState("");
  const [showQuantityDiv, setShowQuantityDiv] = useState(false);
  const quantity = 1;

  useEffect(() => {
    dispatch(fetchProductById(id));
    // Additional logic if needed for related products
  }, [dispatch, id]);

  useEffect(() => {
    if (product.product_cat) {
      dispatch(fetchRelatedProducts(product.product_cat));
    }
  }, [dispatch, product.product_cat]);


  useEffect(() => {
    if (Object.keys(product).length !== 0) {
      const date = new Date(product.createdAt);
  
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
      };
  
      const formattedDate = new Intl.DateTimeFormat(
        "en-US",
        options
      ).format(date);
      setFormattedDateWithSuffix(formattedDate);
    }
    if (relatedProduct.length !== 0) {
      // Filterout related products based on product_cat
      setRelatedProducts(
        relatedProduct.filter((prod) => prod.product_cat === product.product_cat)
      );
    }
    console.log(relatedProducts)
  }, [product.product_cat, product]);

  const item = cart.find((item) => item.productId === id);

  const handleClick = (index) => {
    navigate(`/product/${index}`);
  };

  const handleIncrement = () => {
    dispatch(incrementQuantity({ productId: id }));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity({ productId: id }));
  };

  return (
    <DefaultLayout>
      {product &&
      !isLoading &&
      Object.keys(product).length !== 0 &&
      relatedProducts.length !== 0 && !loading ? (
        <div className="py-12">
          <div className="w-[95%] bg-white mx-auto p-6 rounded-lg shadow flex flex-row gap-5">
            <div className="w-[65%] grid gap-4">
              <div className="">
                <img
                  className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
                  src={active !== "" ? active : product.product_image}
                  alt={product.product_name}
                />
              </div>
              <div className="w-full grid grid-cols-3 gap-4">
                {data.slice(0, 3).map(({ imgelink }, index) => (
                  <div key={index}>
                    <img
                      onClick={() => setActive(imgelink)}
                      src={imgelink}
                      className="w-full h-auto rounded-[10px]"
                      alt="gallery-image"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full ">
              <div className="text-mainGreen text-[28px] font-semibold capitalize font-workSans">
                {product.product_name}
              </div>
              <div className="text-black">
                <span className="text-[32px] font-semibold font-workSans">
                  {product.product_price}
                </span>
                <span className="text-xl font-medium font-workSans">/kg</span>
              </div>
              <div className="w-[584px] text-gray-800 text-base font-normal font-workSans leading-snug tracking-wide">
                {product.product_des}
              </div>
              <div className=" mt-4 text-[#636363] text-[22px] font-semibold font-workSans">
                Posted by:{" "}
                <span className="text-[#636363] text-base font-normal font-workSans leading-snug tracking-wide">
                  Farm2Home
                </span>
              </div>
              <div className="text-[#636363] text-[22px] font-semibold font-workSans">
                Location:{" "}
                <span className="text-[#636363] text-base font-normal font-workSans leading-snug tracking-wide">
                  Lagos State
                </span>
              </div>
              <div className="text-[#636363] text-[22px] font-semibold font-workSans">
                Available Quantity:{" "}
                <span className="text-[#636363] text-base font-normal font-workSans leading-snug tracking-wide">
                  {product.product_total}kg
                </span>
              </div>
              <div className="text-[#636363] text-[22px] font-semibold font-workSans">
                Minimum Order:{" "}
                <span className="text-[#636363] text-base font-normal font-workSans leading-snug tracking-wide">
                  {product.product_total}kg
                </span>
              </div>
              <div className="text-[#636363] text-[22px] font-semibold font-workSans">
                Posted Date:{" "}
                <span className="text-[#636363] text-base font-normal font-workSans leading-snug tracking-wide">
                  {formattedDateWithSuffix}
                </span>
              </div>
              <div className="text-[#007145] my-4 text-[22px] font-semibold font-workSans">
                Free Delivery
              </div>
              {showQuantityDiv === true && item !== undefined ? (
                <div className="w-[353px] h-[47px] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[22px] font-semibold font-workSans">
                    Quantity:
                  </div>
                  <div className="h-[47px] justify-start items-center gap-2 flex">
                    <div className="bg-white rounded-[10px] border border-mainGreen justify-start items-center flex">
                      <button
                        onClick={handleDecrement}
                        className="px-6 py-2 rounded-l-[10px] border-r border-mainGreen flex-col justify-center items-start gap-2 inline-flex"
                      >
                        -
                      </button>
                      <div className="px-6   flex-col justify-center items-start gap-2 inline-flex">
                        <div className="text-neutral-500 text-xl font-medium font-workSans">
                        {item.productQuantity}
                        </div>
                      </div>
                      <button
                        onClick={() => { 
                          handleIncrement()
                        }}
                        className="px-6 py-2 rounded-r-[10px] border-l border-mainGreen justify-start items-center gap-2 flex"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-black text-xl font-medium font-workSans">
                      kg
                    </div>
                  </div>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        productId: product._id,
                        productImage: product.product_image,
                        productName: product.product_name,
                        productDes: product.product_des,
                        productPrice: product.product_price,
                        productQuantity: quantity,
                      })
                    );
                    setShowQuantityDiv(true);
                  }}
                  className="flex capitalize my-5 text-white text-xl font-medium font-workSans bg-mainGreen"
                >
                  Add to Cart
                </Button>
              )}
            </div>
          </div>
          <div className="text-black text-[28px] my-5 font-medium font-workSans">
            Related Products
          </div>
          <div className="overflow-x-auto w-full mx-auto">
            <div className="gap-3 flex w-full flex-row">
              {relatedProducts.map((data, index) => (
                <div
                  key={index}
                  className="cursor-pointer"
                  onClick={() => handleClick(data._id)}
                >
                  <img
                    src={data.product_image}
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                    alt="gallery-image"
                  />
                  <div className="px-28"></div>
                  <div className=" text-mainGreen text-[22px] font-medium font-workSans">
                    {data.product_name}
                  </div>
                  <div className="text-black leading-snug tracking-wide">
                    <span className="text-[18px] font-semibold font-workSans">
                      {data.product_price}
                    </span>
                    <span className="text-base font-medium font-workSans">
                      /kg
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ImagePlacehoderSkeleton />
        </div>
      )}
    </DefaultLayout>
  );
}
