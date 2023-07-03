import React, { useState } from 'react';
import Listdiv from '../services/Listdiv';
import '../style/Header.css';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showList, setShowList] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
    setShowList((prevList) => [...prevList, searchTerm]);
  };

  return (
    <div>
      <div className='container'>
        <input className='searchBar'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className='searchButton' onClick={handleSearch}></button>
        <div className='hamburgerMenu'></div>
        {showList.length > 0 && <Listdiv />}
      </div>
          {/* {showList.length > 0 && <Listdiv />} */}
    </div>
  );
};

export default Search;
