import React, { useContext } from 'react';
import { Button, DefaultBtnContext } from '../context/btnContext';
import '../style/mainbtn.css';
const MainBtn = (): JSX.Element => {
  const contextData = useContext<Button[]>(DefaultBtnContext);

  return (
    <div>
      {contextData.map((data, index) => {
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





