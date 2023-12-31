import { Icon } from "@iconify/react";
import { useState } from "react";
import { truncateString } from "../../lib/util/truncateString";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";

export default function ProductItem({
  product_des,
  product_price,
  product_image,
  productNameMaxLength,
  productDesMaxLength,
  product_name,
  initialRating,
  _id,
}) {
  const [rating, setRating] = useState(initialRating);
  const dispatch = useDispatch();
  const quantity = 1;

  // Function to handle star click
  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

  // Truncate product_des and product_name
  const truncatedProductDes = truncateString(
    product_des,
    productDesMaxLength,
    product_des
  );
  const truncatedProductName = truncateString(
    product_name,
    productNameMaxLength,
    product_name
  );

  // Filled stars
  const ratedStars = Array.from({ length: rating }, (_, i) => (
    <Icon
      key={`rated-${i}`}
      icon="mdi:star"
      className="text-[#FFA858]"
      onClick={() => handleStarClick(i + 1)}
    />
  ));

  // Empty stars
  const emptyStars = Array.from({ length: 5 - rating }, (_, i) => (
    <Icon
      key={`empty-${i}`}
      icon="mdi:star"
      onClick={() => handleStarClick(rating + i + 1)}
    />
  ));

  return (
    <div className="flex gap-2 md:max-w-2xl w-full max-w-md mx-auto cursor-pointer flex-col justify-between rounded-2xl bg-white shadow-md transition-transform ease-in hover:translate-y-2">
      <div className="md:flex-shrink-0 max-w-max">
        <a href={`product/${_id}`}>
          <img
            src={product_image}
            alt={truncatedProductName}
            className="rounded-lg h-auto w-80 object-contain md:w-72"
          />
        </a>
      </div>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <a href={`product/${_id}`}>
            <div
              title={product_name}
              className="font-roboto text-base font-semibold text-mainGreen md:text-xl"
            >
              {truncatedProductName}
            </div>
          </a>
          <div onClick={() => {
                    dispatch(
                      addToCart({
                        productId: _id,
                        productImage: product_image,
                        productName: product_name,
                        productDes: product_des,
                        productPrice: product_price,
                        productQuantity:  quantity,
                      })
                    );
                  }} className="pr-1 ">
            
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1700385830/farm2home/Vector_t2fbui.svg"
                alt="cart icon"
              />
          </div>
        </div>
        <div
          title={product_des}
          className="w-[10rem] text-[#7B7B7B] text-md py-2"
        >
          {truncatedProductDes}
        </div>  
        

        <hr className="my-2" />
        <div className="flex justify-between py-3 flex-wrap">
          <div className="flex gap-2 font-openSan font-semibold">
            <p className="text-[#000]">&#x20A6;{product_price}</p>
          </div>
          <div className="flex">{[...ratedStars, ...emptyStars]}</div>{" "}
        </div>
      </div>
    </div>
  );
}
