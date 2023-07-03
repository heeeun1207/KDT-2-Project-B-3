import React from "react";
import Info from '../common/myInfo';
import Book from '../common/myBookMark';
//import './OpenMenu.module.css';

const OpenMenuPage = ():JSX.Element =>{
  return (
    <div className="body">

    <div className="header">
      <p>Jin님, 환영합니다.</p> 
      <img className="alertBtn" alt="알림이미지 들어갈 부분" />
    </div>

    <Info />
    <Book />
    
    <div className="setting">
      <button className="settingBtn"></button>
    </div>

    <div className="footer">
    <button className="callCenter">고객센터</button>
    <button className="logOut">로그아웃</button>
    </div>

    </div>
  )
};
export default OpenMenuPage;