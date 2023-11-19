/* eslint-disable react/no-unescaped-entities */
const HomeBanner = () => {
    return (
      <div className="bg-[url('')] flex flex-col justify-center">
        <div className="gap-3">
          <h1>Rooted in Quality, Delivered with Passion</h1>
          <h4>Your Online Farmer's Market!</h4>
        </div>
        <div>
          <button className="bg-mainGreen w-[5rem] py-4">Start Shopping Now</button>
        </div>
      </div>
    );
}
 
export default HomeBanner;