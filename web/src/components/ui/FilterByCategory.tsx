"use client";

import React, { useState, useEffect } from "react";

type FilterOption = {
  value: string;
  label: string;
};

type FilterComponentProps = {
  options: FilterOption[];
  value: FilterOption;
  onChange: (selectedOption: FilterOption) => void;
  styles?: {
    container?: string;
    list?: string;
    listItem?: string;
    label?: string;
    input?: string;
    span?: string;
  };
};

const FilterByCategory: React.FC<FilterComponentProps> = ({
  options,
  value,
  onChange,
  styles = {},
}) => {
  const [selectedOption, setSelectedOption] = useState<FilterOption>(value);

  useEffect(() => {
    setSelectedOption(value);
  }, [value]);

  const handleChange = (option: FilterOption) => {
    setSelectedOption(option);
    onChange(option);
  };

  return (
    <div className={`my-4 ${styles.container || ""}`}>
      <ul className={`space-y-2 ${styles.list || ""}`}>
        {options.map((option) => (
          <li key={option.value} className={styles.listItem || ""}>
            <label
              className={`flex capitalize text-sm cursor-pointer items-center space-x-2 ${
                styles.label || ""
              }`}
            >
              <input
                type="radio"
                name={value.value}
                value={option.value}
                checked={selectedOption.value === option.value}
                onChange={() => handleChange(option)}
                className={`w-4 h-4 text-blue-600 cursor-pointer border-gray-300  focus:ring-blue-500 ${
                  styles.input || ""
                }`}
              />
              <span
                className={`text-gray-700 dark:text-white ${styles.span || ""}`}
              >
                {option.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterByCategory;
