import React from "react";

type Props = {};

function SearchInput({}: Props) {
  return (
    <>
      <div className="flex gap-4 items-center">
        <input
          className="border px-4 bg-transparent dark:border-gray-800 py-1.5 rounded w-full outline-none"
          type="search"
          id="search input"
          placeholder="Search"
        />

        <button className="bg-primary-base px-4 py-1.5 rounded text-white">
          Search
        </button>
      </div>
    </>
  );
}

export default SearchInput;
