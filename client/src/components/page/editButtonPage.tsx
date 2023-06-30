import React, { useContext } from "react";
import { useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnData } from "../context/btnContext";
interface Button {
  value: string;
  image: string;
  name: string;
}
const EditButtonPage: React.FC = () => {
  const btnContextData = useContext(DefaultBtnData);
  const paramData = useParams()
  console.log("이거야아아아아", Object.values(paramData))
  return (
    <div>
      <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

      <div>1</div>
      <div>2</div>
      <div>3</div>

      <button>확인</button>
    </div>
  );
};
export default EditButtonPage
