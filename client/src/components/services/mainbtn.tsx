import React, { useContext } from 'react';
import { DefaultBtnData, Button } from '../context/btnContext';

const MainBtn = (): JSX.Element => {
  const Contextdata = useContext<Button[]>(DefaultBtnData);

  return (
    <div>
      {Contextdata.map((data, index) => {
        let Name = data.name;
        let Value = data.value;
        let Image = data.image;

        return (
          <div key={index}>
            {/* 버튼으로 우선 바꿔보자  */}
            <p>Name: {Name}</p>
            {/* <p>Value: {Value}</p> */}
            {/* <img src={Image} alt={Name} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
