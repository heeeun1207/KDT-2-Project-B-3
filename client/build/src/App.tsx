import React, { useEffect } from 'react';
import './app.css';

declare global {
  interface Window {
    kakao: any;
  }
}

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=id=false`;

    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const mapOptions = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOptions);
      });
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default App;
