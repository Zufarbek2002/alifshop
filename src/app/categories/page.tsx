/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { DataType } from "@/types/data.types";
import useDataStore from "@/store/data/dataStore";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  const category: string[] = [];
  const categoryData: DataType[] = [];

  const { data, fetchData } = useDataStore();
  useEffect(() => {
    fetchData();
  }, []);

  data.map((data: DataType) => {
    if (!category.includes(data.category)) {
      category.push(data.category);
      categoryData.push(data);
    }
  });

  return (
    <div>
      <div className="text-3xl font-medium mb-6 text-gray-900">Katalog</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categoryData?.map((data: DataType, i: number) => (
          <Link
            href={`/categories/${data.category}`}
            className="flex flex-col gap-y-1 rounded-md bg-gray-50 pb-2"
            key={i}
          >
            <div className="rounded-md overflow-hidden">
              <Image
                src={data.thumbnail}
                alt={data.title}
                width={100}
                height={120}
                style={{ width: "100%", height: "120px", objectFit: "cover" }}
              />
            </div>
            <div className="px-1 sm:px-2">
              <h3 className="text-md font-medium text-gray-900 capitalize">
                {data.category}
              </h3>
              <p className="text-xs text-gray-500 line-clamp-4">
                {data.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
