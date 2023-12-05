import { useState } from "react";
import Breadcrumb from "../../components/molecule/breadcrumbs/breadcrumbs";
import ProductItem from "../../components/products/productItem";
import { STATIC_PRODUCTS } from "../../data/product/productList";
import OnboardLayout from "../../layouts/onboardLayout";
import useApiFetcher from "../../lib/hooks/useApiFetcher";
import HomeAds from "../../components/ads/homeAds";


const Store = () => {

  const [selectedCategories, setSelectedCategories] = useState(["All"]);

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
    
  const method = "GET";

  const headers = {}; // Add any headers if needed

  let { data, error } = useApiFetcher(
    getApiUrl(selectedCategories),
    headers,
    method
  );

  if (error) {
    console.error(error);

    data = STATIC_PRODUCTS;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
console.log(data)
  const categories = [
    "All",
    "Roots and Tubers",
    "Perishables",
    "Seed",
    "Grains",
    "Processed",
  ];

  const handleCategoryToggle = (category) => {
    if (category === "All") {
      setSelectedCategories(["All"]);
    } else {
      setSelectedCategories([category]);
    }
  };

  return (
    <OnboardLayout>
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
          {data.map((data, index) => (
            <div key={index} className="mb-6">
              <ProductItem
                {...data}
                productNameMaxLength={9}
                productDesMaxLength={35}
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
