import React from 'react';
import Restroombutton from '../services/Restroombutton';
import Gas_stationbutton from '../services/Gas_stationbutton';
import Local_convenience from '../services/Local_convenience';
import Search from '../services/Search';

const testPage = (): JSX.Element => {
  return (
    <div>
      <Search />
      <div>
        <Restroombutton />
      </div>
      <div>
        <Gas_stationbutton />
      </div>
      <div>
        <Local_convenience />
      </div>
    </div>
  );
};

export default testPage;
