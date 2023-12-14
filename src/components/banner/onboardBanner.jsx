/* eslint-disable react/no-unescaped-entities */
const OnboardBanner = ({pageName}) => {
  return (
    <div
      className="w-full 
            z-10
            
            object-cover 
            bg-cover bg-no-repeat 
            bg-center 
            h-52
            bg-[url('https://res.cloudinary.com/phantom1245/image/upload/v1701277997/farm2home/unsplash_o5dBeMnuJUk_psi3sp.png')]
            flex 
            flex-col 
            justify-center"
    >
      <div className="text-white uppercase font-workSans text-3xl font-bold text-center">
        {pageName}
      </div>
    </div>
  );
};

export default OnboardBanner;
