import React, { useState } from 'react';
import Search from '../common/Search';
// import Listdiv from '../services/Listdiv';
import MainBtn from '../common/mainbtn';
import hamburgerImage from '../images/hamburger.png';
import MenuListPage from '../page/menuListPage';
import '../style/Header.css';
import '../style/OpenMenu.css';


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
    // 전체 div 감싸는 컨테이너
    <div style={{ position: 'relative', width : '100%', height : '100%'}}>
      <MapPage selectedBtn={selectedBtn}/>
      {/* 검색창과 햄버거 메뉴가 들어갈 헤더 컨테이너 */}
      <div style={{width : '100%', height : '20%', position: 'absolute', display : 'flex', justifyContent : 'space-evenly', alignItems : 'center',top: 0, left: 0}}>
        <Search onSearch={handleSearch} />
        <div className='hamburgerMenu' onClick={toggleMenu} style={{display : 'felx', alignItems:'center', justifyContent :'center'}}>
          <img className='img' src={hamburgerImage} alt=''/>
        </div>
        {isOpen && <MenuListPage />}
      </div>
      <div style={{ position: 'absolute', top: 120, left: 10 }}>
        <MainBtn handleBtnClick={handleBtnClick}/>
      </div>
    </div>
  );
};
export default Mainpage;




// import React, { useState } from 'react';
// import Search from '../common/Search';
// import '../style/Header.css';
// import hamburgerImage from '../images/hamburger.png';
// import MenuListPage from '../page/menuListPage';
// import MainBtn from '../common/mainbtn';

// const Mainpage = (): JSX.Element => {
//   const handleSearch = (searchTerm: string) => {
//     // Handle the search logic here
//     console.log('Search term:', searchTerm);
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <div className='container'>
//         <Search onSearch={handleSearch} />
//         <div className='hamburgerMenu' onClick={toggleMenu}>
//           <img className='img' src={hamburgerImage} alt='' />
//         </div>
//         {isOpen && <div className='overlay' onClick={closeMenu} />}
//         {isOpen && <MenuListPage />}
//       </div>
//       {/* 커스텀 버튼리스트 부분 */}
//       <MainBtn />
//     </div>
//   );
// };

// export default Mainpage;


// import React, { useState, useRef, useEffect } from 'react';
// import Search from '../common/Search';
// import '../style/Header.css';
// import hamburgerImage from '../images/hamburger.png';
// import MenuListPage from '../page/menuListPage';
// import MainBtn from '../common/mainbtn';
// import styled from 'styled-components';

// const SideBarWrap = styled.div`
//   z-index: 5;
//   padding: 12px;
//   border-radius: 15px 0 0 15px;
//   background-color: #e7e4e1;
//   height: 100%;
//   width: 55%;
//   right: -55%;
//   top: 0;
//   position: fixed;
//   transition: 0.5s ease;
//   &.open {
//     right: 0;
//     transition: 0.5s ease;
//   }
// `;

// const ExitMenu = styled.span`
//   position: absolute;
//   bottom: 26px;
//   font-size: 0.8rem;
// `;

// const Mainpage = (): JSX.Element => {
//   const handleSearch = (searchTerm: string) => {
//     // Handle the search logic here
//     console.log('Search term:', searchTerm);
//   };

//   const [isOpen, setIsOpen] = useState(false);
//   const sidebarRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleClickOutside = (e: MouseEvent) => {
//     if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
//       setIsOpen(false);
//     }
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <div className='container'>
//         <Search onSearch={handleSearch} />
//         <div className='hamburgerMenu' onClick={toggleMenu}>
//           <img className='img' src={hamburgerImage} alt='' />
//         </div>
//         {isOpen && <div className='overlay' onClick={() => setIsOpen(false)} />}
//         {isOpen && (
//           <SideBarWrap ref={sidebarRef} className={isOpen ? 'open' : ''}>
//             <MenuListPage />
//             <ExitMenu onClick={() => setIsOpen(false)}>X</ExitMenu>
//           </SideBarWrap>
//         )}
//       </div>
//       {/* 커스텀 버튼리스트 부분 */}
//       <MainBtn />
//     </div>
//   );
// };

// export default Mainpage;

