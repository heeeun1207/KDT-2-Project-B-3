import React, { useState, useEffect } from 'react';
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

  const handleButtonClick = (buttonName: string) => {
    console.log('Button clicked:', buttonName);
  };

  return (
    <div>
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
