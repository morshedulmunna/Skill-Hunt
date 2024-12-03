"use client";

import React from "react";
import SelectionOptionDropdown from "./shared/SelectionOptionDropdown";
import SearchInput from "./shared/SearchInput";

type Props = {};

export default function SearchingSection({}: Props) {
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
          onSelect={(option) => console.log("Selected option:", option)}
        />
      </div>
      <div className="w-full md:w-fit">
        <SelectionOptionDropdown
          defaultValue="Select location"
          options={[
            { label: "Skill", value: "skill" },
            { label: "Language", value: "language" },
            { label: "Location", value: "location" },
          ]}
          onSelect={(option) => console.log("Selected option:", option)}
        />
      </div>

      <div className="w-full">
        <SearchInput />
      </div>
    </div>
  );
}
