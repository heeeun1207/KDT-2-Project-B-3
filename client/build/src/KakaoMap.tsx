import React from 'react';
import { Map, MapMarker, MapTypeId } from 'react-kakao-maps-sdk';

const KakaoMap = function () {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: '100%', height: '360px' }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{ color: '#000' }}>맵위에 마커와 인포윈도우 올리기!</div>
      </MapMarker>
      {/*지도에 교통정보 표시하기*/}
      <MapTypeId type={kakao.maps.MapTypeId.TRAFFIC} />
    </Map>
  );
};

export default KakaoMap;
