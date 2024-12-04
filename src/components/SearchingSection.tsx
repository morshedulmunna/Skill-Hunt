"use client";

import React, { useState } from "react";
import SelectionOptionDropdown from "./shared/SelectionOptionDropdown";
import SearchInput from "./shared/SearchInput";
import { useRouter } from "next/navigation";
import { generateSearchQueryUrl } from "@/utils";

type Props = {
  category: [];
};

export default function SearchingSection({ category }: Props) {
  const router = useRouter();
  let categoryOption = [] as any;
  if (category.length > 0) {
    category.forEach((cat) => {
      categoryOption.push({ label: cat, value: cat });
    });
  }

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

  // Function to navigate with the search URL
  const handleSearchSubmit = () => {
    const searchUrl = generateSearchQueryUrl(searchParams);
    router.push(`/job-search?${searchUrl}`);
  };

  return (
    <div className="flex items-center flex-col md:flex-row w-full gap-4">
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          className="py-2 w-24 border-none"
          defaultValue="Select Category"
          options={categoryOption}
          onSelect={(option) => handleSelect("category", option.value)}
        />
      </div>
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          className="py-2 w-24 border-none"
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
        className="bg-primary-base w-full lg:w-fit px-6 py-3 rounded text-white disabled:bg-gray-400"
      >
        {/* {isLoading ? "Searching..." : "Search"} */}
        Search
      </button>
    </div>
  );
}
