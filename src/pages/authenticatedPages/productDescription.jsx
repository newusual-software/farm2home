import { useNavigate, useParams } from "react-router-dom";
import DefaultLayout from "../../layouts/defaultLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import { ImagePlacehoderSkeleton } from "../../components/skeleton/imagePlacehoderSkeleton";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity, } from "../../redux/cart";
const data = [
  {
    imgelink:
      "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
  {
    imgelink:
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  },
];
export default function ProductDescription() {
  const [product, setProduct] = useState({});
  const [productcat, setProductcat] = useState("");
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formattedDateWithSuffix, setFormattedDateWithSuffix] = useState("");
  const [active, setActive] = useState("");
  const [showQuantityDiv, setShowQuantityDiv] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let quantity = 10
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get(
          `https://e-commerce-api-51vp.onrender.com/product/get/${id}`
        );

        // Assuming the API response contains the product data
        setProduct(response.data.product);
        setProductcat(response.data.product.product_cat);
        setIsLoading(false);

        if (Object.keys(response.data.product).length !== 0) {
          const date = new Date(response.data.product.createdAt);

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
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(true);
      }
    };
    const fetchAllData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get(
          `https://e-commerce-api-51vp.onrender.com/product`
        );
        let products = response.data;
        if (products.length !== 0) {
          // Filterout related products based on product_cat
          setRelatedProducts(
            response.data.filter((prod) => prod.product_cat === productcat)
          );
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(true);
      }
    };
    // Call the fetchData function when the component mounts
    fetchData();
    fetchAllData();
  }, [id, product, productcat]);

  const handleClick = (index) => {
    navigate(`/product/${index}`);
  };

  return (
    <DefaultLayout>
      {product &&
      !isLoading &&
      Object.keys(product).length !== 0 &&
      relatedProducts.length !== 0 ? (
        <div className="">
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
              {showQuantityDiv === true ? (
                <div className="w-[353px] h-[47px] justify-start items-center gap-2 inline-flex">
                  <div className="text-black text-[22px] font-semibold font-workSans">
                    Quantity:
                  </div>
                  <div className="h-[47px] justify-start items-center gap-2 flex">
                    <div className="bg-white rounded-[10px] border border-mainGreen justify-start items-center flex">
                      <button
                        onClick={() => dispatch(decrementQuantity({productId: id}))}
                        className="px-6 py-2 rounded-l-[10px] border-r border-mainGreen flex-col justify-center items-start gap-2 inline-flex"
                      >
                        -
                      </button>
                      <div className="px-6   flex-col justify-center items-start gap-2 inline-flex">
                        <div className="text-neutral-500 text-xl font-medium font-workSans">
                          {quantity}
                        </div>
                      </div>
                      <button
                        onClick={() => dispatch(incrementQuantity({productId: id}))}
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
