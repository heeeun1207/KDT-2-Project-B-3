import React, { useState } from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Header from './components/layout/header';
import FirstPage from './components/pages/firstPage';
import LoginPage from './components/pages/loginPage';
import MainPage from './components/pages/mainPage';
import "./test.css";
const App = ():JSX.Element => {
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState("");
    React.useEffect(()=> {
        switch (location.pathname) {
            case "/" :
                setPageTitle("");
            break;
            case "/login" :
                setPageTitle("로그인");
            break;
            case "/main" :
                setPageTitle("홈")
        }
    }, [location.pathname])
    return (
        <div>
        <Header title={pageTitle} />
            <Routes>
            <Route path='/' element={<FirstPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/main' element={<MainPage />} />
            </Routes>
        </div>
    );
}

export default App;