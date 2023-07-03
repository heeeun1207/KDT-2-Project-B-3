import React, { useState } from 'react';
import '../style/custombtn.css';

interface ButtonInfo {
  image: string;
}

interface CustomButtonProps {
  buttonInfo: ButtonInfo;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ buttonInfo, onClick }) => {
  const { image } = buttonInfo;
  const [isActive, setIsActive] = useState(false);

  const handleButtonClick = () => {
    setIsActive(!isActive);
    onClick();
  };

  return (
    <div
      className={`button ${isActive ? 'active' : ''}`}
      onClick={handleButtonClick}
    >
      <img src={image} />
    </div>
  );
};

export default CustomButton;
