// import React, { useEffect } from 'react';

// declare global {
//   interface Window {
//     Tmapv2: {
//       extension: any;
//       Polyline: any;
//       Size: any;
//       Map: new (
//         arg0: string,
//         arg1: { center: any; width: string; height: string; zoom: number },
//       ) => {
//         setCenter: (arg0: any) => void;
//         setZoom: (arg0: number) => void;
//       };
//       LatLng: new (arg0: number, arg1: number) => any;
//       Marker: new (arg0: {
//         position: any;
//         icon: any;
//         iconSize: any;
//         map: {
//           setCenter: (arg0: any) => void;
//           setZoom: (arg0: number) => void;
//         };
//       }) => any;
//       InfoWindow: new (arg0: {
//         position: any;
//         type: number;
//         map: {
//           setCenter: (arg0: any) => void;
//           setZoom: (arg0: number) => void;
//         };
//       }) => any;
//     };
//   }
// }

// const Map: React.FC = () => {
//   let map: { setCenter: (arg0: any) => void; setZoom: (arg0: number) => void };

//   // 페이지가 로딩이 된 후 호출하는 함수입니다.
//   function initTmap() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;
//         // map 생성
//         // Tmap.map을 이용하여, 지도가 들어갈 div, 넓이, 높이를 설정합니다.
//         map = new window.Tmapv2.Map('map_div', {
//           center: new window.Tmapv2.LatLng(lat, lon), // 지도 초기 좌표
//           width: '390px', // 지도의 넓이
//           height: '844px', // 지도의 높이
//           zoom: 18, // 지도의 줌레벨
//         });
//       });
//     }
//   }

//   function getRP() {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;
//         let s_latlng = new window.Tmapv2.LatLng(lat, lon);
//         //? 도착지 설정되면 좌표값으로 들어갈 곳
//         let e_latlng = new window.Tmapv2.LatLng(36.345698, 127.373761);
//         let marker_s;

//         let optionObj = {
//           reqCoordType: 'WGS84GEO', //요청 좌표계 옵셥 설정입니다.
//           resCoordType: 'WGS84GEO', //응답 좌표계 옵셥 설정입니다.
//           trafficInfo: 'Y',
//         };

//         let params = {
//           onComplete: onComplete,
//           onError: onError,
//         };

//         // TData 객체 생성
//         let tData = new window.Tmapv2.extension.TData();

//         // TData 객체의 경로요청 함수
//         tData.getRoutePlanJson(s_latlng, e_latlng, optionObj, params);
//         setInterval(function () {
//           marker_s = new window.Tmapv2.Marker({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             icon: 'https://i.ibb.co/pyJJ1MF/circle.png',
//             iconSize: new window.Tmapv2.Size(20, 20),
//             map: map,
//           });
//         }, 3000);
//       });
//     }
//   }

//   useEffect(() => {
//     window.addEventListener('load', initTmap);
//   }, []);

//   function onComplete(this: {
//     _responseData: any;
//     onComplete: () => void;
//     onProgress: any;
//     onError: any;
//   }): void {
//     console.log(this._responseData); //json으로 데이터를 받은 정보들을 콘솔창에서 확인할 수 있습니다.

//     let jsonObject = new window.Tmapv2.extension.GeoJSON();
//     let jsonForm = jsonObject.rpTrafficRead(this._responseData);

//     //교통정보 표출시 생성되는 LineColor 입니다.
//     let trafficColors = {
//       // 사용자가 임의로 색상을 설정할 수 있습니다.
//       // 교통정보 옵션 - 라인색상
//       trafficDefaultColor: '#000000', //교통 정보가 없을 때
//       trafficType1Color: '#009900', //원할
//       trafficType2Color: '#7A8E0A', //서행
//       trafficType3Color: '#8E8111', //정체
//       trafficType4Color: '#FF0000', //정체
//     };
//     jsonObject.drawRouteByTraffic(map, jsonForm, trafficColors);
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(function (position) {
//         let lat = position.coords.latitude;
//         let lon = position.coords.longitude;
//         map.setCenter(new window.Tmapv2.LatLng(lat, lon));
//       }, onError); // onError 함수 추가
//     }

//     map.setZoom(18);
//   }

//   function onError() {
//     alert('onError');
//   }

//   return (
//     <div>
//       <div id="map_div"></div>
//       {/* //? 경로안내로 버튼 */}
//       <button onClick={getRP}>경로실행</button>
//     </div>
//   );
// };

// export default Map;
