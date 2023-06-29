// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     Tmapv2: any; // 또는 원하는 타입으로 변경
//   }
// }

// const Map = () => {
//   useEffect(() => {
//     const initTmap = () => {
//       const map = new window.Tmapv2.Map('map_div', {
//         center: new window.Tmapv2.LatLng(
//           37.566481622437934,
//           126.98502302169841,
//         ),
//         width: '390px',
//         height: '844px',
//         zoom: 18,
//       });
//       //Marker 객체 생성.
//       let marker = new window.Tmapv2.Marker({
//         position: new window.Tmapv2.LatLng(37.5652045, 126.98602028), //Marker의 중심좌표 설정.
//         map: map, //Marker가 표시될 Map 설정..
//       });
//     };

//     window.addEventListener('load', initTmap);
//   }, []);

//   return <div id="map_div"></div>;
// };

// export default Map;

import React, { useEffect } from 'react';

declare global {
  interface Window {
    Tmapv2: {
      Size: any;
      Map: new (
        arg0: string,
        arg1: { center: any; width: string; height: string; zoom: number },
      ) => {
        setCenter: (arg0: any) => void;
        setZoom: (arg0: number) => void;
      };
      LatLng: new (arg0: number, arg1: number) => any;
      Marker: new (arg0: {
        position: any;
        icon: any;
        iconSize: any;
        map: {
          setCenter: (arg0: any) => void;
          setZoom: (arg0: number) => void;
        };
      }) => any;
      InfoWindow: new (arg0: {
        position: any;
        type: number;
        map: {
          setCenter: (arg0: any) => void;
          setZoom: (arg0: number) => void;
        };
      }) => any;
    };
  }
}

const Map: React.FC = () => {
  let map: { setCenter: (arg0: any) => void; setZoom: (arg0: number) => void };
  let marker_s, marker_e;

  useEffect(() => {
    const initTmap = () => {
      map = new window.Tmapv2.Map('map_div', {
        center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
        width: '100%',
        height: '400px',
        zoom: 19,
      });

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          //? 현재 마커
          marker_s = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(lat, lon),
            icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
						iconSize : new window.Tmapv2.Size(24, 38),
            map: map,
          });

          //? 도착 마커
          marker_e = new window.Tmapv2.Marker({
            position: new window.Tmapv2.LatLng(36.345698, 127.373761),
            icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
						iconSize : new window.Tmapv2.Size(24, 38),
            map: map,
          });
          
          //? 메시지 창
          const InfoWindow = new window.Tmapv2.InfoWindow({
            position: new window.Tmapv2.LatLng(lat, lon),
            type: 2,
            map: map,
          });

          map.setCenter(new window.Tmapv2.LatLng(lat, lon));
          map.setZoom(19);
        });
      }
    };

    window.addEventListener('load', initTmap);
  }, []);

  return <div id="map_div"></div>;
};

export default Map;