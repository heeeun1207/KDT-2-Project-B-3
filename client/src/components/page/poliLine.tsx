import React from 'react';
import { useEffect } from 'react';

interface LatLng {
  lat: number;
  lng: number;
}

interface Feature {
  geometry: {
    type: string;
    coordinates: number[][];
  };
  properties: {
    viaPointId: string;
    pointType: string;
  };
}

interface RouteData {
  features: Feature[];
}

interface TrafficColors {
  extractStyles: boolean;
  trafficDefaultColor: string;
  trafficType1Color: string;
  trafficType2Color: string;
  trafficType3Color: string;
}

interface StyleRed {
  fillColor: string;
  fillOpacity: number;
  strokeColor: string;
  strokeWidth: number;
  strokeDashstyle: string;
  pointRadius: number;
  title: string;
}

// 1. 지도 띄우기
const mapCenter: LatLng = { lat: 37.52084364186228, lng: 127.058908811749 };

const MapComponent = () => {
  let map: { setCenter: (arg0: any) => void; setZoom: (arg0: number) => void };
  useEffect(() => {
    map = new window.Tmapv2.Map('map_div', {
      center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
      width: '390px',
      height: '844px',
      zoom: 19,
    });

    const new_polyLine: any[] = [];
    const new_Click_polyLine: any[] = [];

    function drawData(data: RouteData) {
      // 지도위에 선은 다 지우기
      let routeData = data;
      let resultStr = '';
      let distance = 0;
      let idx = 1;

      for (let i = 0; i < data.features.length; i++) {
        let feature = data.features[i];
        // 배열에 경로 좌표 저장
        if (feature.geometry.type === 'LineString') {
          let ar_line = [];
          for (let j = 0; j < feature.geometry.coordinates.length; j++) {
            let startPt = new window.Tmapv2.LatLng(
              feature.geometry.coordinates[j][1],
              feature.geometry.coordinates[j][0]
            );
            ar_line.push(startPt);
          }
          let polyline = new window.Tmapv2.Polyline({
            path: ar_line,
            strokeColor: '#ff0000',
            strokeWeight: 6,
            map: map,
          });
          new_polyLine.push(polyline);
        }
      }
      let markerCnt = 1;
      for (let i = 0; i < data.features.length; i++) {
        let mData = data.features[i];
        let type = mData.geometry.type;
        let pointType = mData.properties.pointType;
        let pointTypeCheck = false; // 경유지 일때만 true
        if (mData.properties.pointType === 'S') {
          let img = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png';
          let lon = mData.geometry.coordinates[0];
          let lat = mData.geometry.coordinates[1];
        } else if (mData.properties.pointType === 'E') {
          let img = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png';
          let lon = mData.geometry.coordinates[0];
          let lat = mData.geometry.coordinates[1];
        } else {
          markerCnt = i;
          let lon = mData.geometry.coordinates[0];
          let lat = mData.geometry.coordinates[1];
        }
      }
    }

    // 2. 시작, 도착 심볼 찍기
    let markerList: any[] = [];

    // 시작
    addMarker('llStart', 127.02810900563199, 37.519892712436906, 1);
    // 도착
    addMarker('llEnd', 127.11971717230388, 37.49288934463672, 2);
    function addMarker(status: string, lon: number, lat: number, tag: number) {
      let markerLayer;
      let imgURL;
      switch (status) {
        case 'llStart':
          imgURL = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png';
          break;
        case 'llEnd':
          imgURL = 'http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png';
          break;
        default:
      }
      let marker = new window.Tmapv2.Marker({
        position: new window.Tmapv2.LatLng(lat, lon),
        icon: imgURL,
        iconSize: new window.Tmapv2.Size(24, 38),
        map: map,
      });
      // 마커 드래그 설정
      marker.tag = tag;
      marker.addListener('dragend', function (evt: any) {
        markerListenerEvent(evt);
      });
      marker.addListener('drag', function (evt: any) {
        let markerObject = markerList[tag];
      });
      markerList[tag] = marker;
      return marker;
    }

    // 4. 경로탐색 API 사용요청
    let startX = 127.02810900563199;
    let startY = 37.519892712436906;
    let endX = 127.11971717230388;
    let endY = 37.49288934463672;
    let prtcl: any;
    // let headers: any = {};
    // headers['appKey'] = 'xzcK82uy9L4F0tX5C7RmC6Hpc9dpxvDp2ETeW89t';
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://apis.openapi.sk.com/tmap/routes?version=1&format=json', false);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        prtcl = response;

        let trafficColors: TrafficColors = {
          extractStyles: true,
          trafficDefaultColor: '#636f63',
          trafficType1Color: '#19b95f',
          trafficType2Color: '#f15426',
          trafficType3Color: '#ff970e',
        };

        let style_red: StyleRed = {
          fillColor: '#FF0000',
          fillOpacity: 0.2,
          strokeColor: '#FF0000',
          strokeWidth: 3,
          strokeDashstyle: 'solid',
          pointRadius: 2,
          title: 'this is a red line',
        };

        drawData(prtcl);
      }
    };

    let requestData = {
      startX: startX,
      startY: startY,
      endX: endX,
      endY: endY,
      reqCoordType: 'WGS84GEO',
      resCoordType: 'WGS84GEO',
      angle: '172',
      searchOption: '0',
      trafficInfo: 'Y',
    };

    xhr.send(JSON.stringify(requestData));

    if (xhr.status !== 200) {
      console.log('code:' + xhr.status + '\n' + 'message:' + xhr.responseText);
    }
  }, []);

  return <div id="map_div" />;
};

