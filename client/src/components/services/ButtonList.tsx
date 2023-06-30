import React, { useEffect, useState } from 'react';
import Custombutton from './Custombutton';

interface ButtonListProps {
  searchTerm: string;
}

interface Button {
  value: string;
  image: string;
  name: string;
}

const ButtonList = ({ searchTerm }: ButtonListProps): JSX.Element => {
  const [buttons, setButtons] = useState<Button[]>([]);
const [selectedBtn, setSlectedBtn] = useState<string>("")
  useEffect(() => {
    // 가상으로 가져온 버튼 데이터
    const virtualButtons: Button[] = [
      {
        value: '편의점',
        image: 'convenience-store.jpg',
        name: '편의점',
      },
      {
        value: '카페',
        image: 'cafe.jpg',
        name: '카페',
      },
      {
        value: '주유소',
        image: 'gas-station.jpg',
        name: '주유소',
      },
      {
        value: '화장실',
        image: 'restroom.jpg',
        name: '화장실',
      },
    ];

    // 추가 버튼
    const additionalButton: Button = {
      value: '추가 버튼',
      image: 'additional-button.jpg',
      name: '추가 버튼',
    };

    // 가상 데이터에 추가 버튼을 포함하여 상태에 설정
    setButtons([...virtualButtons, additionalButton]);
  }, []);

  const filteredButtons = buttons.filter((button) =>
    button.name.includes(searchTerm),
  );

  // 버튼을 클릭했을 때 선택한 버튼이 어떤 것인지 데이터를 가져옴
  const handleButtonClick = (buttonName: string) => {
    console.log('Button clicked:', buttonName);
    setSlectedBtn(buttonName)
  };

  return (
    <div> {selectedBtn}
      {filteredButtons.map((button, index) => (
        <Custombutton
          key={index}
          buttonInfo={button}
          onClick={() => handleButtonClick(button.name)}
        />
      ))}
    </div>
  );
};

export default ButtonList;
