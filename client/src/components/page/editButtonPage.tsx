import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import EditButton from '../common/editButtonSelect';
import { DefaultBtnContext } from "../context/btnContext";
// 디폴트 버튼 인터페이스
interface Button {
  value: string;
  image: string;
  name: string;
}
// url로 가져온 데이터 인터페이스
interface ButtonParams {
  value: string;
  image: string;
  name: string;
  [key: string]: string;
}

export const EditButtonPage: React.FC = () => {
  const navigate = useNavigate();
  // 기본 버튼 useContext
  const btnContextData :  Button[]= useContext(DefaultBtnContext);
  // 컨텍스트 데이터 상태 관리
  const [contextState, setContextState] = useState(btnContextData)
  // 버튼 상태
  const [btnState, setBtnState]= useState(btnContextData);
  // 버튼 상태 관리
  const [selectedButton, setSelectedButton] = useState<number>(-1);
  // url 쿼리 데이터 가져오기
  const { value, image, name } = useParams<ButtonParams>();

  if (!value || !image || !name) {
    // URL 파라미터가 없는 경우 처리
    return <div>URL 파라미터가 존재하지 않습니다.</div>;
  }
  console.log('Value:', value);
  console.log('Image:', image);
  console.log('Name:', name);

  const handleButtonSelect = (buttonIndex: number) => {
    // 1, 2, 3번 state
    setSelectedButton(buttonIndex);
  };
  // 변경사항 확인하기 위한 콘솔
  useEffect(() => {
    console.log("안돼?", contextState);
  }, [contextState]);
  
  const handleConfirm = () => {
    if (selectedButton !== -1) {
      // btnContextData의 n번째 데이터를 url로 받은 데이터로 재할당
      const updatedBtnContextData = btnContextData.map((button, index) => {
        // 재할당 구간
        if (index === selectedButton) {
          return {
            value: value,
            image: image,
            name: name,
          };
        }
        console.log("제발",button)
        return button;
      });
      alert("적용이 완료됐습니다.");
      navigate('/main');
      updatedBtnContextData(updatedBtnContextData)
      setContextState(updatedBtnContextData);
      
      // 변경후에 main페이지로 이동
      
    }
  };

  return (
    <div>
    <p><strong>어떤 버튼에 적용하겠습니까?</strong></p>

    <div
      onClick={() => handleButtonSelect(0)}
      style={{ backgroundColor: selectedButton === 0 ? 'navy' : '' }}
    >
      1
    </div>
    <div
      onClick={() => handleButtonSelect(1)}
      style={{ backgroundColor: selectedButton === 1 ? 'navy' : '' }}
    >
      2
    </div>
    <div
      onClick={() => handleButtonSelect(2)}
      style={{ backgroundColor: selectedButton === 2 ? 'navy' : '' }}
    >
      3
    </div>

    <button onClick={handleConfirm}>확인</button>
  </div>
  );
};

export default EditButtonPage;
