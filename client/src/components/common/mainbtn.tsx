import React, { useContext } from 'react';
import { DefaultBtnContext } from '../context/btnContext';
import '../style/mainbtn.css';

const MainBtn = ({ handleBtnClick }: { handleBtnClick: (name: string) => void }): JSX.Element => {
  const { btnContextData } = useContext(DefaultBtnContext);


  return (
    <div>
      {btnContextData.map((data, index) => {
        const { name, image } = data;
        console.log("이게 이미지 이름입니다",image);
        console.log("이게 이름입니다", name);
        return (
          <div key={index}>
            <div className="main-button" onClick={() => handleBtnClick(name)}>
              <img src={image} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
