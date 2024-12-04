import React, { useState, ChangeEvent, FormEvent } from "react";

type Props = {
  onSearch: (query: string) => void;
  placeholder?: string;
  isLoading?: boolean;
};

function SearchInput({
  onSearch,
  placeholder = "Search",
  isLoading = false,
}: Props) {
  const [query, setQuery] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleInputEvent = (e: FormEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setQuery(inputValue);

    if (inputValue.trim()) {
      onSearch(inputValue);
    }
  };

  return (
    <input
      className="px-4 bg-transparent dark:border-gray-800 py-3 rounded w-full outline-none"
      type="search"
      id="search-input"
      placeholder={placeholder}
      value={query}
      onChange={handleInputChange}
      onInput={handleInputEvent} // Handles all input-related changes
    />
  );
}

export default SearchInput;
