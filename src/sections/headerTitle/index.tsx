/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useDataStore from "@/store/data/dataStore";
import { DataType } from "@/types/data.types";
import Link from "next/link";
import React, { useEffect } from "react";

const HeaderTitle = () => {
  const { data, fetchData } = useDataStore();
  const category: string[] = [];
  useEffect(() => {
    fetchData();
  }, []);

  data.map((data: DataType) => {
    if (!category.includes(data.category)) {
      category.push(data.category);
    }
  });

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4 w-[90vw] overflow-hidden capitalize font-semibold text-[#788998]">
        {category?.map((text, i) => (
          <Link
            href="/"
            className="hover:text-black border-b py-[11px] border-b-white hover:border-b-black flex-shrink-0"
            key={i}
          >
            {text}
          </Link>
        ))}
      </div>
      <Link href="/">Yana</Link>
    </div>
  );
};

export default HeaderTitle;
