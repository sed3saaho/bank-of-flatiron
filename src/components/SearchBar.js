import React, { useState } from 'react';

const SearchBar = ({ transactions, handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSearchClick = () => {
    handleSearch(inputValue);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search by description"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default SearchBar;