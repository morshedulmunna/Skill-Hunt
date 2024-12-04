"use client";

import React, { useState } from "react";

type FilterOption = {
  value: string;
  label: string;
};

type FilterComponentProps = {
  options: FilterOption[];
  value: {
    value: string;
    label: string;
  };
  onChange: (selectedOption: { value: string; label: string }) => void;
};

const FilterByCategory: React.FC<FilterComponentProps> = ({
  options,
  value,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  }>(value);

  const handleChange = (option: { value: string; label: string }) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      <hr />
      <div className="my-4">
        <h4 className="text-sm font-semibold mb-2">Job Category</h4>
        <ul className="space-y-2">
          {options.map((option) => (
            <li key={option.value}>
              <label className="flex capitalize text-sm cursor-pointer items-center space-x-2">
                <input
                  type="radio"
                  name="job-category"
                  value={selectedOption.value}
                  checked={selectedOption.value === option.value}
                  onChange={() => handleChange(option)}
                  className="w-4 h-4 text-blue-600 cursor-pointer border-gray-300 focus:ring-blue-500"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterByCategory;
