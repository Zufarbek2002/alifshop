/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import Image from "next/image";
import { useParams } from "next/navigation";
import Button from "@/components/button";
import useSingleDataStore from "@/store/singleData/singleDataStore";

const ProductId = () => {
  const [index, setIndex] = useState("null");
  const { productId } = useParams();
  const {
    loading,
    data,
    error,
    fetchData,
  }: {
    loading: boolean;
    data: any;
    error: null;
    fetchData: (id: string | string[]) => Promise<void>;
  } = useSingleDataStore();
  useEffect(() => {
    fetchData(productId);
  }, []);
  return (
    <div className="">
      {loading && <h1>Loading...</h1>}

      {data && (
        <div className="grid md:grid-cols-2 gap-5">
          <div className="flex gap-5">
            <div className="flex flex-col gap-y-2">
              {data.images?.map((img: string, i: number) => (
                <div
                  className={`cursor-pointer w-25 border-2 rounded-md border-white hover:border-gray-300 p-2 ${
                    index == img && "border-yellow-500 hover:border-yellow-500"
                  }`}
                  key={i}
                >
                  <Image
                    src={img}
                    alt="img"
                    width={100}
                    height={100}
                    onClick={() => setIndex(img)}
                    className="rounded-md"
                  />
                </div>
              ))}
            </div>
            <div className="lg:w-3/4 flex justify-center items-center ">
              <img
                src={index !== "null" ? index : data.thumbnail}
                alt="img"
                width={500}
                height={500}
                className="h-[400px] rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className=" bg-[#FF4444] text-white rounded-xl font-semibold bottom-1.5 px-2.5 py-0.5 w-16 text-center">
              -{Math.ceil(data.discountPercentage)}%
            </div>
            <div className="font-bold text-2xl">{data.title}</div>
            <div className="font-semibold text-lg">{data.description}</div>
            <div className="flex flex-col">
              <div className="">Narx</div>
              <div className="text-[#FF4444] text-3xl">
                {(
                  data.price -
                  (data.price * data.discountPercentage) / 100
                ).toFixed(2)}{" "}
                $
              </div>
              <div className="line-through text-[#A5B1BB]">{data.price}$</div>
            </div>
            <div className="flex items-center gap-4 w-full">
              <div className="md:w-3/4 bg-white fixed z-10 md:static bottom-0 left-0 right-0 py-2 px-4 md:px-0 md:py-0">
                <Button text="Savatga qo'shish" icon="details" />
              </div>
              <button className="w-16 h-10 border-2 border-gray-300 rounded-md hover:bg-gray-100">
                <FaRegHeart size="24px" className="text-center mx-auto" />{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductId;
