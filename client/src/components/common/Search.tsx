import React from 'react';

const Search = (): JSX.Element => {
  return (
    <div>
      <input
        type="text"
        style={{
          width: '270px',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          backgroundColor: '#ffffff',
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
          padding: '10px',
          fontSize: '16px',
        }}
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
