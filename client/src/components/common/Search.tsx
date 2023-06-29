import React, { useState } from 'react';
import Listdiv from '../services/Listdiv';

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
      <div
        style={{
          width: '273px',
          height: '53px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
          padding: '10px',
          fontSize: '16px',
          position: 'relative',
        }}
      >
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          style={{
            width: '53px',
            height: '71px',
            border: 'none',
            background: 'none',
            backgroundImage: 'url(images/Restroombutton.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'gray',
            backgroundSize: 'cover',
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
          onClick={handleSearch}
        ></button>
      </div>
      {showList.length > 0 && <Listdiv />}
    </div>
  );
};

export default Search;
