import React from "react";
//import { useNavigate } from "react-router-dom";
//import { Button } from "antd";

const myInfo = ():JSX.Element =>{

  /*
  const navigate = useNavigate();

  const goToEdit = () => {
    navigate("/edit");
  }
*/


  /*
  const goToLogIn = () => {
    navigate("/LogIn");
  }
  */

  return (
    <div>
      <h3>내 정보</h3>
      <ul>
        <li><div>단축버튼 편집</div></li>
        <li><div>최근 운영 정보</div></li>
        <li><div>최근 운행 정보</div></li>
      </ul>
    </div>
  )
}
export default myInfo;