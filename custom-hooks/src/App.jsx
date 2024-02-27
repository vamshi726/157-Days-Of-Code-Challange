import React, { useEffect, useState } from "react";

function useDebounce(inputval, timeout) {
  const [searchTerm, setSearchTerm] = useState(inputval);
  useEffect(() => {
    const timerId =setTimeout(() => {
      setSearchTerm(inputval);
    }, timeout);

    // Clean up the timer if the value changes before the delay has passed
    return () => clearTimeout(timerId);
  }, [inputval,searchTerm]);

  return searchTerm;
}

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay
    
  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search..."
      />
      debounced value is {debouncedValue}
    </>
  );
};

export default SearchBar;
