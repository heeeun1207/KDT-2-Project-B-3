//푸터 레이아웃이 들어갈 파일
import React from "react";
import { Link } from "react-router-dom";
export default function navigator() {
  return(
    <>
    <div>
      <Link to="/home">
      <p>홈으로 이동 테스트</p>
      </Link>
      <Link to="/login">
      <p>로그인으로 이동 테스트</p>
      </Link>
    </div>
    </>
  )
}