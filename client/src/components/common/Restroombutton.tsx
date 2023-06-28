import React from 'react';

const Restroombutton = (): JSX.Element => {
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
        }}
      >
        <img
          src="images/Restroombutton.png"
          alt="Restroombutton"
          style={{ width: '100%', height: '100%' }}
        />
      </button>
    </div>
  );
};

export default Restroombutton;
