import React from 'react';
import Restroombutton from '../common/Restroombutton';
import Gas_stationbutton from '../common/Gas_stationbutton';
import Local_convenience from '../common/Local_convenience';
const testPage = (): JSX.Element => {
  return (
    <div>
      <p>대머리</p>
      <Restroombutton />
      <Gas_stationbutton />
      <Local_convenience />
    </div>
  );
};
export default testPage;
