import React from 'react';
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
  {
    /* 커스텀 버튼 이미지만 보이도록 바꿨습니다. */
  }

  return (
    <div className="button" onClick={onClick}>
      <img src={image} />
    </div>
  );
};

export default CustomButton;
