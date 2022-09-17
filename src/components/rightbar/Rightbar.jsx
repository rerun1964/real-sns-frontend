import React from 'react'
import "./Rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrppaer">
        <div className="eventCountainer">
          <img src="assets/star.png" alt="" className="starImg"/>
          <span className="evenText">
            <b>フォロワー限定</b>イベント開催中！
          </span>
          </div> 
          <img src="assets/event.jpeg" alt="" />
          <h4 className="rightbarTitle">オンラインの友達</h4>
          <ul className="rightbarFrinedList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img src="assets/person/1.jpeg" alt="" />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUserName">Shin Code</span>
            </li>
          </ul>
      </div>
    </div>
  );
}
