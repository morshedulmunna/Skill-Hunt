import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateSearchQueryUrl } from "@/utils";

export function useSearch(categoriesOptions: [], countries: []) {
  const router = useRouter();

  const [searchParams, setSearchParams] = useState({
    category: "",
    location: "",
    query: "",
  });

  // Function to handle category and location selection
  const handleSelect = (type: string, value: string | number) => {
    setSearchParams((prevState) => ({ ...prevState, [type]: value }));
  };

  // Function to handle search query input
  const handleSearch = (query: string) => {
    setSearchParams((prevState) => ({ ...prevState, query }));
  };

  // Function to navigate with the search URL
  const handleSearchSubmit = () => {
    const searchUrl = generateSearchQueryUrl(searchParams);
    router.push(`/job-search?${searchUrl}`);
  };

  return {
    searchParams,
    categoriesOptions,
    countries,
    handleSelect,
    handleSearch,
    handleSearchSubmit,
  };
}
