import React from "react";
import Info from '../common/myInfo';
import Book from '../common/myBookMark';
const clickViewHamburgerButton = ():JSX.Element=> {
  return <div>
    
    <div>
    <h5>Jin님 환영합니다.</h5>
    <div>img</div>
    </div>
    
    <Info/>
    <Book/>


    <div>
      img222
    </div>

    <button>고객센터</button>
    <button>로그아웃</button>

  </div>
};
export default clickViewHamburgerButton;