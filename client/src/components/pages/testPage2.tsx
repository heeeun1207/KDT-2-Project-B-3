import React, { useState } from 'react';
import Custombutton from '../services/Custombutton';
import Search from '../common/Search';

const TestPage = (): JSX.Element => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = (searchTerm: string) => {
    // Perform search logic based on the searchTerm
    // Set the search results to the state
    setSearchResults([searchTerm]);
  };

  const handleButtonClick = (buttonName: string) => {
    console.log('Button clicked:', buttonName);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      {searchResults.map((result, index) => (
        <Custombutton
          key={index}
          buttonInfo={{
            value: result,
            image: `${result.toLowerCase()}.jpg`,
            name: result,
          }}
          onClick={() => handleButtonClick(result)}
        />
      ))}
    </div>
  );
};

export default TestPage;
