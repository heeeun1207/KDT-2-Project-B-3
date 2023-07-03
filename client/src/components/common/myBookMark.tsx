import React from "react";
import './OpenMenu.module.css';

const myBookMark = ():JSX.Element =>{
  return (
    <div className="myBookMark">

    <div>
      마이로그
      <img className="myLogBtn"
       alt="북마크 표시" />
    </div>

    <div>
      즐겨찾기
      <img className="star" alt="즐겨찾기 표시" />
    </div>
    
    </div>
  )
};
export default myBookMark;