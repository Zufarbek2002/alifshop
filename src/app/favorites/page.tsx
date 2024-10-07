"use client"
import React, { useEffect, useState } from "react";
import { DataType } from "@/types/data.types";
import CartBox from "@/components/productCart";

const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<DataType[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("like");
    if (storedFavorites) {
      try {
        setFavorites(JSON.parse(storedFavorites));
      } catch (error) {
        console.error("Error parsing favorites:", error);
      }
    }
  }, []);

  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-3xl font-semibold">Saralanganlar</h1>
      {favorites.length === 0 ? (
        <p>{`Hozircha saralangan mahsulotlar yo'q.`}</p>
      ) : (
        <div className="flex items-center flex-wrap gap-10 sm:justify-start justify-center">
          {favorites.map((item: DataType) => (
            <CartBox key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;