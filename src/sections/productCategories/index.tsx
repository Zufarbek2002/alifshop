import React from "react";
import Smartphones from "./smartphone";
import Laptops from "./laptops";
import Fragrances from "./fragrances";
import Skincare from "./skincare";
import Button from "@/components/button";
import Link from "next/link";

const ProductCategories = () => {
  return (
    <div className="flex flex-col gap-y-9 mt-9">
      <Smartphones />
      <Laptops />
      <Fragrances />
      <Skincare />
      <Link href="/categories" className="mx-auto w-1/2">
        <Button text="Katalogga o'tish" icon="katalog"/>
      </Link>
    </div>
  );
};

export default ProductCategories;
