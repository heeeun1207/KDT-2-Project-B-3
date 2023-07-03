import { createContext } from 'react';
//src 안으로 images 폴더 넣었습니다.
import convenienceStoreImage from '../images/convenience-store.png';
import restroomImage from '../images/restroom.png';
import gasStationImage from '../images/gas_station.png';
import cafeImage from '../images/cafe.png';

// 최초 컨텍스트에 더미 데이터 넣음
export interface Button {
  value: string;
  image: string;
  name: string;
}

const DefaultBtnData = createContext<Button[]>([
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
]);

const BtnContext = createContext<Button[]>([
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '카페',
    image: cafeImage,
    name: '카페',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
]);

const BtnContextData: Button[] = [
  {
    value: '편의점',
    image: convenienceStoreImage,
    name: '편의점',
  },
  {
    value: '카페',
    image: cafeImage,
    name: '카페',
  },
  {
    value: '주유소',
    image: gasStationImage,
    name: '주유소',
  },
  {
    value: '화장실',
    image: restroomImage,
    name: '화장실',
  },
];

export { DefaultBtnData, BtnContext, BtnContextData };
