import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import Header from './components/layout/header';
import "./test.css";
const App = ():JSX.Element => {
    const location = useLocation();
    const [pageTitle, setPageTitle] = useState("");
    React.useEffect(()=> {
        switch (location.pathname) {
            case "/" :
                setPageTitle("테스트");
            break;
            case "/home" :
                setPageTitle("홈")
        }
    }, [location.pathname])
    return (
        <>
        <div>
        <Header title={pageTitle} />
            {/* <Routes>
                <Route path='/' element={<TestPage />} />
                <Route path='/home' element={<TestPage2 />} />
            </Routes>
        {[
            "/",
            "/home"
        ].includes(location.pathname) ? null : (
            <div>Loading...</div>
        )} */}
        </div>
        </>
    );
}

export default App;