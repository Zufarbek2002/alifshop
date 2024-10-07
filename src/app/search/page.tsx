import dynamic from "next/dynamic";

const SearchComponent = dynamic(() => import("@/components/serchComp/index"), {
  ssr: false,
});

const Search = () => {
  return <SearchComponent />;
};

export default Search;
