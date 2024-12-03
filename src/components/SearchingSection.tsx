"use client";

"use client";

import React, { useState } from "react";
import SelectionOptionDropdown from "./shared/SelectionOptionDropdown";
import SearchInput from "./shared/SearchInput";
import { useRouter } from "next/navigation";

type Props = {};

export default function SearchingSection({}: Props) {
  const router = useRouter();
  // state for category, location, and query
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

  // Function to build search query URL
  const generateSearchQueryUrl = () => {
    const { category, location, query } = searchParams;
    const searchParamsObj = new URLSearchParams();
    if (category) searchParamsObj.append("category", String(category));
    if (location) searchParamsObj.append("location", String(location));
    if (query) searchParamsObj.append("query", query);

    return `/job-search?${searchParamsObj.toString()}`;
  };

  // Function to navigate with the search URL
  const handleSearchSubmit = () => {
    const searchUrl = generateSearchQueryUrl();
    router.push(searchUrl); // Navigate to the search page with query parameters
  };

  return (
    <div className="flex items-center flex-col md:flex-row w-full gap-4">
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          defaultValue="Select Category"
          options={[
            { label: "Skill", value: "skill" },
            { label: "Language", value: "language" },
            { label: "Location", value: "location" },
          ]}
          onSelect={(option) => handleSelect("category", option.value)}
        />
      </div>
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          defaultValue="Select Location"
          options={[
            { label: "Skill", value: "skill" },
            { label: "Language", value: "language" },
            { label: "Location", value: "location" },
          ]}
          onSelect={(option) => handleSelect("location", option.value)}
        />
      </div>

      <div className="w-full">
        <SearchInput onSearch={handleSearch} />
      </div>

      <button
        type="submit"
        onClick={handleSearchSubmit}
        className="bg-primary-base px-4 py-1.5 rounded text-white disabled:bg-gray-400"
      >
        {/* {isLoading ? "Searching..." : "Search"} */}
        Search
      </button>
    </div>
  );
}
