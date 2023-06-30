import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtn } from "../context/btnContext";
const EditButtonPage: React.FC = () => {
  const btnContextData = useContext(DefaultBtn)
  console.log("자 두과자",btnContextData)
  const [contextData, setContextData]= useState()
  const id = useParams();
  console.log("테스트",id)

  const changeBtnData = ()=> {
    
  }
  return (<div>
    <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

    <div>1</div>
    <div>2</div>
    <div>3</div>

    <button onClick={changeBtnData}>확인</button>

  </div>)
};

export default EditButtonPage;