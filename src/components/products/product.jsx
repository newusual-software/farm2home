import { Fragment } from "react";
import { STATIC_PRODUCTS } from "./productList";
import ProductItem from "./productItem";

const Loader = () => {
  return <div>loading...</div>;
};
export default function ProductsList() {
  let generalProduct = STATIC_PRODUCTS;
  console.log(generalProduct);
  return (
    <>
      <div className="my-20 px-5  place-items-center grid sm:grid-cols-2 gap-5 grid-cols-1 md:grid-cols-3 xl:grid-cols-4">
        {generalProduct == undefined ? (
          <Loader />
        ) : (
          generalProduct.map(
            ({ category, name, price, dealPrice, ratingStar, imgUrl }, i) => (
              <Fragment key={i}>
                <ProductItem
                  category={category}
                  name={name}
                  price={price}
                  deal={dealPrice}
                  rating={ratingStar}
                  imgUrl={imgUrl}
                />
              </Fragment>
            )
          )
        )}
      </div>
      <button className="mx-auto block bg-green-100 font-dmSan text-sm font-medium text-white md:text-base">
        Next Page
      </button>
    </>
  );
}
