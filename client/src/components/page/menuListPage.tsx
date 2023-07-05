import React from "react";
import Book from '../common/myBookMark';
import Info from '../common/myInfo';
import alarm from '../images/notifications.png';
import settingImage from '../images/setting.png';
import '../style/OpenMenu.css';

function OpenMenuPage(): JSX.Element {
  return (
    <div className="menuToggle" style={{width : '70%', height : '100%',
    display : 'flex', flexDirection : 'column', 'justifyContent' : "space-around", position: 'fixed', right : 0}}>

      <div className="header">
        <p>Jin님, 환영합니다.</p>
        <button className="settingButton"><img className="imgSize" src={alarm} alt="" /></button>
      </div>

      <Info />
      <Book />

      <div className="setting">
        <button className="settingButton"><img src={settingImage} className="imgSize" alt="" /></button>
      </div>

      <div className="footer">
        <button className="footerButton">고객센터</button>
        <button className="footerButton">로그아웃</button>
      </div>

    </div>
  );
}
export default OpenMenuPage;