import React from "react";
import Smartphones from "./smartphone";
import Laptops from "./laptops";
import Fragrances from "./fragrances";
import Skincare from "./skincare";

const ProductCategories = () => {
  return (
    <div className="flex flex-col gap-y-9 mt-9">
      <Smartphones />
      <Laptops />
      <Fragrances />
      <Skincare />
    </div>
  );
};

export default ProductCategories;
