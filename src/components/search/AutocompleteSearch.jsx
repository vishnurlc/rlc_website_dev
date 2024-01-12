"use client";
import React, { useState, useEffect } from "react";
import { debounce } from "lodash";

const AutocompleteSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const debouncedFetchSearchResults = debounce(async (term) => {
    try {
      const api = `${process.env.NEXT_PUBLIC_BACKEND_URL}/chauffeur-cars?_q=${term}&populate=*&sort[0]=name:asc`;
      const response = await fetch(api, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_BEARER_TOKEN}`,
        },
      });
      const data = await response.json();

      // Update search results in the state
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, 300);

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
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Type to search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {searchResults?.data?.map((result) => (
          <li key={result.id}>{result.attributes.name}</li>
          // Adjust 'name' based on the field you want to display in the results
        ))}
      </ul>
    </div>
  );
};

export default AutocompleteSearch;
