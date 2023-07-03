import React, { useContext } from 'react';
import { DefaultBtnData, Button } from '../context/btnContext';
import '../style/mainbtn.css';

const MainBtn = (): JSX.Element => {
  const contextData = useContext<Button[]>(DefaultBtnData);

  return (
    <div>
      {Contextdata.map((data, index) => {
        let Name = data.name;
        // let Value = data.value;
        let Image = data.image;

        return (
          <div key={index}>
            <button className="main-button">
              <img src={image} alt={name} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
