import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = '/path/to/kakao/maps/sdk.js'; // 로컬 경로로 변경해주세요

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return <div id="map" style={{ width: '500px', height: '400px' }} />;
};

export default App;
