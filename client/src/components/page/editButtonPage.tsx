import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnData } from "../context/btnContext";
const EditButtonPage: React.FC = () => {
  const btnContextData = useContext(DefaultBtnData)
  console.log("자 두과자",DefaultBtnData)
  const [contextData, setContextData]= useState(DefaultBtnData)
  const {buttonName}  = useParams();
  console.log("테스트",buttonName)

  const changeBtnData = ()=> {
    const updateData = btnContextData.map(btn => {
      if(btn.name === buttonName) {
        btn.name = buttonName
        console.log(btn.name)
      }
    })
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