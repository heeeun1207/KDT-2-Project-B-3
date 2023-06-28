// import React from 'react';

// const Search = (): JSX.Element => {
//   return (
//     <div
//       style={{
//         width: '273px',
//         height: '53px',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         border: 'none',
//         backgroundColor: '#ffffff',
//         boxShadow: '0 0 4px rgba(0, 0, 0, 0.5)',
//         padding: '10px',
//         fontSize: '16px',
//         position: 'relative',
//       }}
//     >
//       <input
//         type="text"
//         style={{
//           width: '100%',
//           height: '100%',
//           border: 'none',
//           outline: 'none',
//           backgroundColor: 'transparent',
//           paddingLeft: '10px',
//           paddingRight: '30px',
//           fontSize: 'inherit',
//         }}
//         placeholder="Search..."
//       />
//       <button
//         style={{
//           width: '53px',
//           height: '71px',
//           border: 'none',
//           background: 'none',
//           backgroundImage: 'url(images/Restroombutton.png)',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundColor: 'gray',
//           backgroundSize: 'cover',
//           position: 'absolute',
//           right: '10px',
//           top: '50%',
//           transform: 'translateY(-50%)',
//           cursor: 'pointer',
//         }}
//       ></button>
//     </div>
//   );
// };

// export default Search;
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (searchTerm: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default Search;
