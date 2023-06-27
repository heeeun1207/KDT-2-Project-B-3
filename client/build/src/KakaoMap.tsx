import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

const KakaoMap = function () {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>맵위에 마커와 인포윈도우 올리기!</div>
      </MapMarker>
    </Map>
  );
};

export default KakaoMap;
