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

    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <input
      className="border px-4 bg-transparent dark:border-gray-800 py-3 rounded w-full outline-none"
      type="search"
      id="search-input"
      placeholder={placeholder}
      value={query}
      onChange={handleInputChange}
    />
  );
}

export default SearchInput;
