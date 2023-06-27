import React, { useState, useEffect } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface Marker {
  position: {
    lat: number;
    lng: number;
  };
  content: string;
}

export const KakaoMap = () => {
  const [info, setInfo] = useState<Marker | null>(null);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();
    const tempMarkers: Marker[] = [];

    ps.keywordSearch('이태원 맛집', (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          tempMarkers.push({
            position: {
              lat: Number(data[i].y),
              lng: Number(data[i].x),
            },
            content: data[i].place_name,
          });
          bounds.extend(
            new kakao.maps.LatLng(Number(data[i].y), Number(data[i].x)),
          );
        }
        setMarkers(tempMarkers);

        map.setBounds(bounds);
      }
    });
  }, [map]);

  return (
    <Map
      center={{
        lat: 37.566826,
        lng: 126.9786567,
      }}
      style={{
        width: '100%',
        height: '350px',
      }}
      level={3}
      onCreate={setMap}
    >
      {markers.map((marker) => (
        <MapMarker
          key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
          position={marker.position}
          onClick={() => setInfo(marker)}
        >
          {info && info.content === marker.content && (
            <div style={{ color: '#000' }}>{marker.content}</div>
          )}
        </MapMarker>
      ))}
    </Map>
  );
};

export default KakaoMap;
