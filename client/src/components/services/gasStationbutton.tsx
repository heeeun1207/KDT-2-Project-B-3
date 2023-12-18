import React from 'react';

const gasStationbutton = (): JSX.Element => {
  function testEvent() {
    fetch('/test2').then((data) => {
      console.log(data.json());
    });
  }

  return (
    <div>
      <button
        onClick={testEvent}
        style={{
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)',
          marginTop: '20px',
        }}
      >
        <img
          src="images/Gas_stationbutton.png"
          alt="Gas_stationbutton"
          style={{ width: '100%', height: '100%' }}
        />
      </button>
    </div>
  );
};

export default gasStationbutton;
