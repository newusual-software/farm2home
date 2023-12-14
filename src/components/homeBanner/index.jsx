/* eslint-disable react/no-unescaped-entities */
const HomeBanner = () => {
    return (
      <div
        className="w-full 
            relative
            overflow-hidden
            block
            z-10
            before:content-['']
            before:absolute
            before:inset-0
            before:block
            before:bg-gradient-to-r
            before:from-[#272727]
            before:to-[#222]
            before:opacity-50
            before:z-[-5]
            object-cover 
            pl-8 h-[30rem] 
            bg-cover bg-no-repeat 
            bg-center 
            bg-[url('https://res.cloudinary.com/phantom1245/image/upload/v1701257726/farm2home/Frame_11_1_zdscjt.png')] flex flex-col justify-center"
      >
        <div className="gap-3 text-white">
          <h1 className="text-5xl w-[70%] xl:w-[55%] font-workSans font-bold ">Rooted in Quality, Delivered with Passion</h1>
          <h4 className="text-xl py-4">Your Online Farmer's Market!</h4>
        </div>
        <div>
          <button className="bg-mainGreen w-[15rem] text-white rounded-lg py-3">
            Start Shopping Now
          </button>
        </div>
      </div>
    );
}
 
export default HomeBanner;