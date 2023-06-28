import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/header';
import Mainpage from './components/pages/Mainpage';
import Custompage from './components/pages/Custompage';
import Loginpage3 from './components/pages/Loginpage';
import './test.css';
const App = (): JSX.Element => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  // interface TitleMapping {
  //   [key: string]: string;
  // }
  // const titleMapping: TitleMapping = {
  //   '/': '커스텀페이지',
  //   '/home': '홈',
  // };
  React.useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPageTitle('');
        break;
      case '/custom':
        setPageTitle('카테고리검색');
      case '/login':
        setPageTitle('');
    }
    // setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <div>
      <Header title={pageTitle} />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<Loginpage3 />} />
      </Routes>
    </div>
  );
};

export default App;
