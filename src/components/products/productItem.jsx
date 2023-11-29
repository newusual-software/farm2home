import { Icon } from "@iconify/react";
import { useState } from "react";

export default function ProductItem({
  name,
  price,
  imgUrl,
  description,
  initialRating,
  id,
}) {
  const [rating, setRating] = useState(initialRating);

  // Function to handle star click
  const handleStarClick = (clickedRating) => {
    setRating(clickedRating);
  };

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
    <div className="flex gap-2 md:max-w-xl w-[90%] max-w-md mx-auto cursor-pointer flex-col justify-between rounded-2xl bg-white shadow-md transition-transform ease-in hover:translate-y-2">
      <div className="md:flex-shrink-0 max-w-max">
        <a href={`product/${id}`}>
          <img
            src={imgUrl}
            alt={name}
            className="rounded-lg h-auto w-80 object-contain md:w-72"
          />
        </a>
      </div>
      <div className="px-4">
        <div className="flex justify-between items-center">
          <a href={`product/${id}`}>
            <div className="font-roboto text-base font-semibold text-mainGreen md:text-xl">
              {name}
            </div>
          </a>
          <div className="pr-1">
            <a href="#">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1700385830/farm2home/Vector_t2fbui.svg"
                alt="cart icon"
              />
            </a>
          </div>
        </div>
        <a href={`product/${id}`} className="text-[#7B7B7B] text-sm py-2">
          {description}
        </a>

        <hr className="my-2" />
        <div className="flex justify-between py-3 flex-wrap">
          <div className="flex gap-2 font-openSan font-semibold">
            <p className="text-[#000]">&#x20A6;{price}</p>
          </div>
          <div className="flex">{[...ratedStars, ...emptyStars]}</div>{" "}
        </div>
      </div>
    </div>
  );
}
