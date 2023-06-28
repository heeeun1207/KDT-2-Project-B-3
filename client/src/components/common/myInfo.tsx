import React from "react";

const myInfo = ():JSX.Element =>{
  return (
    <div>
      <h3>내 정보</h3>
      <ul>
        <li><button>단축버튼 편집</button></li>
        <li><button>최근 운영 정보</button></li>
        <li><button>최근 운행 정보</button></li>
      </ul>
    </div>
  )
};
export default myInfo;