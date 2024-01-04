import { Fragment, useEffect, useState } from "react";
import axios from "axios"; // Import Axios
import { STATIC_PRODUCTS } from "../../data/product/productList";
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

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const baseUrl = "https://farm2home.cyclic.app" || "";
      const apiUrl = getApiUrl(category); // Fix: Use getApiUrl function
      const url = `${baseUrl}/${apiUrl}`;
      try {
        const response = await axios.get(url); // Fix: Use the correct URL
        const data = response.data;
        
        // Your logic to handle the data goes here
        setGeneralProduct(data);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setGeneralProduct(STATIC_PRODUCTS);
        setLoading(false);
      }
    };

    fetchDataAndSetState(); // Initial fetch
  }, [category]);

  const groupedProducts = generalProduct.reduce((acc, product) => {
    const { product_cat } = product;

    if (!acc[product_cat]) {
      acc[product_cat] = [];
    }
    acc[product_cat].push(product);
    return acc;
  }, {});

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
