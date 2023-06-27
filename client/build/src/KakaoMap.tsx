import React, { useState } from 'react';
import { Map, MapMarker, MapTypeId } from 'react-kakao-maps-sdk';

const KakaoMap = function () {
  const [position, setPosition] = useState<null | { lat: number; lng: number }>(
    null,
  );

  const handleMapClick = (_t: any, mouseEvent: any) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };

  return (
    <>
      <Map
        center={{
          lat: 36.3489005,
          lng: 127.37733,
        }}
        style={{
          width: '100%',
          height: '450px',
        }}
        level={3}
        onClick={handleMapClick}
      >
        {position && <MapMarker position={position} />}
      </Map>
      {position && (
        <p>
          {'클릭한 위치의 위도는 ' +
            position.lat +
            ' 이고, 경도는 ' +
            position.lng +
            ' 입니다'}
        </p>
      )}
    </>
  );
};

export default KakaoMap;
