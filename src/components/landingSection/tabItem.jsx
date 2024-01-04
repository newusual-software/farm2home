import { Fragment, useEffect, useState } from "react";
import { STATIC_PRODUCTS } from "../../data/product/productList";
import useApiFetcher from "../../lib/hooks/useApiFetcher";
import ProductItem from "../products/productItem";
import { Link } from "react-router-dom";

const Loader = () => {
  return <div>Loading...</div>;
};

export default function TabItem({ category }) {
  const [loading, setLoading] = useState(true);
  const [generalProduct, setGeneralProduct] = useState([]);

  const getApiUrl = (category) => {
    if (category === "Most-Recent") {
      return "product";
    } else {
      const categoryQueryParam = `q=${category}`;
      return `product/?${categoryQueryParam}`;
    }
  };

  const { data, error } = useApiFetcher(getApiUrl(category), {}, "GET");

  useEffect(() => {
    let ignore = false;
    const fetchData = async () => {
      try {
        if (error) {
          console.error(error);
          setGeneralProduct(STATIC_PRODUCTS);
        } else {
          if (!ignore) setGeneralProduct(data || []);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setGeneralProduct(STATIC_PRODUCTS);
        setLoading(false);
      }
    };

    fetchData(); // Initial fetch

    return () => { ignore = true }
  }, [data, error, category]);

  const groupedProducts = generalProduct.reduce((acc, product) => {
    const { product_cat } = product;

    if (!acc[product_cat]) {
      acc[product_cat] = [];
    }
    acc[product_cat].push(product);
    return acc;
  }, {});
  console.log(data)
  return (
    <>
      {loading && <Loader />}

      <div className={`my-9 grid grid-cols-1 ${loading ? "hidden" : ""}`}>
        {/* Render categorized products in rows */}
        {Object.keys(groupedProducts).map((category, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between flex-row mb-6 items-center px-5">
              <div>
                <h2 className="text-xl font-workSans font-bold text-mainGreen  ">
                  {category}
                </h2>
              </div>
              <div>
                <Link to="/" className="px-4 py-2 rounded-md text-mainGreen bg-transparent border border-green-900">
                  See more
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {groupedProducts[category].map(({ id, ...rest }, i) => (
                <Fragment key={i}>
                  <ProductItem id={id} {...rest} />
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
