

export default function ProductItem({ name, price, deal, imgUrl, description }) {
  return (
    <div className="flex gap-2 md:max-w-2xl max-w-md mx-auto cursor-pointer flex-col justify-between rounded-2xl bg-white drop-shadow-[0px_4px_10px_rgba(0,0,0,0.25)] transition-transform ease-in hover:translate-y-2">
      <div className="md:flex-shrink-0 max-w-max ">
        <img
          src={imgUrl}
          alt={name}
          className="rounded-lg h-72 w-80 object-contain md:w-72"
        />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div className="font-roboto text-base font-semibold text-mainGreen md:text-xl">
            {name}
          </div>

          <div className="pr-1">
            <a href="#">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1700385818/farm2home/solar_phone-bold_rkgipc.svg"
                alt="cart icon"
              />
            </a>
          </div>
        </div>
        <p className="text-lightGreen text-sm">{description}</p>

        <hr className="my-3" />
        <div className="flex justify-between flex-wrap">
          <div className="flex gap-2 font-openSan font-semibold">
            <p className="text-[#B8B8B8] line-through">${price}</p>
            <p className="text-[#274c5b]">${deal}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
