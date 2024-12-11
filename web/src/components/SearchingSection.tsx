"use client";

import React from "react";
import SelectionOptionDropdown from "./shared/SelectionOptionDropdown";
import SearchInput from "./shared/SearchInput";
import { useSearch } from "@/hooks/useSearch";

type Props = {
  categoriesOptions: [];
  countries: [];
};

export default function SearchingSection({
  categoriesOptions,
  countries,
}: Props) {
  const { searchParams, handleSelect, handleSearch, handleSearchSubmit } =
    useSearch(categoriesOptions, countries);

  return (
    <div className="flex items-center flex-col md:flex-row w-full gap-4">
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          className="py-2 w-24 border-none"
          defaultValue="Select Category"
          options={categoriesOptions}
          onSelect={(option) => handleSelect("category", option.value)}
        />
      </div>
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          className="py-2 w-24 border-none"
          defaultValue="Select Location"
          options={countries}
          onSelect={(option) => handleSelect("location", option.value)}
        />
      </div>

      <div className="w-full">
        <SearchInput
          value={searchParams.query}
          placeholder="Search your expected types jobs, ex:software engineer"
          onSearch={handleSearch}
        />
      </div>

      <button
        type="submit"
        onClick={handleSearchSubmit}
        className="bg-primary-base w-full lg:w-fit px-6 py-3 rounded text-white disabled:bg-gray-400"
      >
        Search
      </button>
    </div>
  );
}
