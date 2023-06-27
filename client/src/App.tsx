import React from 'react';
import Header from './components/layout/header';
import TestPage from './components/pages/testPage';
import "./test.css";
const App = ():JSX.Element => {
    return (
        <>
        <div>
        <Header title="My Header" />
            <h1>Hello React</h1>
            <TestPage />
        </div>
        </>
    );
}

export default App;