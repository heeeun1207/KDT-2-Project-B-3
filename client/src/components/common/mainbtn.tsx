import React, { useContext } from 'react';
import { DefaultBtnContext } from '../context/btnContext';

const MainBtn = (): JSX.Element => {
  const { btnContextData } = useContext(DefaultBtnContext);

  return (
    <div>
      {btnContextData.map((data, index) => {
        const { name, image } = data;
        return (
          <div key={index}>
            <button>
              <img src={image} alt={name} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
