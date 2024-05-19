/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import useCategoriesStore from "@/store/data/categories/categories";
import { DataType } from "@/types/data.types";
import CartBox from "@/components/productCart";

import { RangeSlider } from "next-range-slider";
import "@/style/main.css";

const CategoryDetails = () => {
  const [low, setLow] = useState(10);
  const [high, setHigh] = useState(1000);
  const [num, setNum] = useState(6);
  const { categoryDetails } = useParams();
  const { data, brand, fetchData, fetchBrandData } = useCategoriesStore();
  useEffect(() => {
    fetchData(categoryDetails);
    fetchBrandData();
  }, []);
  // console.log(brand);
  return (
    <div>
      <h2 className="font-medium text-3xl mb-4 capitalize">
        {categoryDetails}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2">
        <div className="col-span-1 pr-4">
          <h3 className="text-sm font-medium">Narx</h3>
          <div className="my-4">
            <RangeSlider
              min={10}
              max={1000}
              step={1}

              options={{
                leftInputProps: {
                  value: low,
                  onChange: (e) => setLow(Number(e.target.value)),
                },
                rightInputProps: {
                  value: high,
                  onChange: (e) => setHigh(Number(e.target.value)),
                },
              }}
            />
          </div>
          <div className="flex items-center gap-1 border border-gray-400 rounded-md px-2 py-2">
            <label className="text-gray-400 text-sm">dan</label>
            <input
              type="text"
              className="bg-transparent outline-none w-full text-sm"
              value={low}
            />
          </div>
          <div className="flex items-center gap-1 border border-gray-400 rounded-md px-2 py-2 mt-2">
            <label className="text-gray-400 text-sm">gacha</label>
            <input
              type="text"
              className="bg-transparent outline-none w-full text-sm"
              value={high}
            />
          </div>
          <div className="flex flex-col gap-y-2 mt-4">
            <form className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Brend</h3>
              <button className="text-[#3D95E9] text-xs font-normal cursor-pointer">
                Qayta tiklash
              </button>
            </form>
            <div
              className={`flex flex-col gap-y-2 ${
                num > 6 && "h-[260px] overflow-y-scroll"
              }`}
            >
              {brand
                ?.slice(0, num)
                .map((data: { id: number; brand: string }) => (
                  <div className="flex gap-2" key={data.id}>
                    <input
                      className="cursor-pointer"
                      type="checkbox"
                      id={`${data.id}`}
                      value={data.brand}
                      onClick={(e: any) => console.log(e.target.value)}
                    />
                    <label
                      htmlFor={`${data.id}`}
                      className="text-xs text-gray-900 cursor-pointer"
                    >
                      {data.brand}
                    </label>
                  </div>
                ))}
            </div>
            {num > 6 ? (
              <button
                className="text-[#3D95E9] text-left text-sm font-medium mt-2"
                onClick={() => setNum(6)}
              >
                Yashirish &#11165;
              </button>
            ) : (
              <button
                className="text-[#3D95E9] text-left text-sm font-medium mt-2"
                onClick={() => setNum(brand.length)}
              >
                {`Ko'proq ko'rsatish ${brand.length} `}&#11167;
              </button>
            )}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 col-span-2">
          {data.length > 0 &&
            data?.map((data: DataType) => (
              <div className="" key={data.id}>
                <CartBox data={data} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
