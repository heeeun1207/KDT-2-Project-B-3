import { createContext } from 'react';
// 최초 컨텍스트에 더미 데이터 넣음
export const BtnContext = createContext<string>("테스트");
export const BtnContextData = "하이"
