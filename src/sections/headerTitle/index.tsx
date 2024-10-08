/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import useDataStore from "@/store/data/dataStore";
import { DataType } from "@/types/data.types";
import Link from "next/link";
import React, { useEffect } from "react";


const HeaderTitle = () => {
  const category: string[] = [];
  const { data, fetchData } = useDataStore();
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
      <div className="flex gap-4 w-[86vw] overflow-hidden capitalize font-medium text-[#788998]">
        {category?.map((text:string, i:number) => (
          <Link
            href={`/categories/${text}`}
            className="text-xs hover:text-black border-b py-[5px] border-b-white hover:border-b-black flex-shrink-0"
            key={i}
          >
            {text}
          </Link>
        ))}
      </div>
      <Link href="/" className='ml-1 text-xs font-semibold'>Yana</Link>
    </div>
  );
};

export default HeaderTitle;
