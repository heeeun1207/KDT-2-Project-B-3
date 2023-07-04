import React, { useState } from 'react';
import MyInfo from '../common/myInfo';
import Search from '../common/Search';
// import Listdiv from '../services/Listdiv';
import MainBtn from '../common/mainbtn';
import MapPage from './mapPage';
const Mainpage = (): JSX.Element => {
  const [selectedBtn, setSelectedBtn] = useState<string>('');

  const handleBtnClick = (name: string) => {
    setSelectedBtn(name);
  };
  const handleSearch = (searchTerm: string) => {
    // Handle the search logic here
    console.log('Search term:', searchTerm);
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ position: 'relative' }}>
      <MapPage selectedBtn={selectedBtn}/>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <Search onSearch={handleSearch} />
      </div>
      <div style={{ position: 'absolute', top: 120, left: 10 }}>
        <MainBtn handleBtnClick={handleBtnClick}/>
      </div>
      <div>
        <div onClick={toggleMenu}>햄버거 메뉴</div>
        {isOpen && <MyInfo />}
      </div>
    </div>
  );
};
export default Mainpage;
