import Image from "next/image";
import Link from "next/link";
import React, { useState, useCallback, useMemo } from "react";
import Button from "../button";
import { DataType } from "@/types/data.types";
import { PiHeartStraightDuotone } from "react-icons/pi";
import { FaHeart } from "react-icons/fa6";

// ... existing imports ...

const CartBox = ({ data }: { data: DataType }) => {
  const [isInCart, setIsInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Optimize calculations with useMemo
  const discountedPrice = useMemo(() => {
    return (data.price - (data.price * data.discountPercentage) / 100).toFixed(
      2
    );
  }, [data.price, data.discountPercentage]);

  // Use useCallback for event handlers
  const handleQuantityChange = useCallback((increment: number) => {
    setQuantity((prev) => Math.max(1, prev + increment));
  }, []);

  const handleAddToCart = useCallback(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cart, { ...data, quantity }];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setIsInCart(true);
  }, [data, quantity]);

  const handleLike = useCallback(() => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems") || "[]");
    const updatedLikedItems = [...likedItems, data];
    localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
    setIsLiked(true);
  }, [data]);

  return (
    <div className="w-full min-w-[100px] max-w-[200px] flex flex-col gap-y-2">
      <div className="relative">
        <Link
          href={`/product-details/${data.id}`}
          className="flex flex-col gap-y-1"
        >
          <div className="relative w-full h-[140px] bg-[#F4F6F7] rounded-lg overflow-hidden">
            <Image
              src={data.thumbnail}
              alt={data.title}
              width={180}
              height={140}
              style={{
                width: "auto",
                height: "140px",
                objectFit: "cover",
                margin: "auto",
              }}
            />
            <div className="absolute bg-[#FF4444] text-xs text-white rounded-xl font-medium bottom-1.5 px-2.5 py-0.5">
              -{Math.round(data.discountPercentage)}%
            </div>
          </div>
          <p className="line-clamp-2 text-xs font-gray-900 mt-1">
            {data.description}
          </p>
          <p className="line-through text-xs text-[#A5B1BB]">${data.price}</p>
          <p className="text-[#FF4444] text-sm font-medium">
            ${discountedPrice}
          </p>
        </Link>
        <button
          className="absolute top-2 right-2 bg-white rounded-xl p-1"
          onClick={handleLike}
          aria-label={isLiked ? "Remove from favorites" : "Add to favorites"}
        >
          {isLiked ? (
            <FaHeart color="red" size="24px" />
          ) : (
            <PiHeartStraightDuotone size="24px" />
          )}
        </button>
      </div>
      <div className="w-[100px]">
        {isInCart ? (
          <div className="flex border-2 border-gray-300 rounded-md justify-between items-center px-2 py-1">
            <button
              className={`font-bold ${
                quantity <= 1 ? "text-[#E3E8EA]" : "text-[#000]"
              }`}
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
              aria-label="Decrease quantity"
            >
              —
            </button>
            <span>{quantity}</span>
            <button
              className="text-[24px] leading-none"
              onClick={() => handleQuantityChange(1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        ) : (
          <button onClick={handleAddToCart}>
            <Button text="Savatga" icon="savat" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartBox;
