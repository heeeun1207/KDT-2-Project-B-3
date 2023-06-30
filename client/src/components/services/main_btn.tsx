import React, { useContext } from 'react';
import { BtnContext, Button } from '../context/btnContext';

const MainBtn = (): JSX.Element => {
  const Contextdata = useContext<Button[]>(BtnContext);

  return (
    <div>
      {Contextdata.map((data, index) => {
        let Name = data.name;
        let Value = data.value;
        let Image = data.image;

        return (
          <div key={index}>
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
