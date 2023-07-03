import React from "react";
import '../style/OpenMenu.css';

const myBookMark = ():JSX.Element =>{
  return (
    <div className="myBookMark">

    <div className="btnContainer">
      마이로그
      <img className="myLogBtn"
       alt="북마크 표시" />
    </div>

    <div className="btnContainer">
      즐겨찾기
      <img className="starBtn" alt="즐겨찾기 표시" />
    </div>
    
    </div>
  )
};
export default myBookMark;