"use client";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

const AutocompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedFetchSearchResults = debounce(async (term) => {
    try {
      // Replace 'your-api-endpoint' with the actual endpoint to fetch data from Strapi
      const response = await fetch(
        `http://localhost:1337/your-api-endpoint?_q=${term}`
      );
      const data = await response.json();

      // Update search results in the state
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 300); // Adjust the debounce delay as needed (300 milliseconds in this example)

  useEffect(() => {
    // Fetch results only if the search term is not empty
    if (searchTerm.trim() !== "") {
      debouncedFetchSearchResults(searchTerm);
    } else {
      // Clear search results if the search term is empty
      setSearchResults([]);
    }

    // Cleanup function to cancel debounced function on component unmount
    return () => debouncedFetchSearchResults.cancel();
  }, [searchTerm, debouncedFetchSearchResults]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
          // Adjust 'name' based on the field you want to display in the results
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteSearch;
