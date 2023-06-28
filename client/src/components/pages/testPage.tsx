import React from 'react';
import Restroombutton from '../common/Restroombutton';
import Gas_stationbutton from '../common/Gas_stationbutton';
import Local_convenience from '../common/Local_convenience';
import Search from '../common/Search';

const testPage = (): JSX.Element => {
  return (
    <div>
      <Search />
      <div style={{ marginTop: '60px' }}>
        <Restroombutton />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Gas_stationbutton />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Local_convenience />
      </div>
    </div>
  );
};

export default testPage;
