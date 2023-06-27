import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Position {
  lat: number;
  lng: number;
}

const KakaoMap = function () {
  const [position, setPosition] = useState<Position | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMapClick = (_t: any, mouseEvent: any) => {
    setPosition({
      lat: mouseEvent.latLng.getLat(),
      lng: mouseEvent.latLng.getLng(),
    });
  };

  const handleMarkerMouseOver = () => {
    setIsOpen(true);
  };

  const handleMarkerMouseOut = () => {
    setIsOpen(false);
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
        <MapMarker
          position={{
            lat: 36.3489005,
            lng: 127.37733,
          }}
          clickable={true}
          onMouseOver={handleMarkerMouseOver}
          onMouseOut={handleMarkerMouseOut}
        >
          {isOpen && (
            <div style={{ padding: '5px', color: '#000' }}>Hello World!</div>
          )}
        </MapMarker>
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
