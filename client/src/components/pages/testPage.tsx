import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tmapv2: any; // 또는 원하는 타입으로 변경
  }
}

const Map = () => {
  useEffect(() => {
    const initTmap = () => {
      const map = new window.Tmapv2.Map("map_div", {
        center: new window.Tmapv2.LatLng(37.566481622437934, 126.98502302169841),
        width: "390px",
        height: "844px",
        zoom: 15
      });
    };

    window.addEventListener('load', initTmap);
  }, []);

  return (
    <div id="map_div"></div>
  );
};

export default Map;