export default MapComponent;

function markerListenerEvent(evt: any) {
  throw new Error('Function not implemented.');
}


// declare global {
//   interface Window {
//     Tmapv2: {
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

// const MapPoli: React.FC = () => {
//   let map: { setCenter: (arg0: any) => void; setZoom: (arg0: number) => void };
//   let marker_s, marker_e;

//   useEffect(() => {

//     const initTmap = () => {
//       map = new window.Tmapv2.Map('map_div', {
//         center: new window.Tmapv2.LatLng(37.5652045, 126.98702028),
//         width: '390px',
//         height: '844px',
//         zoom: 19,
//       });

//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function (position) {
//           const lat = position.coords.latitude;
//           const lon = position.coords.longitude;

//           const options = {
//             method: 'POST',
//             headers: {
//               accept: 'application/json',
//               appKey: 'xzcK82uy9L4F0tX5C7RmC6Hpc9dpxvDp2ETeW89t',
//               'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//               //* 요금 가중치 정보
//               tollgateFareOption: 16,
//               //* 출발 지점의 도로 타입 (32는 기본값(가까운도로))
//               roadType: 32,
//               //* 출발지점의 주행방향 (1은 주행방향 우선)
//               directionOption: 1,
//               //* 목적지 x좌표
//               endX: 127.373761,
//               //* 목적지 y좌표
//               endY: 36.345698,
//               //* 목적지의 RpPlag
//               endRpFlag: 'G',
//               //* WGS84GEO -> 위경도
//               reqCoordType: 'WGS84GEO',
//               //* 출발지 x좌표
//               startX: lon,
//               //* 출발지 y좌표
//               startY: lat,
//               //* GPS타임
//               gpsTime: '20191125153000',
//               //* 차량 진행속도
//               speed: 10,
//               //* 위성수 0 ~ 12
//               uncetaintyP: 1,
//               //* 측위 방법 1: 측위 불량
//               uncetaintyA: 1,
//               //* (Horizontal Dilution of Precision: 0.1단위로 정수화)
//               uncetaintyAP: 1,
//               //* 톨게이트 요금에 대한 차종(0: 미선택)
//               carType: 0,
//               //* 출발지 명칭
//               // startName: '%EC%9D%84%EC%A7%80%EB%A1%9C%20%EC%9E%85%EA%B5%AC%EC%97%AD',
//               //* 도착지 명칭
//               // endName: '%ED%97%A4%EC%9D%B4%EB%A6%AC',
//               //* 경유지들의 도착
//               // passList: '127.38454163183215,36.35127257501252',
//               //* gps궤적 정보 목록
//               // gpsInfoList: '126.939376564495,37.470947057194365,120430,20,50,5,2,12,1_126.939376564495,37.470947057194365,120430,20,50,5,2,12,1',
//               detailPosFlag: '2',
//               resCoordType: 'WGS84GEO',
//               sort: 'index'
//             })
//           };
          
//           fetch('https://apis.openapi.sk.com/tmap/routes?version=1&callback=function', options)
//             .then(response => response.json())
//             .then(response => console.log(response))
//             .catch(err => console.error(err));

//           //? 현재 마커
//           marker_s = new window.Tmapv2.Marker({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_s.png",
// 						iconSize : new window.Tmapv2.Size(24, 38),
//             map: map,
//           });

//           //? 도착 마커
//           marker_e = new window.Tmapv2.Marker({
//             position: new window.Tmapv2.LatLng(36.345698, 127.373761),
//             icon : "http://tmapapi.sktelecom.com/upload/tmap/marker/pin_r_m_e.png",
// 						iconSize : new window.Tmapv2.Size(24, 38),
//             map: map,
//           });
          
//           //? 메시지 창
//           const InfoWindow = new window.Tmapv2.InfoWindow({
//             position: new window.Tmapv2.LatLng(lat, lon),
//             type: 2,
//             map: map,
//           });

//           map.setCenter(new window.Tmapv2.LatLng(lat, lon));
//           map.setZoom(19);
//         });
//       }
//     };

//     window.addEventListener('load', initTmap);
//   }, []);

//   return <div id="map_div"></div>;
// };

// export default MapPoli;