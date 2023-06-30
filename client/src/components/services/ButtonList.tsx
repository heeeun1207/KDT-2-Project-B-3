import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import YesNoModal from '../common/YesNoModal';
import { BtnContext } from '../context/btnContext';
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
  const [selectedBtn, setSelectedBtn] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const btnContextData = useContext(BtnContext);

  useEffect(() => {
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

    const additionalButton: Button = {
      value: '추가 버튼',
      image: 'additional-button.jpg',
      name: '추가 버튼',
    };

    setButtons([...virtualButtons, additionalButton]);
  }, []);

  const filteredButtons = buttons.filter((button) =>
    button.name.includes(searchTerm),
  );

  const handleButtonClick = (buttonName: string) => {
    console.log('Button clicked:', buttonName);
    setSelectedBtn(buttonName);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalConfirm = (buttonName: string) => {
    console.log('Confirmed:', buttonName);
    setIsModalOpen(false);
    navigate(`/edit/${buttonName}`);
  };

  return (
    <div>
      {selectedBtn}
      {btnContextData.map((button, index) => (
        <Custombutton
          key={index}
          buttonInfo={button}
          onClick={() => handleButtonClick(button.name)}
        />
      ))}
      {isModalOpen && (
        <YesNoModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={() => handleModalConfirm(selectedBtn)}
        />
      )}
    </div>
  );
};

export default ButtonList;
