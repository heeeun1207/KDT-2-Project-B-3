import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { BtnContext, BtnContextData, DefaultBtnContextProvider } from './components/context/btnContext';
import Header from './components/layout/header';
import Custompage from './components/page/custompage';
import EditButtonPage from './components/page/editButtonPage';
import LoginPage from './components/page/loginPage';
import Mainpage from './components/page/mainPage';
// import TestPage from './components/page/testPage';
const App = (): JSX.Element => {
  console.log(BtnContextData);
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');
  interface TitleMapping {
    [key: string]: string;
  }
  const titleMapping: TitleMapping = {
    '/': '홈',
    '/edit': '사용자 버튼 편집',
    '/custom': '카테고리 선택',
    '/login': '로그인',
    '/signUp': '회원가입',
  };
  React.useEffect(() => {
    setPageTitle(titleMapping[location.pathname] || '');
  }, [location.pathname]);
  return (
    <div>
      <Header title={pageTitle} />
      <DefaultBtnContextProvider>
      <BtnContext.Provider value={BtnContextData}>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/custom" element={<Custompage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/edit/:value/:image/:name" element={<EditButtonPage />} />
        </Routes>
      </BtnContext.Provider>
      </DefaultBtnContextProvider>
    </div>
  );
};

export default App;
