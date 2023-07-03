import React, { useContext, useEffect, useState } from 'react';
import Search from '../common/Search';
import { BtnContext } from '../context/btnContext';
import ButtonList from '../services/ButtonList';

const Custompage = (): JSX.Element => {
  const btnContextData = useContext(BtnContext)
  useEffect(()=> {
    console.log(btnContextData)
  },[]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (searchValue: string) => {
    setSearchTerm(searchValue);
  };

  return (
    <div>
      <Search onSearch={handleSearch} />
      <ButtonList searchTerm={searchTerm} />
    </div>
  );
};

export default Custompage;
