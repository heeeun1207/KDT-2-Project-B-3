import React from "react";
import { useParams } from "react-router-dom";
import EditButton from '../common/editButtonSelect';

const EditButtonPage: React.FC = () => {
  const id = useParams();
  console.log(id)
  return (<div>
    <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

    <EditButton />

    <button>확인</button>

  </div>)
};

export default EditButtonPage;