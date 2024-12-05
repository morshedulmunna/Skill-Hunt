"use client";

import React, { useEffect, useState } from "react";
import FilterByCategory from "./ui/FilterByCategory";
import SearchInput from "./shared/SearchInput";
import { useRouter } from "next/navigation";
import { generateSearchQueryUrl } from "@/utils";

type Props = {
  categoriesOptions: any[];
  countriesOptions: any[];
  fetchData?: any;
};

export default function FilterComponents({
  categoriesOptions,
  countriesOptions,
}: Props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<{
    label: string;
    value: string;
  }>({
    label: "",
    value: "",
  });
  const [selectedCountry, setSelectedCountry] = useState<{
    label: string;
    value: string;
  }>({
    label: "",
    value: "",
  });

  // Update searchParams and call API when dependencies change
  useEffect(() => {
    const searchParams = generateSearchQueryUrl({
      category: selectedCategory.value,
      location: selectedCountry.value,
      query: search,
    });
    if (searchParams) {
      router.push(`/job-search?${searchParams}`);
    }
  }, [search, selectedCategory, selectedCountry]);

  return (
    <div>
      <h3 className="text-lg font-bold my-4">Filters</h3>
      <hr className="dark:border-gray-800" />
      <div className="mt-4 relative">
        {/* <Search className="mb-2 absolute top-3" /> */}
        <SearchInput
          value={search}
          className={"border px-4"}
          placeholder="Search your expected types jobs, ex:software engineer"
          onSearch={(res) => setSearch(res)}
        />
      </div>
      <div className="mt-4 max-h-[350px]  overflow-y-auto ">
        <h4 className="text-sm font-semibold mb-2">Job Category</h4>
        <FilterByCategory
          value={selectedCategory}
          options={categoriesOptions}
          onChange={(selectedOption) => setSelectedCategory(selectedOption)}
          styles={{
            container: "border dark:border-gray-800 p-4 rounded shadow-sm",
            list: "flex flex-col gap-2",
            label: "text-gray-900 font-medium",
            input: "accent-blue-500",
          }}
        />
      </div>
      <div className="mt-4 max-h-[350px]  overflow-y-auto">
        <h4 className="text-sm font-semibold mb-2">Location</h4>
        <FilterByCategory
          value={selectedCountry}
          options={countriesOptions}
          onChange={(selectedOption) => setSelectedCountry(selectedOption)}
          styles={{
            container: "border dark:border-gray-800 p-4 rounded shadow-sm",
            list: "flex flex-col gap-2",
            label: "text-gray-900 font-medium",
            input: "accent-green-500",
          }}
        />
      </div>
    </div>
  );
}
