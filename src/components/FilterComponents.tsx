"use client";

import React from "react";
import FilterByCategory from "./ui/FilterByCategory";

type Props = {
  categoriesOptions: any[];
};

export default function FilterComponents({ categoriesOptions }: Props) {
  return (
    <div>
      <FilterByCategory
        value={{ label: "hybrid", value: "hybrid" }}
        options={categoriesOptions}
        onChange={(selectedOption) => {
          console.log("Selected filter:", selectedOption);
        }}
      />
    </div>
  );
}
