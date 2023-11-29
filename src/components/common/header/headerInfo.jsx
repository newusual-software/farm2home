const HeaderInfo = () => {
    return (
      <div className="bg-mainGreen text-white captalize w-full h-[70px] flex justify-between px-[3rem] items-center">
        <div>
          <a href="/">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1701274150/farm2home/20231129_163322-removebg-preview_e3ppek.png"
              alt="logo"
              className="w-[10rem] "
            />
          </a>
        </div>
        <div className="flex justify-center items-center gap-[2rem]">
          <div className="flex justify-center items-center">
            <div className="pr-1">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1700385818/farm2home/solar_phone-bold_rkgipc.svg"
                alt="phone icon"
              />
            </div>
            <a href="tel:+2341234567">
              <div>+2341234567</div>
            </a>
          </div>
          <div className="flex justify-center items-center">
            <div className="pr-1">
              <img
                src="https://res.cloudinary.com/phantom1245/image/upload/v1700385823/farm2home/ic_round-email_1_kwn52j.svg"
                alt="email icon"
              />
            </div>
            <a href="mailto:farm2home@gmail.com">
              <div>farm2home@gmail.com</div>
            </a>
          </div>
        </div>
      </div>
    );
}
 
export default HeaderInfo;