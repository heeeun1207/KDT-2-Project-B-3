import React, { useContext } from 'react';
import { DefaultBtnData, Button } from '../context/btnContext';

const MainBtn = (): JSX.Element => {
  const Contextdata = useContext<Button[]>(DefaultBtnData);

  return (
    <div>
      {Contextdata.map((data, index) => {
        let Name = data.name;
        // let Value = data.value;
        let Image = data.image;

        return (
          <div key={index}>
            <button>
              <img src={Image} alt={Name} />
              {/* <span>Name: {Name}</span>
              <span>Value: {Value}</span> */}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default MainBtn;
