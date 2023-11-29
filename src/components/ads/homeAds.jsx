
export default function HomeAds() {
  return (
    <div className="flex flex-row my-12 gap-6 w-full">
      <div className="w-1/2">
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1701257735/farm2home/Rectangle_1_1_kyjr9k.png"
          alt=""
        />
      </div>
      <div className="w-1/2 justify-center flex flex-col">
        <div className="w-[68%] text-[#000] font-workSans text-lg font-normal py-3">
          Join over 10,000+ Customer’s to shop in our platform and get your
          orders delivered at yopur doorstep today
        </div>
        <div>
          <button className="bg-mainGreen w-[12rem]  text-white rounded-lg py-3">
            Start Shopping Now
          </button>
        </div>
      </div>
    </div>
  );
}
