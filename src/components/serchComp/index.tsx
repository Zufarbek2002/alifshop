"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

interface ClientSideSearchParamsProps {
  setSearch: (search: string) => void;
}

export const ClientSideSearchParams: React.FC<ClientSideSearchParamsProps> = ({
  setSearch,
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("q") || "";
    setSearch(search);
  }, [searchParams, setSearch]);

  return null;
};
