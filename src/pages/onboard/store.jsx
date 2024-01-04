import { useState, useEffect } from "react";
import axios from "axios";

import Breadcrumb from "../../components/molecule/breadcrumbs/breadcrumbs";
import ProductItem from "../../components/products/productItem";
import { STATIC_PRODUCTS } from "../../data/product/productList";
import OnboardLayout from "../../layouts/onboardLayout";
import HomeAds from "../../components/ads/homeAds";

const Loader = () => {
  return <div>Loading...</div>;
};
const Store = () => {
  const [selectedCategories, setSelectedCategories] = useState(["All"]);
  const [categories, setCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const [generalProduct, setGeneralProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request using Axios
        const response = await axios.get(
          'https://farm2home.cyclic.app/cartegorie/get'
        );
        const fetchedCategories = response.data.data.map((category) => category.name);

        // Update the categories array
        setCategories(["All", ...fetchedCategories]);

      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); 

  const getApiUrl = (selectedCategories) => {
    if (selectedCategories.includes("All")) {
      return "product";
    } else {
      const categoryQueryParam = selectedCategories
        .map((category) => `q=${category.replace(/\s/g, "-")}`)
        .join("&");
      console.log(categoryQueryParam);
      return `product/?${categoryQueryParam}`;
    }
  };

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const baseUrl = "https://farm2home.cyclic.app" || "";
      const apiUrl = getApiUrl(selectedCategories); // Fix: Use getApiUrl function
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
  }, [selectedCategories]);


  const handleCategoryToggle = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories([category]);
    }
  };

  return (
    <OnboardLayout>
      {loading && <Loader />}
      <Breadcrumb categories={selectedCategories} />
      <div className="flex w-full gap-3 mt-7 font-workSans">
        {/* Sidebar with checkboxes for categories */}
        <div className="mr-4 bg-white w-[25%] h-[20rem] p-4 rounded-lg">
          <h3 className="mb-4 font-bold">Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="mb-2">
                <label className="flex items-center cursor-pointer ">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className=" accent-mainGreen w-5 h-5 mr-2"
                  />
                  <span
                    className={
                      selectedCategories.includes(category)
                        ? "text-mainGreen font-bold"
                        : ""
                    }
                  >
                    {category}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {generalProduct?.map((data, index) => (
            <div key={index} className="mb-6">
              <ProductItem
                {...data}
                productNameMaxLength={9}
                productDesMaxLength={40}
              />
            </div>
          ))}
        </div>
      </div>
      <HomeAds />
    </OnboardLayout>
  );
};

export default Store;
