import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DefaultBtnData } from '../context/btnContext';
import '../style/editButtonPage.css';

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

const EditButtonPage: React.FC = () => {
  // useContext
  const btnContextData: Button[] = useContext(DefaultBtnData);
  // 컨텍스트 데이터 관리
  const [btnState, setBtnState] = useState(btnContextData);
  // url 쿼리 데이터
  const { value, image, name } = useParams<ButtonParams>();
  const [selectedButton, setSelectedButton] = useState<number>(-1);

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
    console.log('제발 변해라:', btnContextData);
  }, [btnContextData]);

  const handleConfirm = () => {
    if (selectedButton !== -1) {
      console.log('눌리긴 함?');
      const updatedBtnContextData = btnContextData.map((button, index) => {
        if (index === selectedButton) {
          // 선택한 버튼의 정보로 업데이트
          return {
            value: value,
            image: image,
            name: name,
          };
        }
        return button;
      });
      setBtnState(updatedBtnContextData);
    }
  };

  useEffect(() => {
    setSelectedButton(0); // 첫 로딩시 0번 버튼에 CSS 적용
  }, []);

  return (
    <div>
      <p>
        <strong>어떤 버튼에 적용하겠습니까?</strong>
      </p>

      <button
        onClick={() => handleButtonSelect(0)}
        className={selectedButton === 0 ? 'edit_btn' : ''}
      >
        1
      </button>
      <button
        onClick={() => handleButtonSelect(1)}
        className={selectedButton === 1 ? 'edit_btn' : ''}
      >
        2
      </button>
      <button
        onClick={() => handleButtonSelect(2)}
        className={selectedButton === 2 ? 'edit_btn' : ''}
      >
        3
      </button>

      <button onClick={handleConfirm}>확인</button>
    </div>
  );
};

export default EditButtonPage;
