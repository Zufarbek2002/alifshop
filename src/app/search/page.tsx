/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import CartBox from "@/components/productCart";
import useSearchData from "@/store/searchData/searchData";
import { DataType } from "@/types/data.types";
import React, { useEffect } from "react";

const Search = () => {
  const { data, fetchData } = useSearchData();
  const search = location.href.split("=")[1];
  useEffect(() => {
    fetchData(search);
  }, [search, data]);
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <h2 className="text-md sm:text-3xl text-gray-900">
          Qidiruv natijalari <span className="font-bold">{search}</span>
        </h2>
        <p className="text-sm sm:text-md text-gray-400">
          {data.length} ta mahsulot topildi
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center sm:justify-start">
        {data.length > 0 &&
          data?.map((pr: DataType) => (
            <div className="" key={pr.id}>
              <CartBox data={pr} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Search;
