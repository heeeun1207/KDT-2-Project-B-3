import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/layout/header';
import Custompage from './components/pages/Custompage';
import MainPage from './components/pages/mainPage';
import TestPage from './components/pages/testPage';
import Listdiv from './components/services/Listdiv';
// import TestPage2 from './components/pages/testPage2';
import './test.css';
const App = (): JSX.Element => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '테스트',
    '/home': '홈',
  };
  React.useEffect(() => {
    // switch (location.pathname) {
    //     case "/" :
    //         setPageTitle("테스트");
    //     break;
    //     case "/home" :
    //         setPageTitle("홈")
    // }
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <div>
      <Header title={pageTitle} />
      <Routes>
        <Route path="/" element={<TestPage />} />
        {/* <Route path="/test" element={<TestPage2 />} /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/custom" element={<Custompage />} />
        <Route path="/login" element={<Listdiv />} />
      </Routes>
    </div>
  );
};

export default App;