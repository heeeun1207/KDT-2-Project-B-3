import React, { useContext } from 'react';
import { DefaultBtnContext } from '../context/btnContext';

const MainBtn = (): JSX.Element => {
  const { btnContextData } = useContext(DefaultBtnContext);

  return (
    <div>
      {btnContextData.map((data, index) => {
        const { name, image } = data;
        console.log("이게 이미지 이름입니다",image )
        return (
          <div key={index}>
            <div>
              <img src={image} alt={name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
