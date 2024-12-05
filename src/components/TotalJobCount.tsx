"use client";

import { ListFilter } from "lucide-react";
import React, { useRef, useState } from "react";
import FilterComponents from "./FilterComponents";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";

type Props = {
  totalCount: number;
  categoriesOptions: any[];
  countriesOptions: any[];
};

export default function TotalJobCount({
  totalCount,
  countriesOptions,
  categoriesOptions,
}: Props) {
  const [toggleFilter, setToggleFilter] = useState<boolean>(false);
  const ref = useRef<any>();

  useOnClickOutside(ref, () => setToggleFilter(false));

  return (
    <div ref={ref} className="flex  justify-between">
      <h2 className="text-primary-base dark:text-primary-lighter font-semibold">
        Total List of Jobs: {totalCount}
      </h2>

      <div className="lg:hidden">
        <ListFilter
          className="cursor-pointer"
          onClick={() => setToggleFilter(!toggleFilter)}
        />
      </div>

      <div
        className={`fixed dark:bg-background bg-white border dark:border-gray-800 p-4 ${
          toggleFilter ? "bottom-0" : "-bottom-[100%]"
        } w-full transition-all left-0 z-40 shadow-md ease-in-out duration-300 lg:hidden`}
      >
        <FilterComponents
          setToggleFilter={setToggleFilter}
          countriesOptions={countriesOptions}
          categoriesOptions={categoriesOptions}
        />
      </div>
    </div>
  );
}
