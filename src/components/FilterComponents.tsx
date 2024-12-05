"use client";

import React, { useEffect, useState } from "react";
import FilterByCategory from "./ui/FilterByCategory";
import SearchInput from "./shared/SearchInput";
import { useRouter } from "next/navigation";
import { generateSearchQueryUrl } from "@/utils";
import { X } from "lucide-react";

type Props = {
  categoriesOptions: any[];
  countriesOptions: any[];
  setToggleFilter?: any;
  fetchData?: any;
};

export default function FilterComponents({
  categoriesOptions,
  countriesOptions,
  setToggleFilter,
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
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold my-4">Filters</h3>
        <X
          onClick={() => setToggleFilter(false)}
          className="border lg:hidden cursor-pointer "
        />
      </div>
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
          onChange={(selectedOption) => {
            setSelectedCategory(selectedOption);
            setToggleFilter(false);
          }}
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
          onChange={(selectedOption) => {
            setSelectedCountry(selectedOption);
            setToggleFilter(false);
          }}
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
